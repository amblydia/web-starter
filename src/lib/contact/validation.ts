export const contactLimits = {
  email: 254,
  message: 5000,
  name: 100,
  subject: 150,
} as const;

export type ContactField = "name" | "email" | "subject" | "message";

export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

// Deliberately simple: the real check is the confirmation email/reply.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function readContactValues(formData: FormData): ContactValues {
  return {
    email: readString(formData, "email"),
    message: readString(formData, "message"),
    name: readString(formData, "name"),
    subject: readString(formData, "subject"),
  };
}

/** Server-side validation. Never rely on the browser's `required`/`type` checks. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length > contactLimits.name) {
    errors.name = `Name must be ${contactLimits.name} characters or fewer.`;
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (
    values.email.length > contactLimits.email ||
    !EMAIL_PATTERN.test(values.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject) {
    errors.subject = "Please enter a subject.";
  } else if (values.subject.length > contactLimits.subject) {
    errors.subject = `Subject must be ${contactLimits.subject} characters or fewer.`;
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  } else if (values.message.length > contactLimits.message) {
    errors.message = `Message must be ${contactLimits.message} characters or fewer.`;
  }

  return errors;
}
