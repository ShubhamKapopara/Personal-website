"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState, useCallback, useMemo } from "react";

// Email validation regex - defined once outside component
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState<{ state: "idle" | "submitting" | "success" | "error"; message?: string }>({ state: "idle" });

  // Memoize email validation function
  const validateEmail = useCallback((email: string): boolean => {
    if (!email) return true;
    return EMAIL_PATTERN.test(email);
  }, []);

  // Memoize error message
  const emailError = useMemo(() => {
    if (!email) return "";
    return validateEmail(email) ? "" : "Please enter a valid email address.";
  }, [email, validateEmail]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }, [validateEmail]);

  const handleBlur = useCallback(() => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  }, [email, validateEmail]);

  const handleSubjectChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }, []);

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);

  if (newsletter.display === false) return null;

  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!subject.trim() || !message.trim()) {
      setStatus({ state: "error", message: "Subject and message are required." });
      return;
    }
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }
      setStatus({ state: "success", message: "Message sent! I will get back to you soon." });
      setEmail("");
      setSubject("");
      setMessage("");
      setError("");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ state: "error", message: errorMessage });
    }
  }, [email, subject, message, validateEmail]);

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="m"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="s" horizontal="center" align="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="xl" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        id="contact-form"
        name="contact-form"
      >
        <Column
          id="contact-form-scroll"
          fillWidth
          gap="12"
          maxWidth="m"
          horizontal="center"
        >
          <Input
            formNoValidate
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            style={{
              width: "100%",
              maxWidth: "520px",
            }}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            errorMessage={error || emailError}
          />
          <Input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
            value={subject}
            style={{
              width: "100%",
              maxWidth: "520px",
            }}
            onChange={handleSubjectChange}
          />
          <div style={{ width: "100%", maxWidth: "520px" }}>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              required
              rows={6}
              value={message}
              onChange={handleMessageChange}
              style={{
                width: "100%",
                padding: "0.875rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--neutral-alpha-weak)",
                background: "var(--surface-background)",
                color: "var(--neutral-on-background-strong)",
                fontSize: "0.9375rem",
                lineHeight: "1.5",
                fontFamily: "inherit",
                resize: "vertical",
              }}
            />
          </div>
          {status.state !== "idle" && (
            <Row horizontal="center" style={{ width: "100%", maxWidth: "520px" }}>
              <Text onBackground={status.state === "error" ? "accent-strong" : "brand-strong"}>
                {status.message}
              </Text>
            </Row>
          )}
          <Row horizontal="center" style={{ width: "100%", maxWidth: "520px" }}>
            <Button id="contact-send" type="submit" size="m">
              Send message
            </Button>
          </Row>
        </Column>
      </form>
    </Column>
  );
};

