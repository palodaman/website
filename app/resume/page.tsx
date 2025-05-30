'use client'
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const pdfUrl = '../../Aman_Palod_Resume.pdf';
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
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <Card className="p-6">
          <p className="text-muted-foreground leading-relaxed">
            Recent Software Engineering graduate from the University of Victoria with hands-on experience across the full
            development lifecycle through 4 co-ops, school work, freelancing, and project work. Skilled in building scalable
            web apps, automating infrastructure, and solving complex technical problems. Proven ability to quickly learn
            new tools, contribute production-ready code, and collaborate across teams.
          </p>
        </Card>
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
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'JavaScript', 'Python', 'Java', 'C'].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Frameworks/Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Supabase', 'Jest', 'Node.js', 'Expo', 'TanStack'].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">DevOps/Infra</h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'AWS', 'Azure DevOps', 'Rancher'].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'MongoDB', 'Snowflake'].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Bash', 'WebdriverIO', 'Git', 'Figma'].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <li>Automated 8 functional test suites in Chrome using Typescript, WebdriverIO, and Jest reducing regression testing
              time and gaining good knowledge of DOM traversal.</li>
            <li>Reviewed and validated several pull requests for bug fixes and user stories, ensuring defect free code before merging
              into the production codebase.</li>
            <li>Executed comprehensive regression testing for VertiGIS Studio Web, identifying and reporting multiple bugs in the
              release candidate ahead of the next feature release.</li>
            <li>Wrote and updated over 20 test cases after the corresponding bug fixes and user stories were merged.</li>
          </ul>
        </Card>       

        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Freelance </h3>
              <p className="font-semibold">PixelCrafted - Agency </p>
            </div>
            <p className="text-muted-foreground"> May 2023 - Present</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Built and managed 7 client websites over 2 years, catering to small and medium businesses and solopreneurs.</li>
            <li>Consult with clients to understand business needs, ensuring customized and scalable solutions.</li>
            <li>Provide end-to-end solutions, including UI/UX design, performance optimization, and best SEO practices.</li>
            <li>Develop and maintain websites using Webflow, Drupal, WordPress, React, Next.js, and Vite.</li>
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
            <li>Maintained 5+ data pipelines from retailers including Spotify, Apple Music, and Deezer.</li>
            <li>Automated cron job setup in Rancher by developing a dedicated API, eradicating manual setup. Integrated a Slack
              webhook for real-time alerts, resulting in quicker response times and reducing issue resolution time by 33 percent.</li>
            <li>Designed and deployed a GitLab crawler API to track version usage across 50+ internal data tools, streamlining
              compliance and eliminating redundancy.</li>
            <li>Strengthened application security by identifying and remediating critical log4j vulnerabilities across a couple of Java
              applications, improving overall system resilience.</li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Quality Engineer Co-op</h3>
              <p className="font-semibold">Dometic</p>
            </div>
            <p className="text-muted-foreground"> Sep 2022 - Dec 2022</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Created and updated Power BI dashboards and reports for quality analysis of manufactured machining parts after
              rigorous cleaning of data. Built RPA workflows for autoupdating the dashboards.</li>
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
              <p className="font-semibold">BC Children's and Women's Hospital </p>
            </div>
            <p className="text-muted-foreground"> Sep 2022 - Dec 2022</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Developed miscellaneous scripts to automate tasks such as cleaning data and exporting data to the database on the
              network using Powershell, Python, SQL server, and Pulover's Macro recording software.</li>
            <li>Hanlded the maintenance of computers, apply policies and card readers on 500+ computers across facility.</li>
            <li>Led a team of 4 co-op students and assessed and troubleshooted technical problems brought by doctors, nurses, and
              staff members</li>
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
    </div>
  );
}