import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { ArrowRightIcon } from "@/components/common/icons";
import { posts, getPost, formatDate } from "@/data/blog";

// Pre-render every post at build time.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return buildMetadata({ title: "Blog", path: "/blog" });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.image.src,
  });
}

function Block({ block }) {
  switch (block.type) {
    case "h":
      return (
        <h2 className="mt-8 text-xl font-semibold text-brand-ink">{block.text}</h2>
      );
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-muted marker:text-brand-blue">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-brand-muted marker:font-semibold marker:text-brand-blue">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    default:
      return <p className="mt-4 leading-relaxed text-brand-muted">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-brand-bg py-16 lg:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple transition-colors hover:text-brand-purple-dark"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" aria-hidden="true" />
          Back to blog
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          {post.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-brand-muted">
          {post.author.name} · {post.author.company} · {formatDate(post.date)} ·{" "}
          {post.readingTime}
        </p>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="mt-8 text-base">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-brand-border bg-white p-6 text-sm text-brand-muted">
          <span className="font-medium text-brand-ink">
            {post.author.name}
          </span>{" "}
          — {post.author.role}, {post.author.company}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-brand-border pt-10">
          <Button href="/contact" withArrow>
            Move your cargo with GoSky
          </Button>
          <Button href="/blog" variant="outline">
            Read more stories
          </Button>
        </div>
      </Container>
    </article>
  );
}
