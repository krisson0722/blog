import Image from "next/image";
import { artworks } from "@/data/site";
import { NewspaperHeader } from "@/components/newspaper-header";

export const metadata = {
  title: "Gallery"
};

export default function GalleryPage() {
  return (
    <main className="newspaper-shell">
      <NewspaperHeader eyebrow="Studio Wall" title="Gallery" />
      <section className="gallery-grid">
        {artworks.map((art) => (
          <figure className="gallery-item" key={art.title}>
            <Image src={art.image} alt={art.title} width={900} height={680} />
            <figcaption>
              <strong>{art.title}</strong>
              <span>{art.medium} / {art.year}</span>
              <p>{art.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
