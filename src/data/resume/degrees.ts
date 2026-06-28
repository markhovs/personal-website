export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  highlights?: string[];
}

const degrees: Degree[] = [
  {
    school: 'Technical University of Munich',
    degree: 'M.S. in Management',
    link: 'https://www.tum.de/en/',
    year: 2025,
    highlights: [
      'DAAD Scholarship holder (2022–2024).',
      'TUM Entrepreneurial Masterclass — Fellow, Batch 17.',
      'Thesis: "Comparative Assessment of Technologies for Implementing Digital Product Passport Systems."',
    ],
  },
  {
    school: 'American University of Armenia',
    degree:
      'B.S. in Computer Science (Minor in Philosophy, Politics & Economics)',
    link: 'https://aua.am/',
    year: 2020,
    highlights: [
      'Thesis: "Deepchar: Transliteration using Natural Language Processing."',
    ],
  },
];

export default degrees;
