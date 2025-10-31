export type ProjectTag = 'AI' | 'Cloud' | 'Bots' | 'Web';

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  tech: string[];
  tags: ProjectTag[];
  links: { demo?: string; repo?: string };
};
