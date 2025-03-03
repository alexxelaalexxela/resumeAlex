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

            <Section className="bg-neutral-800" sectionId='about'>
                <div className="flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm">



                    <div className={classNames('col-span-1 flex flex-col gap-y-6 text-center items-center ', { 'md:col-span-3': !!profileImageSrc })}>
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold text-white items-center text-center">Computer vision project and deep learning project </h2>
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
                                <span className=" text-sm text-gray-300">09/2023 - 06/2024 </span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <BuildingOffice2Icon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Institution :</span>
                                <span className=" text-sm text-gray-300">ETHZ</span>
                            </li>
                            <li className="col-span-1 flex  items-start gap-x-2">
                                <AcademicCapIcon className="h-5 w-5 text-white" />
                                <span className="text-sm font-bold text-white">Skills :</span>
                                <span className=" text-sm text-gray-300">Deep Learning, Computer vision, Pytorch</span>
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
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Summary</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col md:col-span-3">
                            <div>
                                In a master's course at ETH Zurich, I executed several computer vision projects, including crafting a CNN model for : <strong>image recognition</strong>, <strong>segmentation</strong> ,  <strong>clustering</strong>, and  <strong>object tracking</strong>.
                            </div>
                            <div>Additionally, for others courses, I developed various deep learning models for  <strong>music genre classification</strong>,  <strong>graph neural networks</strong>, or  <strong>natural language processing</strong>.

                            </div>
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
                            <video width="600" height="500" controls>
                                <source src='track.mp4' type="video/mp4" />
                                Votre navigateur ne supporte pas la balise vidéo.
                            </video>

                            <span style={{ marginTop: '10px' }}>Example of tracking a hand with obstacle </span>



                        </div>



                    </div>



                </div>
            </Section>
        </div >
    );
}

export default NouvellePage;
