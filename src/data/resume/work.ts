/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Dabble Lab',
    position: 'Software Developer',
    url: 'http://dabblelab.com',
    startDate: '2019-12-01',
    summary: `Building and maintaining fullstack and data-driven products for clients of
    different scales and industries, from small startups to large enterprises.`,
    highlights: [
      'Leading teams and maintaining projects.',
      'Developing and maintaining fullstack applications.',
      'Working on Data Science and Data Engineering projects.',
      'Working on backend technologies such as Node.js, Express, MongoDB, and PostgreSQL.',
      'Involved in development with various technologies.',
    ],
  },
  {
    name: 'TutWiser',
    position: 'Co-founder, CEO',
    url: 'https://tutwiser.com',
    startDate: '2019-09-01',
    endDate: '2020-12-01',
    summary: 'Created a system for the private education sector.',
    highlights: [
      'Created a system for the private education sector.',
      'Participated in the EPIC incubation program.',
      'Won second place at Startup Boost Weekend.',
    ],
  },
];

export default work;
