'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Reusable Google reCAPTCHA v2 Component
 *
 * @param {Object} props
 * @param {Function} props.onVerify - Callback function receiving token
 * @param {Function} [props.onExpire] - Callback when verification expires
 * @param {string} [props.className] - Container CSS class
 * @param {string} [props.error] - Error message to display below
 */
export default function ReCAPTCHA({
    onVerify,
    onExpire,
    className = '',
    error = '',
}) {
    const containerRef = useRef(null);
    const widgetIdRef = useRef(null);
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    useEffect(() => {
        if (!siteKey) {
            console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined.');
            return;
        }

        let isMounted = true;

        const renderWidget = () => {
            if (!containerRef.current || !window.grecaptcha || !window.grecaptcha.render) {
                return;
            }

            // Avoid double rendering if already rendered
            if (widgetIdRef.current !== null) {
                return;
            }

            try {
                widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
                    sitekey: siteKey,
                    callback: (token) => {
                        if (isMounted && onVerify) {
                            onVerify(token);
                        }
                    },
                    'expired-callback': () => {
                        if (isMounted && onExpire) {
                            onExpire();
                        }
                    },
                });
            } catch (err) {
                console.error('Error rendering reCAPTCHA:', err);
            }
        };

        if (window.grecaptcha && window.grecaptcha.render) {
            renderWidget();
        } else {
            // Load script if not already loaded
            const existingScript = document.getElementById('google-recaptcha-script');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'google-recaptcha-script';
                script.src = 'https://www.google.com/recaptcha/api.js?onload=onGoogleRecaptchaLoad&render=explicit';
                script.async = true;
                script.defer = true;
                window.onGoogleRecaptchaLoad = () => {
                    renderWidget();
                };
                document.head.appendChild(script);
            } else {
                const checkInterval = setInterval(() => {
                    if (window.grecaptcha && window.grecaptcha.render) {
                        clearInterval(checkInterval);
                        renderWidget();
                    }
                }, 100);
                setTimeout(() => clearInterval(checkInterval), 5000);
            }
        }

        return () => {
            isMounted = false;
        };
    }, [siteKey, onVerify, onExpire]);

    if (!siteKey) {
        return null;
    }

    return (
        <div className={`w-full flex flex-col items-start ${className}`}>
            <div className="overflow-hidden max-w-full rounded-lg">
                <div ref={containerRef} className="recaptcha-wrapper" />
            </div>
            {error && <p className="text-red-500 text-xs mt-1.5 font-medium">{error}</p>}
        </div>
    );
}
