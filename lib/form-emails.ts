import { siteConfig } from "@/config/site";

type EmailField = {
  label: string;
  value: string;
};

type EmailCta = {
  label: string;
  href: string;
};

type EmailTemplateOptions = {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  highlightLabel: string;
  highlightValue: string;
  fields?: EmailField[];
  detailHeading?: string;
  detailBody?: string;
  nextStepsHeading?: string;
  nextSteps: string[];
  cta?: EmailCta;
  footerNote: string;
};

const brandColors = {
  navy: "#0B1F3A",
  navySoft: "#162B4C",
  gold: "#CDA349",
  teal: "#07AFBB",
  surface: "#F4F7FA",
  border: "#D8E0EA",
  text: "#223247",
  muted: "#5F6F83",
  white: "#FFFFFF",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatText = (value: string) => escapeHtml(value).replace(/\n/g, "<br />");

const renderFields = (fields: EmailField[] = []) => {
  if (fields.length === 0) {
    return "";
  }

  return fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding: 0 0 16px;">
            <div style="border: 1px solid ${brandColors.border}; border-radius: 14px; padding: 16px 18px; background: ${brandColors.white};">
              <div style="font-size: 11px; line-height: 1.4; letter-spacing: 0.14em; text-transform: uppercase; color: ${brandColors.teal}; font-weight: 700; margin-bottom: 8px;">
                ${escapeHtml(label)}
              </div>
              <div style="font-size: 16px; line-height: 1.7; color: ${brandColors.text}; font-weight: 500;">
                ${formatText(value)}
              </div>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
};

const renderSteps = (steps: string[]) =>
  steps
    .map(
      (step) => `
        <tr>
          <td style="padding: 0 0 12px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td style="width: 28px; vertical-align: top;">
                  <div style="width: 18px; height: 18px; margin-top: 4px; border-radius: 999px; background: ${brandColors.gold};"></div>
                </td>
                <td style="font-size: 15px; line-height: 1.8; color: ${brandColors.text};">
                  ${escapeHtml(step)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `,
    )
    .join("");

const renderButton = (cta?: EmailCta) => {
  if (!cta) {
    return "";
  }

  return `
    <tr>
      <td style="padding: 28px 0 0;">
        <a
          href="${escapeHtml(cta.href)}"
          style="display: inline-block; padding: 14px 24px; border-radius: 999px; background: ${brandColors.gold}; color: ${brandColors.navy}; font-size: 13px; line-height: 1; font-weight: 800; letter-spacing: 0.08em; text-decoration: none; text-transform: uppercase;"
        >
          ${escapeHtml(cta.label)}
        </a>
      </td>
    </tr>
  `;
};

const buildEmailTemplate = ({
  preheader,
  eyebrow,
  title,
  intro,
  highlightLabel,
  highlightValue,
  fields,
  detailHeading,
  detailBody,
  nextStepsHeading,
  nextSteps,
  cta,
  footerNote,
}: EmailTemplateOptions) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin: 0; padding: 0; background: ${brandColors.surface}; font-family: Arial, Helvetica, sans-serif; color: ${brandColors.text};">
      <span style="display: none; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; overflow: hidden;">
        ${escapeHtml(preheader)}
      </span>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background: ${brandColors.surface};">
        <tr>
          <td align="center" style="padding: 32px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px; background: ${brandColors.white}; border-radius: 24px; overflow: hidden;">
              <tr>
                <td style="padding: 0; background: linear-gradient(135deg, ${brandColors.navy} 0%, ${brandColors.navySoft} 100%);">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding: 34px 36px 30px;">
                        <div style="font-size: 12px; line-height: 1.4; letter-spacing: 0.16em; text-transform: uppercase; color: ${brandColors.gold}; font-weight: 700; margin-bottom: 14px;">
                          ${escapeHtml(eyebrow)}
                        </div>
                        <div style="font-size: 34px; line-height: 1.15; color: ${brandColors.white}; font-weight: 800; margin: 0 0 14px;">
                          ${escapeHtml(title)}
                        </div>
                        <div style="font-size: 16px; line-height: 1.8; color: rgba(255, 255, 255, 0.86);">
                          ${escapeHtml(intro)}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 32px 36px 14px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid ${brandColors.border}; border-radius: 18px; background: ${brandColors.surface};">
                    <tr>
                      <td style="padding: 22px 24px;">
                        <div style="font-size: 11px; line-height: 1.4; letter-spacing: 0.14em; text-transform: uppercase; color: ${brandColors.teal}; font-weight: 700; margin-bottom: 8px;">
                          ${escapeHtml(highlightLabel)}
                        </div>
                        <div style="font-size: 24px; line-height: 1.3; color: ${brandColors.navy}; font-weight: 800;">
                          ${escapeHtml(highlightValue)}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 36px 8px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    ${renderFields(fields)}
                  </table>
                </td>
              </tr>
              ${
                detailHeading && detailBody
                  ? `
                    <tr>
                      <td style="padding: 8px 36px 8px;">
                        <div style="font-size: 11px; line-height: 1.4; letter-spacing: 0.14em; text-transform: uppercase; color: ${brandColors.teal}; font-weight: 700; margin-bottom: 8px;">
                          ${escapeHtml(detailHeading)}
                        </div>
                        <div style="font-size: 15px; line-height: 1.8; color: ${brandColors.text};">
                          ${detailBody}
                        </div>
                      </td>
                    </tr>
                  `
                  : ""
              }
              <tr>
                <td style="padding: 20px 36px 0;">
                  <div style="font-size: 11px; line-height: 1.4; letter-spacing: 0.14em; text-transform: uppercase; color: ${brandColors.teal}; font-weight: 700; margin-bottom: 12px;">
                    ${escapeHtml(nextStepsHeading ?? "What happens next")}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 36px 8px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    ${renderSteps(nextSteps)}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 36px 0;">
                  <div style="font-size: 14px; line-height: 1.8; color: ${brandColors.muted};">
                    ${escapeHtml(footerNote)}
                  </div>
                </td>
              </tr>
              ${renderButton(cta)}
              <tr>
                <td style="padding: 30px 36px 34px;">
                  <div style="height: 1px; background: ${brandColors.border}; margin-bottom: 18px;"></div>
                  <div style="font-size: 12px; line-height: 1.8; color: ${brandColors.muted};">
                    ${escapeHtml(siteConfig.brand.logoText)}<br />
                    ${escapeHtml(siteConfig.brand.division)}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export const buildUrgentAdminEmail = ({
  name,
  phone,
  message,
}: {
  name: string;
  phone: string;
  message: string;
}) =>
  buildEmailTemplate({
    preheader: `Urgent crisis enquiry from ${name}.`,
    eyebrow: "Urgent crisis enquiry",
    title: "Immediate follow-up requested",
    intro:
      "A prospective client has requested urgent crisis or issues support through the website.",
    highlightLabel: "Priority window",
    highlightValue: "Call in the coming minutes",
    fields: [
      { label: "Client name", value: name },
      { label: "Phone number", value: phone },
    ],
    detailHeading: "Situation summary",
    detailBody: formatText(
      message ||
        "No written situation summary was provided. The client has asked for a confidential callback.",
    ),
    nextSteps: [
      "Call the client as quickly as possible and treat the matter as time-sensitive.",
      "Use discretion and assume the situation is confidential until clarified.",
      "If the call is missed, attempt a prompt follow-up and keep the response window tight.",
    ],
    cta: {
      label: `Call ${siteConfig.phone.display}`,
      href: siteConfig.phone.href,
    },
    footerNote:
      "Submitted via the urgent support form on Crisis Communications Australia.",
  });

export const buildLeadMagnetAdminEmail = ({
  firstName,
  email,
  organisation,
}: {
  firstName: string;
  email: string;
  organisation: string;
}) =>
  buildEmailTemplate({
    preheader: `Checklist request from ${firstName} at ${organisation}.`,
    eyebrow: "Checklist lead magnet",
    title: "New readiness checklist request",
    intro:
      "A new lead has requested the Crisis Readiness Checklist through the website.",
    highlightLabel: "Lead type",
    highlightValue: "Readiness interest",
    fields: [
      { label: "First name", value: firstName },
      { label: "Work email", value: email },
      { label: "Organisation", value: organisation },
    ],
    nextSteps: [
      "Review the lead and determine whether a readiness conversation should be initiated.",
      "A branded confirmation email has been sent to the requester.",
      "If relevant, follow up within 24 hours with the next best step for their organisation.",
    ],
    footerNote:
      "Submitted via the Crisis Readiness Checklist form on Crisis Communications Australia.",
  });

export const buildFooterAdminEmail = ({
  email,
  request,
}: {
  email: string;
  request: string;
}) =>
  buildEmailTemplate({
    preheader: `New website contact request from ${email}.`,
    eyebrow: "General contact request",
    title: "New website enquiry received",
    intro:
      "A prospective client has submitted a contact request through the website footer form.",
    highlightLabel: "Service level",
    highlightValue: "Respond within 24 hours",
    fields: [{ label: "Reply-to email", value: email }],
    detailHeading: "Request details",
    detailBody: formatText(request),
    nextSteps: [
      "Review the enquiry and identify the most relevant service or adviser.",
      "Reply within 24 hours with clear next steps or a request for further context.",
      "Keep the response concise, confident, and aligned with the premium advisory positioning.",
    ],
    footerNote:
      "Submitted via the website contact form on Crisis Communications Australia.",
  });

export const buildLeadMagnetConfirmationEmail = ({
  firstName,
  organisation,
}: {
  firstName: string;
  organisation: string;
}) =>
  buildEmailTemplate({
    preheader: "Your Crisis Readiness Checklist request has been received.",
    eyebrow: "Crisis readiness checklist",
    title: `Thank you, ${firstName}`,
    intro:
      "Your request has been received. A CRC Public Relations adviser will review it and, if useful, recommend the most practical next step for your organisation.",
    highlightLabel: "What to expect",
    highlightValue: "Guidance within 24 hours",
    fields: [{ label: "Organisation", value: organisation }],
    nextSteps: [
      "Our team will review your request and context promptly.",
      "If a follow-up conversation would be valuable, we will contact you within 24 hours.",
      "If your matter is already live or escalating, call our urgent support line immediately.",
    ],
    cta: {
      label: "Call urgent support",
      href: siteConfig.phone.href,
    },
    footerNote:
      "Everything shared with CRC Public Relations is handled with professional discretion and strict confidentiality.",
  });

export const buildFooterConfirmationEmail = ({
  email,
  request,
}: {
  email: string;
  request: string;
}) =>
  buildEmailTemplate({
    preheader: "Your enquiry has been received by Crisis Communications Australia.",
    eyebrow: "Client confirmation",
    title: "We have received your enquiry",
    intro:
      "Thank you for contacting Crisis Communications Australia. Your message is with our team and we will come back to you with clear next steps.",
    highlightLabel: "Response commitment",
    highlightValue: "Contact within 24 hours",
    fields: [{ label: "Email received", value: email }],
    detailHeading: "Your enquiry",
    detailBody: formatText(request),
    nextSteps: [
      "A senior adviser will review the context of your enquiry.",
      "We will contact you within 24 hours to advise the most appropriate next step.",
      "If your matter is urgent or already unfolding, call our urgent support line now.",
    ],
    cta: {
      label: "Call urgent support",
      href: siteConfig.phone.href,
    },
    footerNote:
      "CRC Public Relations supports organisations through crisis response, issues management, readiness planning, and executive communications.",
  });
