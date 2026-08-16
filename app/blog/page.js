import { buildMetadata } from "@/lib/seo";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { blogMeta, posts } from "@/data/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Client stories and insights from GoSky Logistics — reliable, on-time air cargo and All-India logistics.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={blogMeta.eyebrow}
          title={blogMeta.title}
          subtitle={blogMeta.subtitle}
          as="h1"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
