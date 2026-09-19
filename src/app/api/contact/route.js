import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { getContactEmailHtml } from '@/lib/emailTemplates';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { checkRateLimit, getClientIp, getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function POST(request) {
    const corsHeaders = getCorsHeaders(request);

    try {
        // Rate Limiting: Max 5 submissions per minute per IP
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`contact:${clientIp}`, {
            limit: 5,
            windowMs: 60 * 1000,
        });

        if (rateLimit.isLimited) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Too many requests. Please wait a minute before submitting again.',
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
        const {
            requirementType,
            companyName,
            fullName,
            contactNumber,
            emailAddress,
            message,
            recaptchaToken,
        } = body;

        // Verify reCAPTCHA
        const recaptchaResult = await verifyRecaptcha(recaptchaToken);
        if (!recaptchaResult.success) {
            return NextResponse.json(
                { success: false, error: recaptchaResult.error || 'reCAPTCHA verification failed.' },
                { status: 400, headers: corsHeaders }
            );
        }

        // Validation
        if (!requirementType || !companyName?.trim() || !fullName?.trim() || !contactNumber?.trim() || !emailAddress?.trim()) {
            return NextResponse.json(
                { success: false, error: 'Please fill in all required fields.' },
                { status: 400, headers: corsHeaders }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress.trim())) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid email address.' },
                { status: 400, headers: corsHeaders }
            );
        }

        const htmlContent = getContactEmailHtml({
            requirementType,
            companyName: companyName.trim(),
            fullName: fullName.trim(),
            contactNumber: contactNumber.trim(),
            emailAddress: emailAddress.trim(),
            message: message ? message.trim() : '',
            submittedAt: new Date(),
        });

        const subject = `[New Requirement] ${fullName.trim()} - ${companyName.trim()}`;

        const result = await sendEmail({
            subject,
            html: htmlContent,
            replyTo: emailAddress.trim(),
        });

        if (!result.success) {
            console.error('Email sending failed in /api/contact:', result.error);
            return NextResponse.json(
                { success: false, error: result.error || 'Failed to send inquiry email.' },
                { status: 500, headers: corsHeaders }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Requirement inquiry sent successfully.',
            },
            { headers: corsHeaders }
        );
    } catch (error) {
        console.error('Error handling /api/contact request:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error while processing request.' },
            { status: 500, headers: corsHeaders }
        );
    }
}
