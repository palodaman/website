'use client'
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const pdfUrl = '../../Aman_Palod.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="text-muted-foreground mt-2">
            My professional experience and skills
          </p>
        </div>
        <Button 
          onClick={handleDownload}
          className="hover:scale-105 transition-transform"
        >
          <DownloadIcon className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Data Engineering Co-op</h3>
              <p className="text-muted-foreground">Ingrooves Music Group</p>
            </div>
            <p className="text-muted-foreground"> May 2023 - Sept. 2023</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Developed and managed 10+ data pipelines from retailers including Spotify, Apple Music, and Deezer.</li>
            <li>Automated cron job setup in Rancher by developing a dedicated API, eradicating manual setup. Integrated a Slack
            webhook for real-time alerts, resulting in quicker response times and reducing issue resolution time by 30 percent.</li>
            <li>Designed and deployed a GitLab crawler API, tracking version utilization across multiple in-house data tools to
            streamline compliance and reduce redundancy.</li>
            <li>Strengthened application security by identifying and remediating critical log4j vulnerabilities across 5+ Java
            applications, improving overall system resilience.</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Expo', 'React Native', 'Wordpress', 'Shell'].map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Bachelor of Software Engineering</h3>
          <p className="text-muted-foreground">University of Victoria</p>
          <p className="text-muted-foreground">2020 - Present</p>
        </Card>
      </section>
    </div>
  );
}