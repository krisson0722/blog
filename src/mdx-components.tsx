import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => <h2 className="article-subhead">{children}</h2>,
  p: ({ children }) => <p className="article-paragraph">{children}</p>,
  a: ({ children, href }) => (
    <a className="article-link" href={href}>
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="article-list">{children}</ul>,
  blockquote: ({ children }) => (
    <blockquote className="article-quote">{children}</blockquote>
  )
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components
  };
}
