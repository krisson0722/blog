import Link from "next/link";
import { profile } from "@/data/site";

type NewspaperHeaderProps = {
  eyebrow: string;
  title: string;
};

export function NewspaperHeader({ eyebrow, title }: NewspaperHeaderProps) {
  return (
    <header className="masthead compact-masthead">
      <p className="kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="masthead-rule">
        <Link href="/">Front Page</Link>
        <span>{profile.publication}</span>
        <Link href="/gallery">Gallery</Link>
      </div>
    </header>
  );
}
