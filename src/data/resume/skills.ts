export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

// Explicit order controls how category groups render on the resume.
const categoryOrder = [
  'Programming Languages',
  'AI & Machine Learning',
  'Web & Backend',
  'Data & Infrastructure',
  'Product & Delivery',
  'Languages',
] as const;

const skills: Skill[] = [
  // Programming Languages
  { title: 'Python', competency: 5, category: ['Programming Languages'] },
  { title: 'TypeScript', competency: 4, category: ['Programming Languages'] },
  { title: 'JavaScript', competency: 4, category: ['Programming Languages'] },
  { title: 'SQL', competency: 4, category: ['Programming Languages'] },
  { title: 'R', competency: 4, category: ['Programming Languages'] },
  { title: 'C++', competency: 3, category: ['Programming Languages'] },
  { title: 'Java', competency: 3, category: ['Programming Languages'] },
  { title: 'Rust', competency: 2, category: ['Programming Languages'] },
  // AI & Machine Learning
  { title: 'Claude Code', competency: 5, category: ['AI & Machine Learning'] },
  { title: 'Pandas', competency: 5, category: ['AI & Machine Learning'] },
  { title: 'NumPy', competency: 5, category: ['AI & Machine Learning'] },
  { title: 'PyTorch', competency: 4, category: ['AI & Machine Learning'] },
  { title: 'scikit-learn', competency: 4, category: ['AI & Machine Learning'] },
  {
    title: 'TensorFlow / Keras',
    competency: 3,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'Hugging Face',
    competency: 3,
    category: ['AI & Machine Learning'],
  },
  { title: 'LangChain', competency: 3, category: ['AI & Machine Learning'] },
  { title: 'LangGraph', competency: 3, category: ['AI & Machine Learning'] },
  { title: 'Ollama', competency: 3, category: ['AI & Machine Learning'] },
  { title: 'JAX', competency: 2, category: ['AI & Machine Learning'] },
  { title: 'Gradio', competency: 2, category: ['AI & Machine Learning'] },
  // Web & Backend
  { title: 'Node.js', competency: 5, category: ['Web & Backend'] },
  { title: 'FastAPI', competency: 4, category: ['Web & Backend'] },
  { title: 'React', competency: 4, category: ['Web & Backend'] },
  { title: 'Next.js', competency: 4, category: ['Web & Backend'] },
  { title: 'Express', competency: 4, category: ['Web & Backend'] },
  { title: 'GraphQL', competency: 3, category: ['Web & Backend'] },
  { title: 'NestJS', competency: 2, category: ['Web & Backend'] },
  { title: 'Flutter', competency: 2, category: ['Web & Backend'] },
  // Data & Infrastructure
  { title: 'PostgreSQL', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'MongoDB', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'AWS', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'Docker', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'Kubernetes', competency: 3, category: ['Data & Infrastructure'] },
  { title: 'Git', competency: 5, category: ['Data & Infrastructure'] },
  { title: 'Linux', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'Prisma', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'Bash', competency: 4, category: ['Data & Infrastructure'] },
  { title: 'Azure', competency: 3, category: ['Data & Infrastructure'] },
  { title: 'Vercel', competency: 3, category: ['Data & Infrastructure'] },
  { title: 'pgvector', competency: 3, category: ['Data & Infrastructure'] },
  { title: 'Redis', competency: 2, category: ['Data & Infrastructure'] },
  // Product & Delivery
  {
    title: 'Product Ownership',
    competency: 5,
    category: ['Product & Delivery'],
  },
  {
    title: 'Solution Architecture',
    competency: 4,
    category: ['Product & Delivery'],
  },
  { title: 'Agile & Scrum', competency: 5, category: ['Product & Delivery'] },
  {
    title: 'Release Management',
    competency: 4,
    category: ['Product & Delivery'],
  },
  {
    title: 'Business Analysis',
    competency: 4,
    category: ['Product & Delivery'],
  },
  {
    title: 'Go-to-Market Strategy',
    competency: 3,
    category: ['Product & Delivery'],
  },
  { title: 'Jira', competency: 5, category: ['Product & Delivery'] },
  { title: 'Confluence', competency: 5, category: ['Product & Delivery'] },
  { title: 'Notion', competency: 5, category: ['Product & Delivery'] },
  { title: 'Miro', competency: 4, category: ['Product & Delivery'] },
  // Languages (spoken; CEFR mapped to size)
  { title: 'Armenian', competency: 5, category: ['Languages'] },
  { title: 'English', competency: 5, category: ['Languages'] },
  { title: 'Russian', competency: 5, category: ['Languages'] },
  { title: 'German', competency: 4, category: ['Languages'] },
  { title: 'French', competency: 2, category: ['Languages'] },
];

const categories: Category[] = categoryOrder.map((name) => ({
  name,
  color: 'var(--color-accent)',
}));

export { categories, skills };
