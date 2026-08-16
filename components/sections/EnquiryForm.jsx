"use client";

import { useRef, useState } from "react";
import Button from "@/components/common/Button";
import { UploadIcon } from "@/components/common/icons";
import {
  supportTypes,
  countries,
  marketingConsentLabel,
  formDisclaimers,
  formEndpoint,
} from "@/data/contact";

const fieldClass =
  "w-full rounded-md border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-ink shadow-sm outline-none transition-colors placeholder:text-brand-muted/60 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple";
const labelClass = "mb-1.5 block text-sm font-medium text-brand-ink";

function Required() {
  return <span className="text-red-500"> *</span>;
}

/**
 * "Enquire with Us" form. Submits to Formspree (see `formEndpoint` in
 * data/contact.js) as multipart form data so the attachment is included, with
 * inline submitting / success / error states. Field options and legal copy come
 * from data/contact.js.
 */
export default function EnquiryForm() {
  const [fileName, setFileName] = useState("");
  // "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        form.reset();
        setFileName("");
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(
          data?.errors?.map((err) => err.message).join(", ") ||
            "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-border bg-white p-8 text-center">
        <p className="text-lg font-semibold text-brand-ink">Thank you!</p>
        <p className="mt-2 text-sm text-brand-muted">
          Your enquiry has been received. Our team will get back to you as soon as
          possible.
        </p>
        <div className="mt-6">
          <Button type="button" variant="outline" onClick={() => setStatus("idle")}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nicer subject line in the Formspree notification email. */}
      <input type="hidden" name="_subject" value="New enquiry from GoSky website" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name
            <Required />
          </label>
          <input id="firstName" name="firstName" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name
            <Required />
          </label>
          <input id="lastName" name="lastName" type="text" required className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
            <Required />
          </label>
          <input id="company" name="company" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Business email
            <Required />
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="supportType" className={labelClass}>
          Support type
          <Required />
        </label>
        <select id="supportType" name="supportType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Please Select
          </option>
          {supportTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number
          <Required />
        </label>
        <input id="phone" name="phone" type="tel" required className={fieldClass} />
      </div>

      <div>
        <label htmlFor="country" className={labelClass}>
          Country
          <Required />
        </label>
        <select id="country" name="country" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Please Select
          </option>
          {countries.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help you?
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClass} />
      </div>

      <div>
        <span className={labelClass}>Attachment</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-md border border-brand-border bg-white px-4 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-purple hover:text-brand-purple"
          >
            <UploadIcon className="h-4 w-4" aria-hidden="true" />
            Upload File
          </button>
          <span className="text-sm text-brand-muted">
            {fileName || "No file selected"}
          </span>
          <input
            ref={fileRef}
            id="attachment"
            name="attachment"
            type="file"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-brand-ink">
        <input
          type="checkbox"
          name="marketingConsent"
          className="mt-0.5 h-4 w-4 rounded border-brand-border text-brand-purple focus:ring-brand-purple"
        />
        <span>{marketingConsentLabel}</span>
      </label>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={submitting}
      >
        {submitting ? "Submitting…" : "Submit"}
      </Button>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600"
        >
          {errorMsg}
        </p>
      )}

      <div className="space-y-3">
        {formDisclaimers.map((text, i) => (
          <p key={i} className="text-xs leading-relaxed text-brand-muted/80">
            {text}
          </p>
        ))}
      </div>
    </form>
  );
}
