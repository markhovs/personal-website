export interface VolunteeringItem {
  role: string;
  org: string;
  url?: string;
  daterange: string;
  summary?: string;
}

const volunteering: VolunteeringItem[] = [
  {
    role: 'Head of Student Experience',
    org: 'Student Council, TUM School of Management',
    daterange: '2023 – 2024',
    summary: 'Led initiatives to improve student engagement across the school.',
  },
  {
    role: 'Active Member',
    org: 'DAAD-Freundeskreis e.V.',
    daterange: '2022 – Present',
    summary:
      "Organizing city trips, cultural events, and hikes for Munich's DAAD community.",
  },
  {
    role: 'Core Member, External Affairs',
    org: 'TUM Blockchain Club',
    daterange: '2024 – Present',
    summary: "Supporting partnerships and the club's growth.",
  },
  {
    role: 'Event Organizer',
    org: 'ESN TUMi e.V.',
    daterange: '2023 – 2025',
    summary: "Events for TUM's international and Erasmus community.",
  },
  {
    role: 'Organizer',
    org: 'European Youth Parliament (EYP) Armenia',
    daterange: '2017 – 2018',
    summary: 'Organized FIND 2017 and IEFA 2017; committee chair.',
  },
];

export default volunteering;
