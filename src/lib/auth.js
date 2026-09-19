import crypto from 'crypto';
import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'kleanfix_admin_session';
const SESSION_SECRET = process.env.ADMIN_JWT_SECRET || process.env.RECAPTCHA_SECRET_KEY || 'kleanfix_super_secure_admin_secret_key_2026';
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

/**
 * Generates a random salt
 */
export function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

/**
 * Hashes a password using PBKDF2 (SHA512)
 */
export function hashPassword(password, salt) {
    if (!salt) {
        salt = generateSalt();
    }
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return { hash, salt };
}

/**
 * Verifies a password against stored hash and salt
 */
export function verifyPassword(password, hash, salt) {
    if (!password || !hash || !salt) return false;
    const { hash: calculatedHash } = hashPassword(password, salt);
    return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(calculatedHash, 'hex'));
}

/**
 * Generates a 6-digit OTP code
 */
export function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Creates a signed session token
 */
export function createSessionToken(payload) {
    const data = JSON.stringify({
        ...payload,
        exp: Date.now() + SESSION_MAX_AGE * 1000,
    });
    const base64Data = Buffer.from(data).toString('base64url');
    const signature = crypto
        .createHmac('sha256', SESSION_SECRET)
        .update(base64Data)
        .digest('base64url');

    return `${base64Data}.${signature}`;
}

/**
 * Verifies and decodes a signed session token
 */
export function verifySessionToken(token) {
    if (!token || typeof token !== 'string') return null;

    const parts = token.split('.');
    if (parts.length !== 2) return null;

    const [base64Data, signature] = parts;
    const expectedSignature = crypto
        .createHmac('sha256', SESSION_SECRET)
        .update(base64Data)
        .digest('base64url');

    if (signature !== expectedSignature) {
        return null;
    }

    try {
        const decoded = JSON.parse(Buffer.from(base64Data, 'base64url').toString('utf8'));
        if (decoded.exp && Date.now() > decoded.exp) {
            return null; // Expired
        }
        return decoded;
    } catch {
        return null;
    }
}

/**
 * Server-side helper to check if current request has a valid admin session
 */
export async function getAdminSession() {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
        if (!sessionCookie?.value) return null;
        return verifySessionToken(sessionCookie.value);
    } catch {
        return null;
    }
}

export { SESSION_COOKIE_NAME, SESSION_MAX_AGE };
