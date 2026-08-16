import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import BlogCard from "@/components/ui/BlogCard";
import { blogMeta, posts } from "@/data/blog";

/**
 * "From our clients" — a preview of the three latest blog posts, linking through
 * to the full blog.
 */
export default function BlogPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={blogMeta.eyebrow}
            title={blogMeta.title}
            subtitle={blogMeta.subtitle}
          />
          <Button href="/blog" variant="outline" withArrow className="shrink-0">
            View all blogs
          </Button>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
