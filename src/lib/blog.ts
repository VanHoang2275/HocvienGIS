export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
};

const modules = import.meta.glob("../content/blog/*.json", {
  eager: true,
}) as Record<string, { default: BlogPost }>;

export const posts: BlogPost[] = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => b.date.localeCompare(a.date, "vi"));

export function getPostBySlug(slug?: string) {
  return posts.find((post) => post.slug === slug);
}
