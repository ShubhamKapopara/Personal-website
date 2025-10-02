"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [status, setStatus] = useState<{ state: "idle" | "submitting" | "success" | "error"; message?: string }>({ state: "idle" });

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  if (newsletter.display === false) return null;

  async function onSubmit(e: React.FormEvent) {
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
    } catch (err: any) {
      setStatus({ state: "error", message: err.message || "Something went wrong." });
    }
  }

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
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
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
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
          id="mc_embed_signup_scroll"
          fillWidth
          gap="8"
          // horizontal="center"
          // align="center"
        >
          <Input
            formNoValidate
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            style={{width: "50%", minWidth: "280px", maxWidth: "720px",margin: "0 auto", // this centers horizontally
              textAlign: "center"}}
            onChange={(e) => {
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />
          <Input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
            value={subject}
            style={{ width: "80%", minWidth: "280px", maxWidth: "960px",margin: "0 auto", 
              textAlign: "center"}}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--neutral-alpha-weak)", background: "var(--surface-background)", color: "var(--neutral-on-background-strong)" }}
            />
          </div>
          {status.state !== "idle" && (
            <Row>
              <Text onBackground={status.state === "error" ? "accent-strong" : "brand-strong"}>
                {status.message}
              </Text>
            </Row>
          )}
          <div className="clear">
            <Row height="48" vertical="center">
              <Button id="contact-send" type="submit" size="m" fillWidth={false}>
                Send message
              </Button>
            </Row>
          </div>
        </Column>
      </form>
    </Column>
  );
};
