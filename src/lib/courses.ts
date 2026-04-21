export type Course = {
  title: string;
  slug: string;
  level: string;
  duration: string;
  price: string;
  thumbnail: string;
  shortDescription: string;
  description: string;
  objectives: string[];
  contents: string[];
  audience: string[];
  instructor: string;
  ctaText: string;
  ctaLink: string;
};

const modules = import.meta.glob("../content/courses/*.json", {
  eager: true,
}) as Record<string, { default: Course }>;

export const courses: Course[] = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => a.title.localeCompare(b.title, "vi"));

export function getCourseBySlug(slug?: string) {
  return courses.find((course) => course.slug === slug);
}
