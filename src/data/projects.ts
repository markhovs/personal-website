export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  // ---- Featured ----
  {
    title: 'Proofs of Inference (zkML)',
    subtitle: 'ETHGlobal Prague 2025 — 2× 1st place',
    link: 'https://ethglobal.com/showcase/proofs-of-inference-6rug4',
    image: '/images/projects/proofs-of-inference.jpg',
    date: '2025-06-01',
    desc: 'A decentralized marketplace to request, verify, and pay for private, auditable AI inference. ML models compile into zk-SNARK circuits, so a provider can prove a specific model produced a specific output without revealing the model or data.',
    tech: [
      'ezkl / zkML',
      'Solidity',
      'Hedera EVM',
      'Filecoin + Akave',
      'Node.js',
      'Python',
      'React',
    ],
    featured: true,
  },
  {
    title: 'One-Click DPP',
    subtitle: "TUM Master's thesis + working pilot",
    link: 'https://github.com/markhovs/dpp-pilot-project',
    image: '/images/projects/dpp.jpg',
    date: '2025-04-01',
    desc: "My TUM master's thesis, turned into a working system. A Digital Product Passport platform built on Asset Administration Shell (AAS) digital twins: once the integrations are in place, it spins up a standards-compliant digital twin for a product with a single click.",
    tech: [
      'AAS',
      'Digital Twins',
      'TypeScript',
      'Python',
      'Docker',
      'Microservices',
    ],
    featured: true,
  },
  {
    title: 'Deepchar',
    subtitle: 'AUA capstone — NLP transliteration',
    link: 'https://deepchar.github.io/',
    image: '/images/projects/deepchar.jpeg',
    date: '2020-01-20',
    desc: 'An NLP toolkit for character-level transliteration using sequence-to-sequence models and transfer learning (a character-level Fairseq fork). Ships pre-trained models and JavaScript & Python client libraries.',
    tech: ['Python', 'PyTorch', 'Fairseq', 'seq2seq', 'NLP'],
    featured: true,
  },

  // ---- Archive ----
  {
    title: 'Smart Wristband Handshake',
    subtitle: 'Think. Make. Start. (TUM)',
    link: 'https://github.com/markhovs/smart-wristband-handshake',
    image: '/images/projects/smart-wristband.jpg',
    date: '2024-07-01',
    desc: 'A wearable that exchanges contact details when two people shake hands at conferences and events. Embedded firmware paired with a Flutter companion app.',
    tech: ['Flutter/Dart', 'C/C++ Firmware', 'Embedded', 'BLE'],
  },
  {
    title: 'AI Go-to-Market Automation',
    subtitle: 'rentcard GmbH — TUM project study',
    image: '/images/projects/rentcard.jpg',
    date: '2024-04-01',
    desc: 'Built and A/B-tested an AI-driven go-to-market pipeline and lead magnets for a B2C platform, validating AI-assisted marketing and growth experiments.',
    tech: ['AI Marketing Automation', 'A/B Testing', 'Go-to-Market'],
  },
  {
    title: 'Megerian Carpets GAN',
    subtitle: 'FAST ML final project',
    link: 'https://github.com/markhovs/Megerian-Carpet-GAN',
    image: '/images/projects/megerian-GAN.jpg',
    date: '2020-01-24',
    desc: 'Trained a StyleGAN to generate original carpet designs for Megerian Carpet. Augmented ~600 scraped samples 8× and produced compelling synthetic designs.',
    tech: ['Python', 'StyleGAN', 'PyTorch', 'Computer Vision'],
  },
  {
    title: 'NBA Stats Dashboard',
    subtitle: 'Interactive R Shiny dashboard',
    link: 'https://github.com/markhovs/NBA-stats-dashboard',
    image: '/images/projects/nba-dashboard.jpg',
    date: '2019-05-01',
    desc: 'Pulls real NBA APIs, derives statistics about players and teams, and visualizes them in a fully interactive R Shiny dashboard.',
    tech: ['R', 'R Shiny', 'Data Analysis', 'Data Viz'],
  },
  {
    title: 'Ambulance Feedback',
    subtitle: 'Open Gov Data Hackathon — Winner',
    link: 'https://github.com/markhovs/ambulance-feedback-app',
    image: '/images/projects/ambulance_feedback.jpg',
    date: '2019-08-28',
    desc: 'A feedback system for ambulance services with user-ID database lookup and SMS verification, built in a 2-day hackathon and awarded first place.',
    tech: ['React', 'Node.js', 'SMS', 'PostgreSQL'],
  },
];

export default data;
