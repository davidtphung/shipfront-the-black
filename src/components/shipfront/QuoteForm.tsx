"use client";

import { useRef, useState } from "react";
import { quote, quoteFields } from "@/data/site-copy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/cn";

type Values = Record<string, string>;

function validate(values: Values) {
  const errors: Values = {};
  if (!values.name?.trim()) errors.name = "Enter your name.";
  if (!values.email?.trim()) errors.email = "Enter your email.";
  else if (!/[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email.";
  if (!values.phone?.trim()) errors.phone = "Enter your phone number.";
  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Values>({});
  const [status, setStatus] = useState<"idle" | "preview">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function onChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("preview");
  }

  if (status === "preview") {
    return (
      <div role="status" className="rounded-[16px] border border-line bg-void p-6">
        <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
          {quote.previewNote}
        </p>
        <p className="mt-4 text-[17px] text-paper">{quote.success}</p>
        <dl className="mt-6 grid gap-3 font-mono text-[13px]">
          {quoteFields.map((field) => (
            <div key={field.name} className="grid gap-1 border-t border-line pt-3">
              <dt className="text-muted">{field.title}</dt>
              <dd className="text-paper">{values[field.name]?.trim() || "-"}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6">
          <Button type="button" variant="secondary" onClick={() => setStatus("idle")}>
            Edit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        {quoteFields.map((field) => {
          const id = field.name;
          const error = errors[id];
          const shared = {
            id,
            name: id,
            required: field.required,
            autoComplete:
              field.type === "email"
                ? "email"
                : field.type === "phone"
                  ? "tel"
                  : field.type === "name"
                    ? "name"
                    : field.type === "website"
                      ? "url"
                      : undefined,
            value: values[id] ?? "",
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              onChange(id, event.target.value),
            "aria-invalid": Boolean(error) || undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
            className: cn(error && "border-[#c23b4a]"),
          };
          return (
            <div key={id} className={field.type === "textarea" ? "md:col-span-2" : undefined}>
              <Label htmlFor={id}>
                {field.title}
                {field.required ? " *" : ""}
              </Label>
              {field.type === "textarea" ? (
                <Textarea {...shared} rows={4} />
              ) : (
                <Input
                  {...shared}
                  type={
                    field.type === "email" ? "email" : field.type === "phone" ? "tel" : "text"
                  }
                  inputMode={
                    field.type === "phone" ? "tel" : field.type === "email" ? "email" : undefined
                  }
                />
              )}
              {error ? (
                <p id={`${id}-error`} className="mt-1 text-[13px] text-[#c23b4a]">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
      <div>
        <Button type="submit">{quote.submit}</Button>
      </div>
    </form>
  );
}
