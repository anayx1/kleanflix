import nodemailer from 'nodemailer';

/**
 * Creates and returns a Nodemailer transporter instance configured with SMTP settings
 */
export function getTransporter() {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER;
    // Gmail App Passwords can be 16 characters with or without spaces; strip whitespace
    const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : undefined;

    if (!user || !pass) {
        console.warn('⚠️ SMTP_USER or SMTP_PASS is missing in environment variables.');
    }

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            user,
            pass,
        },
    });
}

/**
 * Sends an email using Nodemailer
 *
 * @param {Object} options
 * @param {string} [options.to] - Destination email address (defaults to SMTP_TO or SMTP_USER)
 * @param {string} options.subject - Email subject line
 * @param {string} options.html - HTML email body content
 * @param {string} [options.text] - Plain text fallback
 * @param {string} [options.replyTo] - Reply-To address (e.g., submitter's email)
 * @returns {Promise<{ success: boolean, messageId?: string, error?: string }>}
 */
export async function sendEmail({ to, subject, html, text, replyTo }) {
    try {
        const transporter = getTransporter();
        let recipient = to || process.env.SMTP_TO || process.env.SMTP_USER;
        const senderUser = process.env.SMTP_USER ? process.env.SMTP_USER.trim() : undefined;
        const senderName = process.env.SMTP_FROM_NAME || 'Kleanfix Notifications';

        if (!recipient) {
            throw new Error('No recipient email specified and SMTP_TO / SMTP_USER is not configured.');
        }

        // Clean and format multiple comma-separated recipients
        if (typeof recipient === 'string' && recipient.includes(',')) {
            const cleanRecipients = recipient
                .split(',')
                .map((email) => email.trim())
                .filter(Boolean);
            recipient = cleanRecipients.join(', ');
        } else if (typeof recipient === 'string') {
            recipient = recipient.trim();
        }

        const mailOptions = {
            from: `"${senderName}" <${senderUser || 'noreply@kleanfix.com'}>`,
            to: recipient,
            subject,
            html,
            text: text || html.replace(/<[^>]*>?/gm, ''), // fallback strip html
            ...(replyTo ? { replyTo: replyTo.trim() } : {}),
        };

        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Failed to send email via Nodemailer:', error);
        return { success: false, error: error.message || 'Failed to send email' };
    }
}
