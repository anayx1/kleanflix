import { NextResponse } from 'next/server';
import { verifyAndConsumeAdminOtp, updateAdminPassword } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { checkRateLimit, getClientIp, getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function POST(request) {
    const corsHeaders = getCorsHeaders(request);

    try {
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`reset-pw:${clientIp}`, {
            limit: 5,
            windowMs: 60 * 1000,
        });

        if (rateLimit.isLimited) {
            return NextResponse.json(
                { success: false, error: 'Too many attempts. Please wait a minute.' },
                { status: 429, headers: corsHeaders }
            );
        }

        const body = await request.json();
        const { email, otpCode, newPassword } = body;

        if (!email || !otpCode || !newPassword) {
            return NextResponse.json(
                { success: false, error: 'Please provide email, verification code, and new password.' },
                { status: 400, headers: corsHeaders }
            );
        }

        if (newPassword.length < 6) {
            return NextResponse.json(
                { success: false, error: 'New password must be at least 6 characters long.' },
                { status: 400, headers: corsHeaders }
            );
        }

        const targetEmail = email.trim().toLowerCase();
        const otpValidation = verifyAndConsumeAdminOtp(targetEmail, otpCode.trim());

        if (!otpValidation.valid) {
            return NextResponse.json(
                { success: false, error: otpValidation.message || 'Invalid or expired verification code.' },
                { status: 400, headers: corsHeaders }
            );
        }

        // Hash new password
        const { hash, salt } = hashPassword(newPassword);

        // Update in database
        const updated = updateAdminPassword(targetEmail, hash, salt);

        if (!updated) {
            return NextResponse.json(
                { success: false, error: 'Failed to update password. User not found.' },
                { status: 404, headers: corsHeaders }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Password reset successfully! You can now log in with your new password.',
            },
            { headers: corsHeaders }
        );
    } catch (error) {
        console.error('Reset password error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error while resetting password.' },
            { status: 500, headers: corsHeaders }
        );
    }
}
