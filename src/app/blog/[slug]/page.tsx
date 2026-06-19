import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { NewspaperHeader } from "@/components/newspaper-header";
import { mdxComponents } from "@/mdx-components";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="newspaper-shell">
      <NewspaperHeader eyebrow={post.date} title={post.title} />
      <article className="article-page">
        <p className="article-dek">{post.excerpt}</p>
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </main>
  );
}
