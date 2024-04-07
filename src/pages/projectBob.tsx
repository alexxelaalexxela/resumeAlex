// pages/NouvellePage.js
import {
    AcademicCapIcon,
    BuildingOffice2Icon,
    CalendarIcon,
    MapIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import Section from '../components/Layout/Section';
import { aboutData } from '../data/data';


const NouvellePage = () => {
    const { profileImageSrc } = aboutData;
    return (
        <div>
            <header className="fixed top-0 z-50 w-full bg-neutral-900/50 p-4 backdrop-blur">
                <nav className="flex justify-start">
                    {/* Mettez à jour le chemin vers votre page Portfolio si nécessaire */}
                    <Link
                        href="/#portfolio"
                        className="-m-1.5 p-1.5 rounded-md font-bold uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100"
                    >
                        Return
                    </Link>
                </nav>
            </header>


            <Section className="bg-neutral-800" sectionId="about">
                <div className="flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm">
                    <div className={classNames('col-span-1 flex flex-col gap-y-6 text-center items-center ', { 'md:col-span-3': !!profileImageSrc })}>
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold text-white items-center text-center">Start Hack, saint gallen  </h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <li className="col-span-1 flex items-start gap-x-2 ">
                                <MapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Location :</span>
                                <span className=" text-sm text-gray-300">Saint Gallen, Switzerland</span>
                            </li>

                            <li className="col-span-1 flex  items-start gap-x-2">
                                <CalendarIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Date :</span>
                                <span className=" text-sm text-gray-300"> 20,21,22/03/2024 </span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <BuildingOffice2Icon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Institution :</span>
                                <span className=" text-sm text-gray-300">Start Hack</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <AcademicCapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Skills:</span>
                                <span className=" text-sm text-gray-300">Retrieval augmented generation (RAG), Chat Bot, Python, React</span>
                            </li>

                        </ul>

                    </div>

                </div>
            </Section >

            <Section className="bg-neutral-100" sectionId="resume" >

                <div className="flex flex-col divide-y-2 divide-neutral-300">
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Introduction</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <span> Facing the hundreds of daily calls of the office of Saint Gallen, most of which sought basic information or required redirection.</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">Participating in the Start Summit Hackathon 2024, we, a team of four, developed a realistic human voice chatbot for the canton of St. Gallen. Utilizing the data provided by the canton and from their website, we aimed to address the challenge they faced with hundreds of daily calls, most of which sought basic information or required redirection. Our solution, crafted over the three days, was designed to autonomously answer client inquiries, or ensuring accurate redirection for more specific questions. </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Visual </h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <video width="600" height="500" controls>
                                <source src='bot.mp4' type="video/mp4" />
                                Votre navigateur ne supporte pas la balise vidéo.
                            </video>

                            <span>Voice chatBot based on the data of Saint Gallen </span>
                        </div>

                    </div>

                </div>
            </Section>
        </div >
    );
}

export default NouvellePage;
