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
import img1 from '../images/spot1.jpg'
import img2 from '../images/spot2.jpg'
import img3 from '../images/spot3.jpg'
import img4 from '../images/spot4.jpg'
import img6 from '../images/spot6.jpg'
import img7 from '../images/spot7.jpg'

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
                            <h2 className="text-3xl font-bold text-white items-center text-center">Anti-Poaching Technology Development</h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <li className="col-span-1 flex items-start gap-x-2 ">
                                <MapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Location :</span>
                                <span className=" text-sm text-gray-300">Dinokeng game reserve, South Africa</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <CalendarIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Date :</span>
                                <span className=" text-sm text-gray-300">09/2024 - 12/2024  </span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <BuildingOffice2Icon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Institution :</span>
                                <span className=" text-sm text-gray-300">SPOTS</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <AcademicCapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Skills:</span>
                                <span className=" text-sm text-gray-300">Computer Vision, Python, Mechanical design/printing, ROS2</span>
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
                            <span>I developed computer vision models for an autonomous patrol car to detect and respond to environmental elements effectively.  </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">During my internship at Dinokend Game Reserve, I designed and implemented computer vision models for an autonomous patrol car. These models were trained to detect humans, animals, and obstacles in video feeds, ensuring the vehicle could navigate safely and respond proactively to its environment. By raising alerts for unauthorized human presence and dynamically adjusting the car’s path, I integrated detected obstacles into the Model Predictive Control (MPC) system to enable real-time path updates. This enhancement ensured optimal navigation while maintaining the patrol’s safety and efficiency. </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Links</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <span>You can check the website of the project <a href="https://www.spots.org.za" style={{ color: 'blue', textDecoration: 'none' }}>here</a> </span>
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
                            <p>Picture of the project</p>
                            <div><p> .</p></div>

                            <div className=" w-full columns-2 md:columns-3 lg:columns-4">


                                <span style={{ marginTop: '10px' }}>.</span>
                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <Image alt="test" width="700" height="700" src={img6} />

                                    </div>
                                </div>
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


                                <div className="pb-6" >
                                    <div
                                        className={classNames(
                                            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                                        )}>
                                        <Image alt="test" width="300" height="200" src={img7} />

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
