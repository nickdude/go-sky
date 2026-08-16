import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/common/icons";

/**
 * Certificate card: a framed preview of the certificate's first page. The whole
 * card links to the PDF, which opens in a new tab.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.issuer
 * @param {string} props.file  - Path to the PDF (opened in a new tab).
 * @param {string} props.image - First-page preview image.
 */
export default function CertificateCard({ title, issuer, file, image }) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} certificate (opens in a new tab)`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-brand-border bg-brand-bg">
        <Image
          src={image}
          alt={`${title} — preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-brand-ink">{title}</h3>
          <p className="mt-1 text-sm text-brand-muted">{issuer}</p>
        </div>
        <ArrowUpRightIcon
          className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}
