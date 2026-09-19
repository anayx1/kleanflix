/**
 * Server-side Google reCAPTCHA Verification Helper
 */
export async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.warn('⚠️ RECAPTCHA_SECRET_KEY is missing in environment variables.');
        return { success: true };
    }

    if (!token) {
        return { success: false, error: 'Please complete the reCAPTCHA verification.' };
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();

        if (data.success) {
            return { success: true };
        }

        console.error('Google reCAPTCHA error codes:', data['error-codes']);
        return {
            success: false,
            error: 'reCAPTCHA verification failed. Please check the checkbox again.',
        };
    } catch (error) {
        console.error('Error validating reCAPTCHA token:', error);
        return {
            success: false,
            error: 'Failed to connect to reCAPTCHA service. Please try again.',
        };
    }
}
