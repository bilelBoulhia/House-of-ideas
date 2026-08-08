"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { m, AnimatePresence } from "framer-motion";

import { useState } from "react";
import {Tables} from "@/utils/DatabaseTypes";


export const FormationCarousel = ({
                                         formations,

                                     }: {
    formations: Tables<'formations'>[] ;

}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % formations.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + formations.length) % formations.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };



    return (
        <div className="max-w-full mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {formations.map((formation, index) => (
                                <m.div
                                    key={formation.formationpic}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,

                                    }}
                                    whileInView={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,

                                        zIndex: isActive(index)
                                            ? 10
                                            : formations.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    viewport={{once:true}}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,

                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <img
                                        src={formation.formationpic?.toString()}
                                        alt={formation.formationname}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </m.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-between flex-col py-4">
                    <m.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-2xl font-bold dark:text-white text-black">
                            {formations[active].formationname}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {formations[active].Location}
                        </p>
                        <m.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                            {formations[active].description}
                        </m.p>
                    </m.div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                        >
                            <IconArrowLeft
                                className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-translate-x-1 transition-transform duration-300"/>
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                        >
                            <IconArrowRight
                                className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:translate-x-1 transition-transform duration-300"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
