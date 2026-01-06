import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

// Simple in-memory rate limiting (Note: resets on server restart)
const attempts = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        // Rate Limiting Logic
        const now = Date.now();
        const userAttempts = attempts.get(ip) || { count: 0, timestamp: now };

        if (now - userAttempts.timestamp > RATE_LIMIT_WINDOW) {
            userAttempts.count = 0;
            userAttempts.timestamp = now;
        }

        if (userAttempts.count >= MAX_ATTEMPTS) {
            return NextResponse.json(
                { message: 'Muitas tentativas. Tente novamente em 15 minutos.' },
                { status: 429 }
            );
        }

        userAttempts.count++;
        attempts.set(ip, userAttempts);

        // Password Check
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword) {
            console.error('ADMIN_PASSWORD not set in environment variables');
            return NextResponse.json(
                { message: 'Erro de configuração do servidor.' },
                { status: 500 }
            );
        }

        if (password !== adminPassword) {
            return NextResponse.json(
                { message: 'Senha incorreta.' },
                { status: 401 }
            );
        }

        // Success - Reset attempts and set cookie
        attempts.delete(ip);

        // Create response
        const response = NextResponse.json({ success: true });

        // Set HTTP-only cookie
        response.cookies.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { message: 'Erro interno do servidor.' },
            { status: 500 }
        );
    }
}
