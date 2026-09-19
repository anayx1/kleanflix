/**
 * Email Templates with Kleanfix Brand Styling
 * Primary Color: #1E6BB8 | Dark Primary: #0E4A8A | Secondary Color: #F47A1F
 */

const REQUIREMENT_LABELS = {
    'oem-private-label': 'OEM & Private Label Execution',
    'product-customization': 'Build Your Product Line',
    'bulk-manufacturing': 'Bulk Manufacturing & Supply',
    'export-orders': 'Exports & Global Supply',
    'institutional-cleaning': 'Commercial & Institutional',
    'other-inquiry': 'Other General Inquiry',
};

/**
 * Escapes HTML characters to prevent XSS in email templates
 */
function escapeHtml(text = '') {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Formats a date nicely for email display
 */
function formatSubmissionDate(date = new Date()) {
    return new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
    }).format(date);
}

/**
 * Generates branded HTML email for Contact / Requirement Submissions
 */
export function getContactEmailHtml({
    requirementType = '',
    companyName = '',
    fullName = '',
    contactNumber = '',
    emailAddress = '',
    message = '',
    submittedAt = new Date(),
}) {
    const formattedReqType = REQUIREMENT_LABELS[requirementType] || requirementType || 'General Requirement';
    const formattedDate = formatSubmissionDate(submittedAt);
    const safeCompanyName = escapeHtml(companyName);
    const safeFullName = escapeHtml(fullName);
    const safeContactNumber = escapeHtml(contactNumber);
    const safeEmailAddress = escapeHtml(emailAddress);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Requirement Lead</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F4F6F8; font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1E293B;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F6F8; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(30, 107, 184, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #1E6BB8 0%, #0E4A8A 65%, #F47A1F 100%); height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; background-color: #FFFFFF; border-bottom: 1px solid #EEF2F6;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <!-- KLEANFIX Logo Representation -->
                    <div style="font-size: 26px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase; line-height: 1;">
                      <span style="color: #1E6BB8;">KLEAN</span><span style="color: #F47A1F;">FIX</span>
                    </div>
                    <div style="font-size: 11px; color: #64748B; margin-top: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px;">
                      Industries Pvt. Ltd.
                    </div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display: inline-block; background-color: #FFF3EB; color: #F47A1F; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #FED7AA;">
                      New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Notification Hero Banner -->
          <tr>
            <td style="padding: 24px 32px 16px 32px; background-color: #F8FAFC;">
              <h1 style="margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #0E4A8A; line-height: 1.3;">
                New Requirement Inquiry Received
              </h1>
              <p style="margin: 0; font-size: 13px; color: #64748B;">
                Received on <strong>${formattedDate}</strong> via Website Contact Form
              </p>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 24px 32px;">
              
              <!-- Highlighted Requirement Type -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px; background: #EFF6FF; border-left: 4px solid #1E6BB8; border-radius: 0 8px 8px 0; padding: 12px 16px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #1E6BB8; letter-spacing: 0.5px; margin-bottom: 2px;">
                      Requirement Category
                    </div>
                    <div style="font-size: 16px; font-weight: 700; color: #0E4A8A;">
                      ${formattedReqType}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Lead Details Table -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 24px;">
                
                <!-- Full Name -->
                <tr>
                  <td width="35%" style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 13px; font-weight: 600; color: #64748B;">
                    Client Name
                  </td>
                  <td width="65%" style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 700; color: #0F172A;">
                    ${safeFullName}
                  </td>
                </tr>

                <!-- Company Name -->
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 13px; font-weight: 600; color: #64748B;">
                    Company / Organization
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 600; color: #1E293B;">
                    ${safeCompanyName}
                  </td>
                </tr>

                <!-- Contact Number -->
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 13px; font-weight: 600; color: #64748B;">
                    Phone Number
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 600;">
                    <a href="tel:${safeContactNumber.replace(/\s+/g, '')}" style="color: #1E6BB8; text-decoration: none; font-weight: 700;">
                      ${safeContactNumber}
                    </a>
                  </td>
                </tr>

                <!-- Email Address -->
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 13px; font-weight: 600; color: #64748B;">
                    Email Address
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${safeEmailAddress}" style="color: #1E6BB8; text-decoration: underline;">
                      ${safeEmailAddress}
                    </a>
                  </td>
                </tr>

              </table>

              <!-- Message / Requirement Description Box -->
              <div style="margin-top: 16px;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Requirement Details / Message:
                </div>
                <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #334155;">
                  ${safeMessage || '<em style="color: #94A3B8;">No additional message specified by the client.</em>'}
                </div>
              </div>

              <!-- Quick Action Reply Button -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td align="center">
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 8px; background-color: #F47A1F;">
                          <a href="mailto:${safeEmailAddress}?subject=Re: Requirement Inquiry - Kleanfix Industries" style="display: inline-block; padding: 12px 28px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                            Reply to Client
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #F8FAFC; border-top: 1px solid #EEF2F6; padding: 20px 32px; text-align: center;">
              <div style="font-size: 12px; color: #0E4A8A; font-weight: 600; margin-bottom: 4px;">
                Kleanfix Industries Pvt. Ltd.
              </div>
              <div style="font-size: 11px; color: #64748B; line-height: 1.5;">
                G-17, Vishwakarma Colony, M.B. Road, New Delhi – 110044, India<br />
                This automated notification was generated from the Kleanfix website.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
}

/**
 * Generates branded HTML email for Newsletter Subscriptions
 */
export function getNewsletterEmailHtml({
    email = '',
    subscribedAt = new Date(),
}) {
    const formattedDate = formatSubmissionDate(subscribedAt);
    const safeEmail = escapeHtml(email);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Newsletter Subscription</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F6F8; font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F6F8; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 540px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(30, 107, 184, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #1E6BB8 0%, #F47A1F 100%); height: 5px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 24px 28px 18px 28px; background-color: #FFFFFF; border-bottom: 1px solid #EEF2F6;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 22px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                      <span style="color: #1E6BB8;">KLEAN</span><span style="color: #F47A1F;">FIX</span>
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: #EFF6FF; color: #1E6BB8; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 14px; text-transform: uppercase;">
                      Newsletter
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 24px 28px;">
              <h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 700; color: #0E4A8A;">
                New Newsletter Subscriber
              </h2>
              <p style="margin: 0 0 20px 0; font-size: 13px; color: #64748B;">
                A new user just subscribed to the Kleanfix newsletter via the website footer.
              </p>

              <!-- Subscriber Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px; margin-bottom: 4px;">
                      Subscriber Email
                    </div>
                    <div style="font-size: 16px; font-weight: 700; color: #1E6BB8;">
                      <a href="mailto:${safeEmail}" style="color: #1E6BB8; text-decoration: none;">
                        ${safeEmail}
                      </a>
                    </div>
                    <div style="font-size: 12px; color: #94A3B8; margin-top: 6px;">
                      Subscribed on ${formattedDate}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #F8FAFC; border-top: 1px solid #EEF2F6; padding: 16px 28px; text-align: center;">
              <div style="font-size: 11px; color: #64748B;">
                Kleanfix Industries Pvt. Ltd. • Automated Website Alert
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
}

/**
 * Generates branded HTML email for Admin Forgot Password OTP Code
 */
export function getOtpEmailHtml({
    otp = '',
    username = 'Administrator',
    requestedAt = new Date(),
    expiresInMinutes = 15,
}) {
    const formattedDate = formatSubmissionDate(requestedAt);
    const safeUsername = escapeHtml(username);
    const safeOtp = escapeHtml(otp);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kleanfix Admin Password Reset Code</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F6F8; font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F4F6F8; padding: 28px 12px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 540px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(30, 107, 184, 0.1); border: 1px solid #E2E8F0;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #1E6BB8 0%, #0E4A8A 65%, #F47A1F 100%); height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="padding: 26px 32px 20px 32px; background-color: #FFFFFF; border-bottom: 1px solid #EEF2F6;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 24px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                      <span style="color: #1E6BB8;">KLEAN</span><span style="color: #F47A1F;">FIX</span>
                    </div>
                    <div style="font-size: 11px; color: #64748B; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px;">
                      Admin Security Portal
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: #FEF2F2; color: #DC2626; font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 16px; text-transform: uppercase; border: 1px solid #FECACA;">
                      Security Verification
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 28px 32px;">
              <h2 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 700; color: #0E4A8A;">
                Password Reset Verification Code
              </h2>
              <p style="margin: 0 0 20px 0; font-size: 14px; color: #475569; line-height: 1.5;">
                Hello <strong>${safeUsername}</strong>, we received a request to reset your password for the Kleanfix Admin Panel on <strong>${formattedDate}</strong>.
              </p>

              <!-- OTP Code Display Card -->
              <div style="background: #F8FAFC; border: 2px dashed #1E6BB8; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 1px; margin-bottom: 8px;">
                  Your One-Time Verification Code
                </div>
                <div style="font-size: 36px; font-weight: 900; letter-spacing: 8px; color: #1E6BB8; font-family: monospace; line-height: 1;">
                  ${safeOtp}
                </div>
                <div style="font-size: 12px; color: #EF4444; font-weight: 600; margin-top: 10px;">
                  ⏱ This code expires in ${expiresInMinutes} minutes.
                </div>
              </div>

              <div style="background-color: #FFFBEB; border: 1px solid #FDE68A; border-radius: 8px; padding: 12px 16px; font-size: 12px; color: #92400E; line-height: 1.5;">
                <strong>Security Notice:</strong> If you did not initiate this password reset request, please ignore this email. Your password will remain unchanged.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; border-top: 1px solid #EEF2F6; padding: 18px 32px; text-align: center;">
              <div style="font-size: 12px; color: #0E4A8A; font-weight: 600;">
                Kleanfix Industries Pvt. Ltd.
              </div>
              <div style="font-size: 11px; color: #64748B; margin-top: 2px;">
                Direct admin security notification sent to administrator@kleanfix.com
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
}

