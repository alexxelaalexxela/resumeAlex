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
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Section from '../components/Layout/Section';
import { aboutData } from '../data/data';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'


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
                            <h2 className="text-3xl font-bold text-white items-center text-center">Robotic hand project</h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <li className="col-span-1 flex items-start gap-x-2 ">
                                <MapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Location :</span>
                                <span className=" text-sm text-gray-300">Zurich, Switzerland</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <CalendarIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Date :</span>
                                <span className=" text-sm text-gray-300">09/2023 - 01/2024  </span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <BuildingOffice2Icon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Institution :</span>
                                <span className=" text-sm text-gray-300">ETHZ</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <AcademicCapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Skills:</span>
                                <span className=" text-sm text-gray-300">Mechanical design/printing, Reinforcement Learning and Simulation, Python</span>
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
                            <span>The objective was to build a robotic hand from scratch with a team of 5 with a low budjet. The hand should be able to rotate a ball and do some basic operation. </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">For a project at ETHZ, I develop with my team of 5 people an articulated robotic hand from scratch. Our goal is to create a functional robotic hand capable of grasping and manipulating objects within a budget of 250CHF. For this project, I apply my skills in robot design and simulation, robot fabrication, reinforcement learning, control and rigorous testing. </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Links</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <span>You can check the website of the project <a href="https://hustwireless.github.io/snaphand.github.io/" style={{ color: 'blue', textDecoration: 'none' }}>here</a> </span>
                            <span>You can also see our paper about the hand <a href="./paperHand.pdf" style={{ color: 'blue', textDecoration: 'none' }}>here</a> </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Visual </h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>





                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <p>Videos and picture of the reiforcement learning, testing and evaluation of the hand</p>
                            <div><p> .</p></div>
                            <div className=" w-full columns-2 md:columns-3 lg:columns-4">
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <video width="300" height="500" controls>
                                            <source src='vid1.mp4' type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    </div>
                                </div>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <video width="300" height="500" controls>
                                            <source src='vid2.mp4' type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>

                                    </div>
                                </div>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <video width="300" height="500" controls>
                                            <source src='RL.mp4' type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    </div>
                                </div>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <video width="200" height="200" controls>
                                            <source src='Teleoperation.mp4' type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full columns-2 md:columns-3 lg:columns-4">



                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <Image alt="test" width="200" height="200" src={img2} />
                                    </div>
                                </div>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <Image alt="test" width="200" height="200" src={img3} />

                                    </div>
                                </div>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <Image alt="test" width="200" height="200" src={img1} />

                                    </div>
                                </div>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <Image alt="test" width="300" height="200" src={img4} />

                                    </div>
                                </div>
                            </div>




                        </div>


                    </div>


                </div>
            </Section>
        </div >
    );
}

export default NouvellePage;
