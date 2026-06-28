/**
 * Resume experience. A company groups one or more roles (a promotion timeline)
 * with a single shared summary and set of highlights.
 */
export interface Role {
  position: string;
  startDate: string;
  endDate?: string;
}

export interface Position {
  name: string;
  url?: string;
  roles: Role[];
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'SAP Fioneer',
    url: 'https://www.sapfioneer.com',
    roles: [
      {
        position: 'Senior Business Solution Consultant',
        startDate: '2026-05-01',
      },
      {
        position: 'Business Solution Consultant',
        startDate: '2025-05-01',
        endDate: '2026-04-01',
      },
      {
        position: 'Business Analyst (Working Student)',
        startDate: '2024-11-01',
        endDate: '2025-04-01',
      },
    ],
    summary: `Fast-tracked from Business Analyst working-student through the LIFT Graduate Program to Senior Business Solution Consultant in ~18 months, with responsibilities
    compounding from business analysis into solution architecture, product ownership, and
    release management.`,
    highlights: [
      'Lead a 10+ person cross-functional agile team (engineering, AI, DevOps) as Technical Product Owner, delivering scalable fintech solutions.',
      'Act as Software Architect for "Credit Workplace," translating complex commercial-lending processes into cloud-native architectures.',
      'Own end-to-end release management, contributing centrally to the first product release and acting as Release Manager for the next.',
      'Drive AI-powered process automation: integrated Claude AI agents and established spec-driven development workflows to accelerate feature analysis and delivery.',
    ],
  },
  {
    name: 'EPIC – Entrepreneurship & Product Innovation Center',
    url: 'https://epic.aua.am/',
    roles: [{ position: 'Startup Mentor & Advisor', startDate: '2024-05-01' }],
    summary: `Mentor early-stage startups through incubation, covering strategy, idea
    validation, customer discovery, and growth.`,
  },
  {
    name: 'Dabble Lab',
    url: 'http://dabblelab.com',
    roles: [
      {
        position: 'Software Engineer → Project Lead',
        startDate: '2019-12-01',
        endDate: '2023-05-01',
      },
    ],
    highlights: [
      'Built scalable backend systems and APIs for clients across industries (e.g. EPCOR Utilities).',
      'Developed NLP-powered intelligent assistants with Amazon Alexa and Twilio.',
      'Delivered data science and machine learning projects in the financial sector (e.g. New American Funding).',
      'Led the architecture and development of Node Auditor, a platform bridging Web3 and Web2 that gives Pocket Network node operators and staking investors real-time visibility into decentralized node performance and on-chain earnings.',
      'Promoted to Project Lead (2022): managed cloud software, development teams, and client delivery.',
    ],
  },
  {
    name: 'TutWiser',
    roles: [
      {
        position: 'Co-Founder',
        startDate: '2019-09-01',
        endDate: '2020-06-01',
      },
    ],
    summary: `Co-founded a private tutoring platform for exam and certification prep;
    completed the EPIC incubation program and won startup competitions.`,
  },
];

export default work;
