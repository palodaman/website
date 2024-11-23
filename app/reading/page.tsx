'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';

const books = [
  {
    title: 'The Shiva Trilogy',
    author: 'Amish Tripathi',
    rating: 4,
    review: 'I did enjoy how he tried to de-mythicise it, and how there are “real” explanations for the myths',
    categories: ['Mythology', 'Historical Fiction'],
  },
  {
    title: 'Tuesdays With Morrie',
    author: 'Mitch Albom',
    rating: 5,
    review: 'A feel good book that left me with a very fresh view on life',
    categories: ['Life', 'Philosophy'],
  },
  {
    title: 'The Three Body Problem Trilogy',
    author: 'Cixin Liu',
    rating: 4,
    review: 'Some disgusting, terrifying ideas about what lies in the intergalactic space out there',
    categories: ['Sci-fi', 'Space'],
  },
  {
    title: 'Stories of Your Life and Others',
    author: 'Ed Chiang',
    rating: 5,
    review: 'A bunch of very good imaginitive plots that left my mind boggled',
    categories: ['Sci-fi', 'Short Stories'],
  },
  {
    title: 'Hyperion',
    author: 'Dan Simmons',
    rating: 5,
    review: 'Mind-blowing sci-fi that kept me up at night. The Canterbury Tales in space!',
    categories: ['Sci-fi'],
  },
  {
    title: 'The Fall of Hyperion',
    author: 'Dan Simmons',
    rating: 4,
    review: 'A solid follow-up, though not quite as captivating as the first',
    categories: ['Sci-fi'],
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    rating: 5,
    review: 'A classic for a reason. The world-building is just incredible',
    categories: ['Sci-fi', 'Fantasy'],
  },
  {
    title: 'Dune Messiah',
    author: 'Frank Herbert',
    rating: 4,
    review: 'Interesting continuation of Paul\'s story, but a bit slower than the first',
    categories: ['Sci-fi'],
  },
  {
    title: 'The Palace of Illusions',
    author: 'Chitra Banerjee',
    rating: 4,
    review: 'A fascinating retelling of the Mahabharata from Draupadi\'s perspective',
    categories: ['Mythology', 'Historical Fiction'],
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    rating: 5,
    review: 'A timeless classic that still resonates today. Scout\'s voice is unforgettable',
    categories: ['Classic', 'Coming-of-age'],
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    rating: 4,
    review: 'Creepy and atmospheric. The epistolary format really adds to the suspense',
    categories: ['Horror', 'Classic'],
  },
  {
    title: 'The Fifth Season',
    author: 'N.K. Jemisin',
    rating: 5,
    review: 'Wow! The world-building and character development are top-notch',
    categories: ['Fantasy', 'Sci-fi'],
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    rating: 4,
    review: 'A chilling look at a world without books. Made me appreciate reading even more',
    categories: ['Dystopian', 'Sci-fi'],
  },
  {
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    rating: 5,
    review: 'A very weird book that does not reveal where it\'s going at any point',
    categories: ['Dystopian', 'Literary Fiction'],
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    rating: 4,
    review: 'A clever allegory that\'s still relevant today. Simple yet powerful',
    categories: ['Classic', 'Political'],
  },
  {
    title: '1984',
    author: 'George Orwell',
    rating: 5,
    review: 'Terrifyingly prescient. Big Brother is watching, and it\'s more relevant than ever',
    categories: ['Dystopian', 'Classic'],
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    rating: 5,
    review: 'Loved this! The science is fun and the friendship is heartwarming. Go Rocky!',
    categories: ['Sci-fi'],
  },
  {
    title: 'A Scanner Darkly',
    author: 'Philip K. Dick',
    rating: 4,
    review: 'A mind-bending exploration of identity and addiction. Dick at his paranoid best',
    categories: ['Sci-fi', 'Psychological'],
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    rating: 5,
    review: 'Hilarious and absurd in the best way. Don\'t forget your towel!',
    categories: ['Sci-fi', 'Humor'],
  },
  {
    title: 'The Restaurant at the End of the Universe',
    author: 'Douglas Adams',
    rating: 4,
    review: 'More galactic hijinks. Not quite as fresh as the first, but still a fun ride',
    categories: ['Sci-fi', 'Humor'],
  },
  {
    title: 'The Talented Mr. Ripley',
    author: 'Patricia Highsmith',
    rating: 3,
    review: 'A tense psychological but predictable thriller. Ripley is a fascinating, if disturbing, character',
    categories: ['Thriller', 'Crime'],
  },
  {
    title: 'Mexican Gothic',
    author: 'Silvia Moreno-Garcia',
    rating: 4,
    review: 'Creepy and atmospheric. A fresh take on the gothic horror genre',
    categories: ['Horror', 'Gothic'],
  },
  {
    title: 'The Hunger Games Trilogy',
    author: 'Suzanne Collins',
    rating: 4,
    review: 'The plot is quite interesting',
    categories: ['Fiction'],
  },
  {
    title: 'The Bluest Eye',
    author: 'Toni Morrison',
    rating: 5,
    review: 'Powerful and heartbreaking. Morrison\'s prose is simply beautiful',
    categories: ['Literary Fiction'],
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    rating: 4,
    review: 'A classic for a reason. The themes of creation and responsibility are timeless',
    categories: ['Classic', 'Horror'],
  },
  {
    title: 'Don\'t Be Evil',
    author: 'Rana Foroohar',
    rating: 4,
    review: 'An eye-opening look at Big Tech. Made me deactivate my instagram account',
    categories: ['Non-fiction', 'Technology'],
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    rating: 5,
    review: 'Fascinating overview of human history. Changed how I think about our species',
    categories: ['Non-fiction', 'History'],
  }

  //add more books here
];

export default function Reading() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(books.flatMap((book) => book.categories))
  );

  const filteredBooks = selectedCategory
    ? books.filter((book) => book.categories.includes(selectedCategory))
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
              <div className="flex flex-wrap gap-2">
                {book.categories.map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}