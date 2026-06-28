import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * static values (some genuine, some for fun). To see everything the github
 * api returns, run: curl https://api.github.com/repos/markhovs/personal-website
 */
const data: StatData[] = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/markhovs/personal-website/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of TypeScript powering this website',
    value: '4101',
    link: 'https://github.com/markhovs/personal-website/graphs/contributors',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Future passions queued on my Notion list',
    value: '47',
  },
];

export default data;
