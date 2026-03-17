import {
  AcademicCapIcon,
  CalendarIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import Section from '../components/Layout/Section';

const ProjectMIT100K = () => {
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
            3D Tennis Player Reconstruction - MIT 100K Finalist
          </h2>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="col-span-1 flex items-start gap-x-2">
              <MapIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Location:</span>
              <span className="text-sm text-gray-300">Cambridge, US (On site)</span>
            </li>
            <li className="col-span-1 flex items-start gap-x-2">
              <CalendarIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Date:</span>
              <span className="text-sm text-gray-300">10/2025 - Now</span>
            </li>
            <li className="col-span-1 flex items-start gap-x-2 sm:col-span-2">
              <AcademicCapIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">Skills:</span>
              <span className="text-sm text-gray-300">Computer Vision, 3D Reconstruction</span>
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
            <div className="col-span-1 flex flex-col md:col-span-3">
              <span>
                Selected as a finalist in the prestigious MIT 100K competition for developing a
                3D reconstruction system for tennis players using 1-3 iPhones. This allows
                athletes to visualize matches from multiple angles, analyze mechanics, and enhance
                performance.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="relative h-max">
                <h2 className="text-xl font-bold uppercase text-neutral-800">Visuals</h2>
                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4 md:col-span-3">
              <Image
                alt="MIT 100K presentation"
                src="/images/mit100k-1.png"
                width={1200}
                height={800}
                className="h-auto w-full rounded-lg shadow-lg"
              />
              <Image
                alt="MIT 100K finalist group"
                src="/images/mit100k-2.png"
                width={1200}
                height={800}
                className="h-auto w-full rounded-lg shadow-lg"
              />
              <Image
                alt="MIT 100K stage view"
                src="/images/mit100k-3.png"
                width={1200}
                height={800}
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectMIT100K;
