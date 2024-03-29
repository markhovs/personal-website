import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import OtherEducation from '../components/Resume/OtherEducation';
import Experience from '../components/Resume/Experience';
import OtherExperience from '../components/Resume/OtherExperience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import qualifications from '../data/resume/qualifications';
import participations from '../data/resume/participations';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Other Education',
  'Experience',
  'Other Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Mark Hovsepyan's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <OtherEducation data={qualifications} />
      <Experience data={positions} />
      <OtherExperience data={participations} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
