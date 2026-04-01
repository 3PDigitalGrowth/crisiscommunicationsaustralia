'use server';

import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import {
  buildFooterAdminEmail,
  buildFooterConfirmationEmail,
  buildLeadMagnetAdminEmail,
  buildLeadMagnetConfirmationEmail,
  buildUrgentAdminEmail,
} from "@/lib/form-emails";
import type { FormState } from "@/types";

const getTrimmedValue = (formData: FormData, field: string) =>
  String(formData.get(field) ?? "").trim();

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  return new Resend(apiKey);
};

const getFromEmail = () => {
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? siteConfig.forms.resendFromEmail;

  if (!fromEmail) {
    throw new Error("RESEND_FROM_EMAIL is not set");
  }

  return fromEmail;
};

const getAdminRecipients = (): string[] => {
  const configuredRecipients = process.env.RESEND_ADMIN_TO
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (configuredRecipients?.length) {
    return configuredRecipients;
  }

  return [...siteConfig.forms.adminNotificationEmails];
};

const sendEmail = async ({
  subject,
  html,
  replyTo,
  to,
}: {
  subject: string;
  html: string;
  replyTo?: string;
  to: string | string[];
}) => {
  const resend = getResendClient();

  await resend.emails.send({
    from: getFromEmail(),
    html,
    replyTo,
    subject,
    to,
  });
};

const sendAdminNotification = async ({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) =>
  sendEmail({
    subject,
    html,
    replyTo,
    to: getAdminRecipients(),
  });

export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  void prevState;

  const name = getTrimmedValue(formData, "name");
  const phone = getTrimmedValue(formData, "phone");
  const message = getTrimmedValue(formData, "message");

  if (!name || !phone) {
    return {
      status: "error",
      message: siteConfig.urgentPath.formFields.errorMessage,
    };
  }

  try {
    await sendAdminNotification({
      subject: `Urgent crisis enquiry: ${name}`,
      html: buildUrgentAdminEmail({
        name,
        phone,
        message,
      }),
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
    await sendAdminNotification({
      replyTo: email,
      subject: `Checklist request: ${firstName} (${organisation})`,
      html: buildLeadMagnetAdminEmail({
        firstName,
        email,
        organisation,
      }),
    });

    await sendEmail({
      to: email,
      subject: "Your Crisis Readiness Checklist request has been received",
      html: buildLeadMagnetConfirmationEmail({
        firstName,
        organisation,
      }),
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

export async function submitFooterContactRequest(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  void prevState;

  const email = getTrimmedValue(formData, "email");
  const request = getTrimmedValue(formData, "request");

  if (!email || !request) {
    return {
      status: "error",
      message: siteConfig.footer.contactForm.errorMessage,
    };
  }

  try {
    await sendAdminNotification({
      replyTo: email,
      subject: `Website enquiry from ${email}`,
      html: buildFooterAdminEmail({
        email,
        request,
      }),
    });

    await sendEmail({
      to: email,
      subject: "We have received your enquiry",
      html: buildFooterConfirmationEmail({
        email,
        request,
      }),
    });

    return {
      status: "success",
      message: siteConfig.footer.contactForm.successMessage,
    };
  } catch {
    return {
      status: "error",
      message:
        "We could not send your request right now. Please try again shortly.",
    };
  }
}
