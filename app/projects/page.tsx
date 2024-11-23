import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

const projects = [
  {
    title: 'Personal Website',
    description: 'A personal protfolio website built with Next.js and TypeScript',
    // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">
          A collection of my work and side projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            {/* <div className="aspect-video relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div> */}
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <GithubIcon className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLinkIcon className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}