export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Programming Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Python'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Programming Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Programming Languages', 'Javascript'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Go',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Programming Languages', 'Data Science'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Programming Languages'],
  },
  {
    title: 'Assembly',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Programming Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Programming Languages'],
  },
  // Web Development
  {
    title: 'Node.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Puppeteer',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  // Databases
  {
    title: 'MySQL/PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Databases', 'Web Development', 'Programming Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Prisma',
    competency: 4,
    category: ['Databases', 'Web Development', 'Javascript'],
  },
  {
    title: 'Sequelize',
    competency: 4,
    category: ['Databases', 'Web Development', 'Javascript'],
  },
  // Data Science & Engineering
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'GPT-3',
    competency: 3,
    category: ['Data Science'],
  },
  // Smart Assistants & Communication
  {
    title: 'Alexa Skills',
    competency: 4,
    category: ['Smart Assistants', 'SMS/Communication'],
  },
  {
    title: 'Twilio',
    competency: 4,
    category: ['Smart Assistants', 'SMS/Communication'],
  },
  // Tools & Infrastructure
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'GNU/Linux',
    competency: 4,
    category: ['Tools'],
  },
  // Media
  {
    title: 'Photoshop',
    competency: 3,
    category: ['Media'],
  },
  {
    title: 'Lightroom',
    competency: 3,
    category: ['Media'],
  },
  {
    title: 'Premiere Pro',
    competency: 4,
    category: ['Media'],
  },
  // Other
  {
    title: 'Public Speaking',
    competency: 4,
    category: ['Other'],
  },
  {
    title: 'Piano',
    competency: 4,
    category: ['Other'],
  },
  {
    title: 'Guitar',
    competency: 2,
    category: ['Other'],
  },
  {
    title: 'Microsoft Office',
    competency: 4,
    category: ['Other'],
  },
  // Languages
  {
    title: 'Armenian',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Russian',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'German',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'French',
    competency: 1,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
