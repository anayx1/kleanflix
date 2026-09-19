import { NextResponse } from 'next/server';
import { getAdminByIdentifier } from '@/lib/db';
import { verifyPassword, createSessionToken, SESSION_COOKIE_NAME, SESSION_MAX_AGE } from '@/lib/auth';
import { checkRateLimit, getClientIp, getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function POST(request) {
    const corsHeaders = getCorsHeaders(request);

    try {
        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(`login:${clientIp}`, {
            limit: 5,
            windowMs: 60 * 1000,
        });

        if (rateLimit.isLimited) {
            return NextResponse.json(
                { success: false, error: 'Too many login attempts. Please wait a minute.' },
                { status: 429, headers: corsHeaders }
            );
        }

        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { success: false, error: 'Please provide both username and password.' },
                { status: 400, headers: corsHeaders }
            );
        }

        const admin = getAdminByIdentifier(username);
        if (!admin) {
            return NextResponse.json(
                { success: false, error: 'Invalid username or password.' },
                { status: 401, headers: corsHeaders }
            );
        }

        const isValid = verifyPassword(password, admin.passwordHash, admin.salt);
        if (!isValid) {
            return NextResponse.json(
                { success: false, error: 'Invalid username or password.' },
                { status: 401, headers: corsHeaders }
            );
        }

        // Generate session token
        const token = createSessionToken({
            id: admin.id,
            username: admin.username,
            email: admin.email,
        });

        const response = NextResponse.json(
            {
                success: true,
                message: 'Login successful',
                user: {
                    id: admin.id,
                    username: admin.username,
                    email: admin.email,
                },
            },
            { headers: corsHeaders }
        );

        // Set secure HTTP-only cookie
        response.cookies.set({
            name: SESSION_COOKIE_NAME,
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: SESSION_MAX_AGE,
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { success: false, error: 'An unexpected error occurred during login.' },
            { status: 500, headers: corsHeaders }
        );
    }
}
