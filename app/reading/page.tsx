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
  },
  {
    title: 'The Three Body Problem Trilogy',
    author: 'Cixin Liu',
    rating: 4,
    review: 'Some disgusting, terrifying ideas about what lies in the intergalactic space out there',
    category: 'Sci-fi',
  },
  {
    title: 'Stories of Your Life and Others',
    author: 'Ed Chiang',
    rating: 5,
    review: 'A bunch of very good imaginitive plots that left my mind boggled',
    category: 'Sci-fi',
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
          The Covid pandemic is what sparked my interest for reading, giving me more time to explore things I had not before. 
          Since then, I have not looked back. Recently, I also invested in an e-reader, which has transformed my reading experience.
          Now, I can read effortlessly during my commutes to school or unwind with a good book before going to bed. 
          Following are some books I've read, re-read, and recommend.
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
            <div className="p-6 space-y-4 w-full">
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