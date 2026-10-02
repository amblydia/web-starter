"use client";

import {
  AlertCircleIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { useActionState, useEffect, useRef, useState } from "react";
import { type ContactState, submitContact } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactLimits } from "@/lib/contact/validation";

const initialState: ContactState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }
  return (
    <p className="text-destructive text-sm" id={id}>
      {message}
    </p>
  );
}

function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );
  const alertRef = useRef<HTMLDivElement>(null);
  // Submission timing check: when the form became interactive.
  const [startedAt, setStartedAt] = useState("");
  useEffect(() => {
    setStartedAt(String(Date.now()));
  }, []);

  // Move focus to the error summary so keyboard and screen-reader users notice it.
  useEffect(() => {
    if (state.status === "error") {
      alertRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        className="flex items-start gap-3 rounded-xl border bg-card p-6"
        role="status"
      >
        <Icon
          className="mt-0.5 text-primary"
          icon={CheckmarkCircle02Icon}
          size="lg"
        />
        <div>
          <p className="font-semibold">Message sent</p>
          <p className="text-muted-foreground text-sm">{state.message}</p>
        </div>
      </div>
    );
  }

  const { values } = state;
  const errors = state.errors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "error" && state.message ? (
        <div
          className="flex scroll-mt-24 items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-destructive text-sm outline-none focus-visible:ring-3 focus-visible:ring-destructive/30"
          ref={alertRef}
          role="alert"
          tabIndex={-1}
        >
          <Icon icon={AlertCircleIcon} />
          <p>{state.message}</p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={errors.name ? true : undefined}
            autoComplete="name"
            defaultValue={values?.name}
            id="contact-name"
            maxLength={contactLimits.name}
            name="name"
            required
          />
          <FieldError id="contact-name-error" message={errors.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={errors.email ? true : undefined}
            autoComplete="email"
            defaultValue={values?.email}
            id="contact-email"
            maxLength={contactLimits.email}
            name="email"
            required
            type="email"
          />
          <FieldError id="contact-email-error" message={errors.email} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <Input
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          aria-invalid={errors.subject ? true : undefined}
          defaultValue={values?.subject}
          id="contact-subject"
          maxLength={contactLimits.subject}
          name="subject"
          required
        />
        <FieldError id="contact-subject-error" message={errors.subject} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          aria-invalid={errors.message ? true : undefined}
          className="min-h-36"
          defaultValue={values?.message}
          id="contact-message"
          maxLength={contactLimits.message}
          name="message"
          required
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </div>

      {/* Anti-spam: honeypot (hidden from people and assistive tech) + timing. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>
      <input name="startedAt" type="hidden" value={startedAt} />

      <Button
        className="w-full sm:w-auto"
        disabled={pending}
        size="lg"
        type="submit"
      >
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export { ContactForm };
