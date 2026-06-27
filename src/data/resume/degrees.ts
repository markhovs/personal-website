export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Technische Universität München',
    degree: 'M.S. in Management',
    link: 'https://www.tum.de/en/',
    year: 2024,
  },
  {
    school: 'DAAD',
    degree: 'DAAD Scholarship',
    link: 'https://www.daad.de/en/',
    year: 2024,
  },
  {
    school: 'American University of Armenia',
    degree: 'B.S. in Computer Science',
    link: 'https://aua.am/',
    year: 2020,
  },
  {
    school: 'American University of Armenia',
    degree: 'Minor in Philosophy, Politics & Economics (PPE)',
    link: 'https://aua.am/',
    year: 2020,
  },
  {
    school: 'Hakob Kojoyan Art Educational Complex',
    degree: 'High School',
    link: 'https://kojoyan.schoolsite.am/',
    year: 2015,
  },
];

export default degrees;
