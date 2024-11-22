'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';

const books = [
  {
    title: 'Tuesdays With Morrie',
    author: 'Mitch Albom',
    rating: 5,
    review: 'A very feel good book that makes you realize how granted you have taken the life for',
    category: 'Life',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974',
  },
  {
    title: 'The Three Body Problem Trilogy',
    author: 'Cixin Liu',
    rating: 4,
    review: 'Some disgusting, terrifying ideas about what lies in the intergalactic space out there',
    category: 'Sci-fi',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974',
  },
  {
    title: 'Stories of Your Life and Others',
    author: 'Ed Chiang',
    rating: 5,
    review: 'A bunch of very good imaginitive plots that left my mind boggled',
    category: 'Sci-fi',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974',
  }
  //more books here
];

export default function Reading() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(books.map((book) => book.category))
  );

  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reading List</h1>
        <p className="text-muted-foreground mt-2">
          Books I've read and recommend
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedCategory === null ? 'default' : 'secondary'}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'secondary'}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((book, index) => (
          <Card key={index} className="flex overflow-hidden">
            <div className="w-1/3 relative">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-6 space-y-4">
              <div>
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-muted-foreground">{book.author}</p>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < book.rating
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{book.review}</p>
              <Badge>{book.category}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}