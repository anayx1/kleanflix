import { NextResponse } from 'next/server';
import { getAdminByEmail, setAdminOtp } from '@/lib/db';
import { generateOtp } from '@/lib/auth';
import { sendEmail } from '@/lib/email';
import { getOtpEmailHtml } from '@/lib/emailTemplates';
import { checkRateLimit, getClientIp, getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function POST(request) {
    const corsHeaders = getCorsHeaders(request);

    try {
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`forgot-pw:${clientIp}`, {
            limit: 3,
            windowMs: 60 * 1000,
        });

        if (rateLimit.isLimited) {
            return NextResponse.json(
                { success: false, error: 'Too many OTP requests. Please wait a minute.' },
                { status: 429, headers: corsHeaders }
            );
        }

        const body = await request.json().catch(() => ({}));
        const targetEmail = (body.email || 'administrator@kleanfix.com').trim().toLowerCase();

        const admin = getAdminByEmail(targetEmail);
        if (!admin) {
            // For security, do not expose whether email exists, return generic success message
            return NextResponse.json(
                {
                    success: true,
                    message: 'If the email exists, a verification code has been dispatched.',
                },
                { headers: corsHeaders }
            );
        }

        // Generate 6-digit OTP
        const otpCode = generateOtp();
        const expiresInMinutes = 15;

        // Save OTP to DB
        setAdminOtp(admin.email, otpCode, expiresInMinutes);

        // Send OTP email to administrator@kleanfix.com
        const html = getOtpEmailHtml({
            otp: otpCode,
            username: admin.username,
            requestedAt: new Date(),
            expiresInMinutes,
        });

        const sendResult = await sendEmail({
            to: admin.email,
            subject: `[Kleanfix Admin] ${otpCode} is your Password Reset Code`,
            html,
        });

        if (!sendResult.success) {
            console.error('Failed to send OTP email:', sendResult.error);
            return NextResponse.json(
                { success: false, error: 'Failed to deliver OTP email. Check SMTP setup.' },
                { status: 500, headers: corsHeaders }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: `A 6-digit verification code has been sent to ${admin.email}.`,
                email: admin.email,
            },
            { headers: corsHeaders }
        );
    } catch (error) {
        console.error('Forgot password error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error processing OTP request.' },
            { status: 500, headers: corsHeaders }
        );
    }
}
