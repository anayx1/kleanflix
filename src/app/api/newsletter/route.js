import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { getNewsletterEmailHtml } from '@/lib/emailTemplates';
import { checkRateLimit, getClientIp, getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function POST(request) {
    const corsHeaders = getCorsHeaders(request);

    try {
        // Rate Limiting: Max 5 newsletter subscriptions per minute per IP
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`newsletter:${clientIp}`, {
            limit: 5,
            windowMs: 60 * 1000,
        });

        if (rateLimit.isLimited) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Too many requests. Please wait a minute before subscribing again.',
                },
                {
                    status: 429,
                    headers: {
                        ...corsHeaders,
                        'Retry-After': '60',
                    },
                }
            );
        }

        const body = await request.json();
        const { email } = body;

        if (!email || !email.trim()) {
            return NextResponse.json(
                { success: false, error: 'Email address is required.' },
                { status: 400, headers: corsHeaders }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid email address.' },
                { status: 400, headers: corsHeaders }
            );
        }

        const htmlContent = getNewsletterEmailHtml({
            email: email.trim(),
            subscribedAt: new Date(),
        });

        const subject = `[New Newsletter Subscriber] ${email.trim()}`;

        const result = await sendEmail({
            subject,
            html: htmlContent,
            replyTo: email.trim(),
        });

        if (!result.success) {
            console.error('Email sending failed in /api/newsletter:', result.error);
            return NextResponse.json(
                { success: false, error: result.error || 'Failed to send subscription notification.' },
                { status: 500, headers: corsHeaders }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Subscription successful.',
            },
            { headers: corsHeaders }
        );
    } catch (error) {
        console.error('Error handling /api/newsletter request:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error while processing request.' },
            { status: 500, headers: corsHeaders }
        );
    }
}
