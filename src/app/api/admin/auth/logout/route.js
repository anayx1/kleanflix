import { NextResponse } from 'next/server';
import { SESSION_COOKIE_NAME } from '@/lib/auth';
import { getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function POST(request) {
    const corsHeaders = getCorsHeaders(request);

    const response = NextResponse.json(
        { success: true, message: 'Logged out successfully' },
        { headers: corsHeaders }
    );

    // Clear session cookie
    response.cookies.set({
        name: SESSION_COOKIE_NAME,
        value: '',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 0,
    });

    return response;
}
