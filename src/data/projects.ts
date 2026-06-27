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
  {
    title: 'Deepchar',
    subtitle: 'AUA Capstone Project',
    link: 'https://deepchar.github.io/',
    image: '/images/projects/deepchar.jpeg',
    date: '2019-05-20',
    desc: 'An NLP capstone project aiming to produce a precise model for multilingual transliteration with sequence-to-sequence models and transfer learning.',
    tech: ['Python', 'NLP', 'Seq2Seq', 'Transfer Learning'],
    featured: true,
  },
  {
    title: 'Ambulance Feedback',
    subtitle: 'Grant from the Ministry of Health of RA',
    link: 'https://github.com/markhovs/ambulance-feedback-app',
    image: '/images/projects/ambulance_feedback.jpg',
    date: '2019-08-28',
    desc: 'Won ~$2500 in prizes for a feedback system for ambulance services: a web app with user ID database lookup and SMS verification.',
    tech: ['React', 'Node.js', 'SMS', 'PostgreSQL'],
    featured: true,
  },
  {
    title: 'Megerian Carpets GAN',
    subtitle: 'A GAN that generates new carpet designs',
    link: 'https://github.com/markhovs/Megerian-Carpet-GAN',
    image: '/images/projects/megerian-GAN.jpg',
    date: '2020-01-24',
    desc: 'Trained a StyleGAN to generate new carpet designs. Augmented ~600 scraped samples 8x, then trained with impressive empirical results.',
    tech: ['Python', 'StyleGAN', 'PyTorch', 'Computer Vision'],
  },
  {
    title: 'iCafeteria',
    subtitle: 'Database Systems course final project',
    link: 'https://github.com/markhovs/iCafeteria',
    image: '/images/projects/icafeteria.jpg',
    date: '2018-12-11',
    desc: 'A web app for cafeteria users built on a React Native + Node.js + Express + MySQL stack, using Sequelize ORM for database management.',
    tech: ['React Native', 'Node.js', 'Express', 'MySQL'],
  },
];

export default data;
