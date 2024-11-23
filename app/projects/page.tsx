'use client'
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

const projects = [
  {
    title: 'Crowdship Mobile App',
    description: 'Designing and developing a community based mobile app from scratch using React Native (Expo framework) and a SupaBase backend, connecting commuters with customers for efficient package delivery.',
    tags: ['Expo', 'TypeScript', 'SupaBase', 'PostgreSQl'],
    github: '#',
    demo: 'https://webhome.csc.uvic.ca/~amanpalod/',
  },
  {
    title: 'Capstone Project',
    description: 'A full stack UVic MarketPlace App. Scaled backend services by deploying kubernetes cluster on AWS EC2 instances to enhance performance and reliability.',
    tags: ['Node', 'Kubernetes', 'AWS EC2 Instances', 'Jest'],
    github: 'https://github.com/vikesplace/vikesplace',
    demo: '#',
  },
  {
    title: 'FurniVision',
    description: 'An AI powered furniture visualizer tool in your space. Won 100 Dollars in the UVic pitch competition for it.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stable diffusion'],
    github: '#',
    demo: '#',
  },
  {
    title: 'QatalogAI',
    description: 'Worked on a AI powered custom industry tool recommendation system using vector embeddings and the GPT API, achieving 90% accuracy in suggesting industry-standard machinery.',
    tags: ['Next.js', 'TypeScript', 'VectorDB', 'Python'],
    github: 'https://github.com/Udbhav8/qatalogAI-frontend',
    demo: '#',
  },
  {
    title: 'Personal Website',
    description: 'A personal portfolio website built with Next.js and TypeScript',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/palodaman/website',
    demo: '/',
  },
];

export default function Projects() {
  const openInNewTab = (url: string | URL | undefined) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => openInNewTab(project.github)}
                  disabled={project.github === '#'}
                >
                  <GithubIcon className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => openInNewTab(project.demo)}
                  disabled={project.demo === '#'}
                >
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