import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import porfolioImage3 from '../images/chatBot.jpg';
import porfolioImage10 from '../images/hand.jpg';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/LLM.jpg';
import porfolioImage7 from '../images/orange2D.jpg';
import porfolioImage8 from '../images/osci.jpg';
import profilepic from '../images/profilepic.jpg';
import porfolioImage1 from '../images/robot.jpg';
import porfolioImage6 from '../images/robotTPE.jpg';
import porfolioImage9 from '../images/segment.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alexandre Clin Deffarges',
  description: "Alexandre Clin Deffarges Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Alexandre Clin Deffarges`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Alexandre, a <strong className="text-stone-100"> Robotic/AI Engineer</strong>, currently doing my Master
        at <strong className="text-stone-100">ETHZ Zurich</strong>, in robotic.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have a passion for innovation, AI and robotics. I benefit from experience acquired during various internships and trainings. I have a taste for challenge and like to get out of my comfort zone to learn new skills.
      </p>
    </>
  ),
  actions: [
    {
      href: './CVAlex.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    { label: 'Location', text: 'Zurich, Switzerland', Icon: MapIcon },
    { label: 'Age', text: '22', Icon: CalendarIcon },
    { label: 'Nationality', text: 'French', Icon: FlagIcon },
    { label: 'Interests', text: 'Robotic, AI, Innovations', Icon: SparklesIcon },
    { label: 'Study', text: 'ETHZ Zurich', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Student', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Coding',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Github',
        level: 8,
      },
      {
        name: 'C++',
        level: 6,
      },
    ],
  },
  {
    name: 'Artificial Intelligence',
    skills: [
      {
        name: 'Computer Vision',
        level: 8,
      },
      {
        name: 'Deep Learning',
        level: 9,
      },
      {
        name: 'Pytorch',
        level: 8,
      },
      {
        name: 'Reinforcement Learning',
        level: 7,
      },
    ],
  },
  {
    name: 'Robotics',
    skills: [
      {
        name: 'AI applied to robotics',
        level: 9,
      },
      {
        name: 'Mechanical design',
        level: 8,
      },
      {
        name: 'Manufacturing',
        level: 7,
      },

    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Learning Recovery Maneuvers for Robot ANYmal',
    description: 'Train a reinforcement learning model to learn recovery maneuvers and reduce the damages when falling.',
    url: './projectRL1',
    image: porfolioImage1,
    date: '> 02/2024 - now (07/2024)',
  },
  {
    title: 'Sorting arm Robot',
    description: 'Programming, 3D design and built a sorting arm robot with Arduino that sort 3 different size of cube.',
    url: './projectTPE',
    image: porfolioImage6,
    date: '> 2019/2020',
  },
  {
    title: 'Robotic hand project',
    description: 'Developing a robotic hand capable of manipulation within a 250CHF budget, leveraging skills in design, fabrication, learning, control, and testing.',
    url: './projectHand',
    image: porfolioImage10,
    date: '> 09/2023 - 01/2024',
  },
  {
    title: 'Spatial reasoning from LLM for global navigation ',
    description: 'To improve robot’s navigation and to make it more versatile in various different environment, we are testing the spatial reasoning capabilities of large language models.',
    url: './projectLLM',
    image: porfolioImage2,
    date: '> 02/2024 - now (07/2024)',
  },
  {
    title: 'Start Hack, saint gallen',
    description: 'Developping a realistic human voice chatbot for the canton of St. Gallen, utilizing the data provided by the canton and from their website. We aimed to address the challenge they faced with hundreds of daily calls,',
    url: './projectBob',
    image: porfolioImage3,
    date: '> 20,21,22/03/2024',
  },
  {
    title: 'Oscillator design',
    description: 'Designing a 2-degree freedom oscillator for watches, resistant to linear and angular accelerations, using CATIA software',
    url: './projectHorl',
    image: porfolioImage8,
    date: '> 01/2022 - 06/2022',
  },
  {
    title: 'Mechanical design project',
    description: 'Brainstorming and designing with CATIA a orange press like commercial juicers.',
    url: './projectOrange',
    image: porfolioImage7,
    date: '> 01/2022 - 06/2022',
  },

  {
    title: 'Computer vision project and deep learning project',
    description: 'Crafting a CNN model for image recognition, segmentation, and object tracking, and various deep learning models for music genre classification, graph neural networks, or natural language processing.',
    url: './projectCV',
    image: porfolioImage9,
    date: '> 09/2023 - 06/2024',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023-2025, 2 years',
    location: 'Zurich, Switzerland',
    title: 'ETHZ, Master of Science in Robotics, Systems and Control',
    content: <p>Description</p>,
  },
  {
    date: '2022-2023, 1 year',
    location: 'Tokyo, Japan',
    title: 'TokyoTech, Exchange year',
    content: <p>Describe</p>,
  },
  {
    date: '2020-2023, 3 year',
    location: 'Lausanne, Switzerland',
    title: 'EPFL, Bachelor of microengineering',
    content: <p>Grade : 5,23/6</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '05/2023 - 08/2023, 4 months',
    location: 'Lausanne, Switzerland',
    title: 'Internship at the Space Domain, Swiss Army',
    content: (
      <p>
        Throughout my internship under the guidance of Gabriel Laupre, I worked as a consultant for the company Solenix, focusing on projects within the Space Domain for the Swiss Army. My main role involved calculating satellite deltaV and consumed fuel using historical data. I applied various techniques, including signal processing and machine learning, utilizing both Python and Java for the computations and the development. (<a href="https://space-campus.ch/" target="_blank" rel="noopener noreferrer">https://space-campus.ch/</a>) (<a href="https://www.solenix.ch/" target="_blank" rel="noopener noreferrer">https://www.solenix.ch/</a>)
      </p>
    ),
  },
  {
    date: ' 07/2022 - 08/2022',
    location: 'Lausanne, Switzerland',
    title: 'Internship of manufacturing',
    content: (
      <p>
        During this manufacturing internship, I learned the entire process of drilling, milling, turning, brazing and sawing. These skills were learned by making many different object parts using different machines.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact me !',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'alexandre.clin@orange.fr',
      href: 'mailto:alexandre.clin@orange.fr',
    },
    {
      type: ContactType.Email,
      text: 'aclindeffarg@ethz.ch',
      href: 'mailto:aclindeffarg@ethz.ch',
    },
    {
      type: ContactType.Location,
      text: 'Zurich, Switzerland',
      href: '',
    },
    {
      type: ContactType.LinkedIn,
      text: '@alexandre-clin-deffarges',
      href: 'https://www.linkedin.com/in/alexandre-clin-deffarges-387748227',
    },
    {
      type: ContactType.Instagram,
      text: '@clin.alexandre',
      href: 'https://www.instagram.com/clin.alexandre',
    },

  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/alexxelaalexxela' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alexandre-clin-deffarges-387748227' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/clin.alexandre' },
];
