export const site = {
  name: 'Jingwei',
  title: 'Jingwei — Research, data, and useful systems',
  description: 'An independent consultant turning fragmented information into useful data, research workflows, and practical tools.',
  url: 'https://jingwei.dev',
  email: 'hello@your-domain.com',
  social: { github: 'https://github.com/JingggW', linkedin: 'https://www.linkedin.com/in/your-linkedin-handle/' },
} as const;
export const absoluteUrl = (path = '/') => new URL(path, site.url).toString();
