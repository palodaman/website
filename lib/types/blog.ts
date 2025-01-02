export interface BlogImage {
    url: string;
    alt: string;
    caption?: string;
  }
  
  export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    slug: string;
    content: string;
    images?: BlogImage[];
  }