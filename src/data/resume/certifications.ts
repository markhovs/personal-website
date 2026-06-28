export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    title: 'Certified Entrepreneurial Coach',
    issuer: 'UnternehmerTUM for Innovators',
    year: '2024',
  },
  {
    title: 'Think. Make. Start.',
    issuer: 'TUM',
    year: '2024',
  },
  {
    title: 'Blockchain Challenger',
    issuer: 'Nooor — Armenian Blockchain',
    year: '2020',
  },
  {
    title: 'Machine Learning Trainee',
    issuer: 'FAST — Foundation for Armenian Science & Technology',
    year: '2019',
  },
  {
    title: 'Machine Learning Trainee',
    issuer: 'PicsArt Armenia',
    year: '2017',
  },
  {
    title: 'Cyber Security Trainee',
    issuer: 'OWASP Armenia',
    year: '2016',
  },
];

export default certifications;
