import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/markhovs/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/markhovs',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://twitter.com/markhovs',
    label: 'X',
    icon: faTwitter,
  },
  {
    link: 'https://www.instagram.com/markhovs/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.facebook.com/mark.hovs',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://steamcommunity.com/id/markhovs/',
    label: 'Steam',
    icon: faSteam,
  },
  {
    link: 'mailto:contact@markhovs.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
