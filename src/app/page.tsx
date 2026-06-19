import Image from "next/image";
import Link from "next/link";
import { artworks, profile, projects } from "@/data/site";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);
  const featuredArt = artworks.filter((art) => art.featured).slice(0, 2);

  return (
    <main className="newspaper-shell">
      <header className="masthead">
        <p className="kicker">{profile.location} / Personal Edition / Since 2026</p>
        <h1>{profile.edition}</h1>
        <div className="masthead-rule">
          <span>{profile.name}</span>
          <span>{new Date().getFullYear()}</span>
          <span>{profile.role}</span>
        </div>
      </header>

      <section className="front-grid">
        <article className="lead-story">
          <p className="eyebrow">Main Story</p>
          <h2>{profile.headline}</h2>
          <p className="lead-copy">{profile.intro}</p>
          <p>{profile.bio}</p>
        </article>

        <aside className="profile-box">
          <p className="eyebrow">Notice</p>
          <h3>Open for better stories, sharper systems, and thoughtful collaborations.</h3>
          <div className="link-stack">
            {profile.socials.map((social) => (
              <a href={social.href} key={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </aside>

        <section className="section-block projects-block">
          <div className="section-heading">
            <p className="eyebrow">Featured Work</p>
            <h2>Projects</h2>
          </div>
          <div className="story-list">
            {projects.map((project) => (
              <article className="story-card" key={project.title}>
                <p className="story-date">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.dek}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block blog-block">
          <div className="section-heading">
            <p className="eyebrow">Latest Dispatches</p>
            <h2>Blog</h2>
            <Link href="/blog">Read all</Link>
          </div>
          <div className="story-list compact">
            {posts.map((post) => (
              <article className="story-card" key={post.slug}>
                <p className="story-date">{post.date}</p>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block art-block">
          <div className="section-heading">
            <p className="eyebrow">Studio Wall</p>
            <h2>Artwork</h2>
            <Link href="/gallery">View gallery</Link>
          </div>
          <div className="art-preview-grid">
            {featuredArt.map((art) => (
              <figure className="art-card" key={art.title}>
                <Image src={art.image} alt={art.title} width={720} height={520} />
                <figcaption>
                  <strong>{art.title}</strong>
                  <span>{art.medium}, {art.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
