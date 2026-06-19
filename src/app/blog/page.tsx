import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { NewspaperHeader } from "@/components/newspaper-header";

export const metadata = {
  title: "Blog Archive"
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="newspaper-shell">
      <NewspaperHeader eyebrow="Archive" title="Dispatches" />
      <section className="archive-grid">
        {posts.map((post) => (
          <article className="archive-card" key={post.slug}>
            <p className="story-date">{post.date}</p>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <div className="tag-row">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
