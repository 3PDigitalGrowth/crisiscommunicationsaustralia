'use server';

import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import type { FormState } from "@/types";

const getTrimmedValue = (formData: FormData, field: string) =>
  String(formData.get(field) ?? "").trim();

const sendEmailIfConfigured = async ({
  subject,
  html,
  replyTo,
  to,
}: {
  subject: string;
  html: string;
  replyTo?: string;
  to: string;
}) => {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? siteConfig.forms.resendFromEmail;

  if (!apiKey || !fromEmail || fromEmail.includes("TODO")) {
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: fromEmail,
    html,
    replyTo,
    subject,
    to,
  });
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  void prevState;

  const name = getTrimmedValue(formData, "name");
  const organisation = getTrimmedValue(formData, "organisation");
  const phone = getTrimmedValue(formData, "phone");
  const message = getTrimmedValue(formData, "message");

  if (!name || !organisation || !phone || !message) {
    return {
      status: "error",
      message: siteConfig.urgentPath.formFields.errorMessage,
    };
  }

  try {
    await sendEmailIfConfigured({
      to:
        process.env.RESEND_CONTACT_TO_EMAIL ??
        siteConfig.forms.resendContactDestination,
      replyTo: siteConfig.email.general,
      subject: `Urgent crisis enquiry from ${name}`,
      html: `
        <h1>Urgent crisis enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Situation:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return {
      status: "success",
      message: siteConfig.urgentPath.formFields.successMessage,
    };
  } catch {
    return {
      status: "error",
      message:
        "We could not send your message right now. Please call us directly using the urgent support number above.",
    };
  }
}

export async function submitLeadMagnet(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  void prevState;

  const firstName = getTrimmedValue(formData, "firstName");
  const email = getTrimmedValue(formData, "email");
  const organisation = getTrimmedValue(formData, "organisation");

  if (!firstName || !email || !organisation) {
    return {
      status: "error",
      message: siteConfig.leadMagnet.formFields.errorMessage,
    };
  }

  try {
    await sendEmailIfConfigured({
      to:
        process.env.RESEND_LEAD_TO_EMAIL ??
        siteConfig.forms.resendLeadDestination,
      replyTo: email,
      subject: `Crisis checklist request from ${firstName}`,
      html: `
        <h1>Lead magnet request</h1>
        <p><strong>First name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
      `,
    });

    return {
      status: "success",
      message: siteConfig.leadMagnet.formFields.successMessage,
    };
  } catch {
    return {
      status: "error",
      message:
        "We could not send the checklist right now. Please try again shortly.",
    };
  }
}
