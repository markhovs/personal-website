import type { Metadata } from 'next';

import Awards from '@/components/Resume/Awards';
import Certifications from '@/components/Resume/Certifications';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import Volunteering from '@/components/Resume/Volunteering';
import PageWrapper from '@/components/Template/PageWrapper';
import awards from '@/data/resume/awards';
import certifications from '@/data/resume/certifications';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import volunteering from '@/data/resume/volunteering';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    "Mark Hovsepyan's Resume. Builder bridging engineering and business. SAP Fioneer, EPIC, Dabble Lab, TutWiser, TUM, AUA.",
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            Builder bridging engineering and business. I&apos;m a Senior
            Business Solution Consultant at SAP Fioneer in Munich, leading a
            cross-functional team that turns complex commercial-lending
            requirements into real fintech products, and increasingly bringing
            AI agents into how we build. Previously a software engineer at
            Dabble Lab and co-founder of TutWiser; TUM Management graduate (DAAD
            Scholar) and AUA Computer Science alumnus. Outside work, I mentor
            startups at AUA&apos;s EPIC incubator and hack on side projects,
            most recently a 2× winner at ETHGlobal Prague.
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="certifications" className="resume-section">
            <Certifications data={certifications} />
          </section>

          <section id="volunteering" className="resume-section">
            <Volunteering data={volunteering} />
          </section>

          <section id="awards" className="resume-section">
            <Awards data={awards} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
