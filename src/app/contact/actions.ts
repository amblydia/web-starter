"use server";

import { getContactTransport } from "@/lib/contact/transport";
import {
  type ContactErrors,
  type ContactValues,
  readContactValues,
  validateContact,
} from "@/lib/contact/validation";

export interface ContactState {
  errors?: ContactErrors;
  message?: string;
  status: "idle" | "success" | "error";
  /** Echoed back so the form can keep what the user typed. */
  values?: ContactValues;
}

/** Submissions faster than this are almost certainly bots. */
const MIN_FILL_TIME_MS = 2000;
/** Forms older than this were probably replayed. */
const MAX_FILL_TIME_MS = 1000 * 60 * 60 * 24;

const SUCCESS: ContactState = {
  message: "Thanks for getting in touch. We'll reply as soon as we can.",
  status: "success",
};

function looksLikeBot(formData: FormData) {
  // Honeypot: real users never see or fill this field.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return true;
  }

  const startedAt = Number(formData.get("startedAt"));
  const elapsed = Date.now() - startedAt;
  return (
    !Number.isFinite(startedAt) ||
    elapsed < MIN_FILL_TIME_MS ||
    elapsed > MAX_FILL_TIME_MS
  );
}

export async function submitContact(
  _previous: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Bots get a normal-looking success so they learn nothing.
  if (looksLikeBot(formData)) {
    return SUCCESS;
  }

  const values = readContactValues(formData);
  const errors = validateContact(values);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Please fix the highlighted fields and try again.",
      status: "error",
      values,
    };
  }

  try {
    await getContactTransport().send(values);
  } catch {
    return {
      message:
        "Something went wrong while sending your message. Please try again in a moment.",
      status: "error",
      values,
    };
  }

  return SUCCESS;
}
