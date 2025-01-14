// pages/NouvellePage.js
import 'swiper/css'; // importe le style de base de Swiper
import 'swiper/css/navigation'; // importe le style pour la navigation

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
            <Section className="bg-neutral-800" sectionId='about'>
                <div className="flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm">



                    <div className={classNames('col-span-1 flex flex-col gap-y-6 text-center items-center ', { 'md:col-span-3': !!profileImageSrc })}>
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold text-white items-center text-center">AI for Education</h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <li className="col-span-1 flex items-start gap-x-2 ">
                                <MapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Location :</span>
                                <span className=" text-sm text-gray-300">Online</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <CalendarIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Date :</span>
                                <span className=" text-sm text-gray-300">01/2024 - now  </span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <BuildingOffice2Icon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Institution :</span>
                                <span className=" text-sm text-gray-300">Own project</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <AcademicCapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Skills:</span>
                                <span className=" text-sm text-gray-300">Startup, LLM, RAG, Education</span>
                            </li>

                        </ul>

                    </div>

                </div>
            </Section >

            <Section className="bg-neutral-100" sectionId='resume' >

                <div className="flex flex-col divide-y-2 divide-neutral-300">
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Introduction</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <span> As part of the TalentKick incubator, I built a team to develop an AI-powered education project </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">Our solution uses AI to improve education by guiding students toward understanding exercises rather than providing direct answers. Through targeted hints and structured support, it enables students to grasp concepts and solve problems independently, fostering true understanding through AI-driven learning. This innovative approach earned us the CHF 5,000 prize from the TalentKick incubator. (https://www.talentkick.ch) </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Links</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <span>You can check the website of the project <a href="https://edu-vision.netlify.app" style={{ color: 'blue', textDecoration: 'none' }}>here</a> </span>
                        </div>
                    </div>



                </div>
            </Section>
        </div >
    );
}

export default NouvellePage;
