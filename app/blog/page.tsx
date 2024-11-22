'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

const posts = [
  {
    title: 'Building a Modern Web Application',
    excerpt: 'Learn how to build a modern web application using Next.js and TypeScript',
    date: '2024-03-20',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    slug: 'building-modern-web-application',
  },
  // Add more blog posts here
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground mt-2">
          Thoughts, tutorials, and insights about software development
        </p>
      </div>

      <div className="relative">
        <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search posts..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.slug} className="p-6">
            <article className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
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
            </article>
          </Card>
        ))}
      </div>
    </div>
  );
}