'use client'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <div className="relative h-40 w-40 overflow-hidden rounded-full">
        <CldImage
          width="600"
          height="400"
          src="IMG_6295_gyj2fh"
          alt = 'me, myself and I'
        />
      </div>
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Aman Palod</h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Hi Gamer, I am a 22-year-old Software Engineer, passionate about building things. 
        </p>
      </div>

      <div className="flex space-x-4">
        <a href="https://github.com/palodaman" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <GithubIcon className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/aman-palod-3a09911b4/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <LinkedinIcon className="h-5 w-5" />
          </Button>
        </a>
        <a href="mailto:palod.aman@gmail.com">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <MailIcon className="h-5 w-5" />
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-12">
        <Link href="/projects">
          <Card className="p-6 space-y-2 hover:scale-105 transition-transform cursor-pointer">
            <h2 className="text-xl font-semibold">Latest Projects</h2>
            <p className="text-muted-foreground">
              Check out my recent work and side projects
            </p>
          </Card>
        </Link>
        <Link href="/blog">
          <Card className="p-6 space-y-2 hover:scale-105 transition-transform cursor-pointer">
            <h2 className="text-xl font-semibold">Recent Blog Posts</h2>
            <p className="text-muted-foreground">
              Thoughts on development, design, and technology
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
}