import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const posts = [
  {
    title: 'Building a Modern Web Application',
    excerpt: 'Learn how to build a modern web application using Next.js and TypeScript',
    date: '2024-03-20',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    slug: 'building-modern-web-application',
    content: `
      This is the full content of the blog post. 
      Lorem Ipsum Lorem Ipsum
    `
  },
//   
//     title: 'a Web Application',
//     excerpt: 'Learn how to build a modern  application using Next.js and TypeScript',
//     date: '2024-03-21',
//     tags: ['Next.js', 'Web Development'],
//     slug: 'modern-web-application',
//     content: `
//       This is the full content of the blog post. 
//       Lorem Ipsum Lorem Ipsum
//     `
//   },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <Link 
        href="/blog" 
        className="text-sm text-muted-foreground hover:text-primary"
      >
        ← Back to Blog
      </Link>

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}