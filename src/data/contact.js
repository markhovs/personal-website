import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/markhovs',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/mark.hovs',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/markhovs/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/markhovs/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/markhovs',
    label: 'Twitter',
    icon: faTwitter,
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
