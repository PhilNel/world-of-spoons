interface Frontmatter {
  title: string;
  description: string;
  pubDate: string;
}

interface Post {
  url: string;
  frontmatter: Frontmatter;
}

const globMap = {
  'ice-cream': import.meta.glob('../pages/ice-cream/*.md', { eager: true }),
  'cocktails': import.meta.glob('../pages/cocktails/*.md', { eager: true }),
  'film-feasts': import.meta.glob('../pages/film-feasts/*.md', { eager: true }),
};

export function getPosts(category: keyof typeof globMap): Post[] {
  const postImports = globMap[category];

  const posts = Object.values(postImports).map((post: any) => ({
    url: post.url,
    frontmatter: post.frontmatter
  }));

  return posts;
}
