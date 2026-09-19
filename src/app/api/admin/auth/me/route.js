import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { getCorsHeaders, handleCorsPreflight } from '@/lib/security';

export async function OPTIONS(request) {
    return handleCorsPreflight(request);
}

export async function GET(request) {
    const corsHeaders = getCorsHeaders(request);
    const session = await getAdminSession();

    if (!session) {
        return NextResponse.json(
            { success: false, error: 'Unauthorized' },
            { status: 401, headers: corsHeaders }
        );
    }

    return NextResponse.json(
        {
            success: true,
            user: {
                id: session.id,
                username: session.username,
                email: session.email,
            },
        },
        { headers: corsHeaders }
    );
}
