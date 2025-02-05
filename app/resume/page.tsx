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
              <h3 className="text-lg font-semibold">QA Dev Engineer </h3>
              <p className="font-semibold">VertiGIS </p>
            </div>
            <p className="text-muted-foreground"> Jan 2025 - May 2025</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Automated functional testing in Chrome and Firefox using Typescript, WebdriverIO, and Jest reducing regression
              testing time by 20%.</li>
            <li>Reviewed and validated over 20 pull requests, ensuring high-quality code before merging into the master codebase.</li>
            <li>Executed comprehensive regression testing for VertiGIS Studio, identifying and reporting 10+ critical bugs in Azure
              DevOps ahead of the next feature release.</li>
            <li>Strengthened application by discovering and reporting over 5 bugs on production.</li>
          </ul>
        </Card>


        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Teaching Assistant for Italian Food History (ITAL300) </h3>
              <p className="font-semibold">University of Victoria </p>
            </div>
            <p className="text-muted-foreground"> Sep 2024 - Dec 2024</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Graded quizzes of over 70 students in the course.</li>
            <li>Researched and prepared in class activities and quizzes for students.</li>
            <li>Reinforced the material presented by the teacher with students one-on-one and held office hours to solve doubts.</li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">UVic Bound Student Leader </h3>
              <p className="font-semibold">Global Community, University of Victoria </p>
            </div>
            <p className="text-muted-foreground"> Sep 2023 - Oct 2024</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Developed and redesigned "The Food Guide", a food security website for the students.</li>
            <li>Assisted the International Centre for Students in coordinating and delivering diverse programs, events, and initiatives targeted at international students.</li>
            <li>Increased engagement by 100 followers by curating engaging content for the ICS's social media channels, using Canva Pro,  ensuring consistent brand messaging and effective student outreach.</li>
          </ul>
        </Card>



        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Data Engineering Co-op</h3>
              <p className="font-semibold">Ingrooves Music Group</p>
            </div>
            <p className="text-muted-foreground"> May 2023 - Aug 2023</p>
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

        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Quality Engineer</h3>
              <p className="font-semibold">Dometic</p>
            </div>
            <p className="text-muted-foreground"> Sep 2022 - Dec 2022</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Created and updated Power BI dashboards and reports for quality analysis of manufactured machining parts after
            rigorous cleaning of data.</li>
            <li>Conducted firmware testing over the CAN network for boat components, identifying potential bugs and saving
            thousands of dollars in warranty claims through early defect detection.</li>
            <li>Built and maintained customer warranty systems in MS Access, supporting the management of 100+ warranty
            claims per month with improved data accuracy and tracking.</li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">CST Go-Live Technical Support </h3>
              <p className="font-semibold">BC Children’s and Women’s Hospital </p>
            </div>
            <p className="text-muted-foreground"> Sep 2022 - Dec 2022</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Devised multi-step automation scripts using powershell and python for data cleaning and exporting, resulting in a
            significant decrease in reporting turnaround time; tool is now utilized by 8 data analysts across the organization.</li>
            <li>Hanlded the maintenance of computers, apply policies and card readers on 500+ computers across facility.</li>
            <li>Troubleshot jira tickets raised by doctors, nurses, and staff, resolving a majority of cases within the first hour to
            ensure seamless hospital operations.</li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Teaching Assistant for Engineering Economics (ECON180) </h3>
              <p className="font-semibold">University of Victoria </p>
            </div>
            <p className="text-muted-foreground"> Sep 2022 - Dec 2022</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Graded assignments and papers of over 150 students in the course.</li>
            <li>Researched and prepared pre-lecture readings for the students</li>
            <li>Reinforced the material presented by the teacher with students one-on-one and held office hours to solve doubts.</li>
          </ul>
        </Card>




      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'VectorDB', 'OpenAI', 'Docker', 'Kubernetes', 'Python','Expo', 'React Native', 'Wordpress', 'Yoast', 'Shell Scripting', 'Cloudinary','Rancher', 'GraphQL'].map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-6">
       
        <div className="flex justify-between">
            
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
        <Card className="p-6">
        <div className="flex justify-between">
            <div>
            <h3 className="text-xl font-semibold">Bachelor of Software Engineering</h3>
            </div>
            <p className="text-muted-foreground"> Sep 2020 - May 2025</p>
          </div>
          <p className="font-semibold">University of Victoria</p>
          <p className="text-muted-foreground">2020 - Present</p>
        </Card>
      </section>
    </div>
  );
}