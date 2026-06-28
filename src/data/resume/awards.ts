export interface Award {
  title: string;
  event: string;
  year: string;
  url?: string;
  description?: string;
}

const awards: Award[] = [
  {
    title: '2× 1st Place — Protocol Labs (Filecoin × Akave) & Hedera EVM',
    event: 'ETHGlobal Prague',
    year: '2025',
    url: 'https://ethglobal.com/showcase/proofs-of-inference-6rug4',
    description:
      'For Proofs of Inference, a zero-knowledge ML inference marketplace.',
  },
  {
    title: 'Winner',
    event: 'Open Government Data Hackathon',
    year: '2019',
    description: 'For the Ambulance Feedback project.',
  },
];

export default awards;
