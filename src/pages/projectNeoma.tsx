import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import Section from '../components/Layout/Section';

const ProjectNeoma = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 w-full bg-neutral-900/50 p-4 backdrop-blur">
        <nav className="flex justify-start">
          <Link
            href="/#portfolio"
            className="-m-1.5 rounded-md p-1.5 font-bold uppercase text-neutral-100 hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500"
          >
            Return
          </Link>
        </nav>
      </header>

      <Section className="bg-neutral-800" sectionId="about">
        <div className="flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white">
            AI Image Generation Platforms - Neoma
          </h2>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="col-span-1 flex items-start gap-x-2">
              <MapIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Location:</span>
              <span className="text-sm text-gray-300">Remote</span>
            </li>
            <li className="col-span-1 flex items-start gap-x-2">
              <CalendarIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Date:</span>
              <span className="text-sm text-gray-300">06/2025 - now</span>
            </li>
            <li className="col-span-1 flex items-start gap-x-2">
              <BuildingOffice2Icon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Platforms:</span>
              <span className="text-sm text-gray-300">neoma-ai.fr, neoma-poster.com</span>
            </li>
            <li className="col-span-1 flex items-start gap-x-2">
              <AcademicCapIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Skills:</span>
              <span className="text-sm text-gray-300">Generative AI, Full-Stack, Marketing</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="bg-neutral-100" sectionId="resume">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="relative h-max">
                <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2 md:col-span-3">
              <span>
                Developed neoma-ai.fr and neoma-poster.com end-to-end, integrating fine-tuned
                generative AI for custom designs.
              </span>
              <span>
                Managed full-stack architecture and drove user acquisition via targeted Instagram
                ads and Instagram community growth.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="relative h-max">
                <h2 className="text-xl font-bold uppercase text-neutral-800">Links</h2>
                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2 md:col-span-3">
              <a
                href="https://neoma-ai.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', textDecoration: 'none' }}
              >
                https://neoma-ai.fr
              </a>
              <a
                href="https://neoma-poster.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', textDecoration: 'none' }}
              >
                https://neoma-poster.com
              </a>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default ProjectNeoma;
