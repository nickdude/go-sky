import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/data/blog";

/**
 * Blog listing card: cover image, category + date, title, excerpt and author.
 * The whole card links to the post.
 *
 * @param {Object} props
 * @param {import("@/data/blog").posts[number]} props.post
 */
export default function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-purple">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-brand-muted">{formatDate(post.date)} · {post.readingTime}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-brand-ink">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-purple">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
          {post.excerpt}
        </p>
        <p className="mt-5 border-t border-brand-border pt-4 text-sm font-medium text-brand-ink">
          {post.author.name}
          <span className="font-normal text-brand-muted"> · {post.author.company}</span>
        </p>
      </div>
    </article>
  );
}
