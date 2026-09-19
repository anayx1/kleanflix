/**
 * List of allowed production & development origins for CORS
 */
export const ALLOWED_ORIGINS = [
    'https://www.kleanfix.com',
    'https://kleanfix.com',
    'https://www.kleanfix.in',
    'https://kleanfix.in',
    'https://kleanfix.vercel.app',

];

/**
 * Gets Client IP address from request headers
 */
export function getClientIp(request) {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }
    return (
        request.headers.get('x-real-ip') ||
        request.headers.get('cf-connecting-ip') ||
        '127.0.0.1'
    );
}

/**
 * Validates and gets CORS headers based on request origin
 */
export function getCorsHeaders(request) {
    const origin = request.headers.get('origin');
    const headers = {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age': '86400',
    };

    if (!origin) {
        // Same-origin or non-browser request
        return headers;
    }

    const isAllowed = ALLOWED_ORIGINS.some(
        (allowed) => origin === allowed || allowed.includes(origin)
    );

    if (isAllowed) {
        headers['Access-Control-Allow-Origin'] = origin;
        headers['Access-Control-Allow-Credentials'] = 'true';
    }

    return headers;
}

/**
 * Generates an OPTIONS preflight response with CORS headers
 */
export function handleCorsPreflight(request) {
    const headers = getCorsHeaders(request);
    return new Response(null, {
        status: 204,
        headers,
    });
}

// In-Memory Rate Limiter Store
const rateLimitStore = new Map();

// Periodic cleanup every 5 minutes
if (typeof setInterval !== 'undefined') {
    const timer = setInterval(() => {
        const now = Date.now();
        for (const [key, data] of rateLimitStore.entries()) {
            if (now > data.resetTime) {
                rateLimitStore.delete(key);
            }
        }
    }, 5 * 60 * 1000);

    if (timer && typeof timer.unref === 'function') {
        timer.unref();
    }
}

/**
 * Checks in-memory sliding window rate limit for a given key/IP
 *
 * @param {string} key - Unique identifier (e.g. IP address + route)
 * @param {Object} [options]
 * @param {number} [options.limit=5] - Maximum allowed requests in window
 * @param {number} [options.windowMs=60000] - Window duration in milliseconds (default: 1 min)
 * @returns {{ isLimited: boolean, current: number, remaining: number, resetTime: number }}
 */
export function checkRateLimit(key, { limit = 5, windowMs = 60 * 1000 } = {}) {
    const now = Date.now();
    let record = rateLimitStore.get(key);

    if (!record || now > record.resetTime) {
        record = {
            count: 1,
            resetTime: now + windowMs,
        };
        rateLimitStore.set(key, record);
        return {
            isLimited: false,
            current: 1,
            remaining: limit - 1,
            resetTime: record.resetTime,
        };
    }

    record.count += 1;

    if (record.count > limit) {
        return {
            isLimited: true,
            current: record.count,
            remaining: 0,
            resetTime: record.resetTime,
        };
    }

    return {
        isLimited: false,
        current: record.count,
        remaining: limit - record.count,
        resetTime: record.resetTime,
    };
}
