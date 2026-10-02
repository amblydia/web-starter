import "server-only";

import type { ContactValues } from "@/lib/contact/validation";

/**
 * Delivers a validated contact message. The starter ships without a provider
 * so it runs with zero credentials. To go live, implement this interface with
 * Resend, SMTP, etc. and return it from `getContactTransport`.
 *
 * Throw if delivery fails — the action turns that into a friendly error.
 */
export interface ContactTransport {
  send: (message: ContactValues) => Promise<void>;
}

const developmentTransport: ContactTransport = {
  send(message) {
    // Message contents are personal data: only print them while developing.
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[contact] message received (no transport configured):",
        message
      );
    } else {
      console.warn(
        "[contact] message dropped: no contact transport configured. See src/lib/contact/transport.ts"
      );
    }
    return Promise.resolve();
  },
};

export function getContactTransport(): ContactTransport {
  return developmentTransport;
}
