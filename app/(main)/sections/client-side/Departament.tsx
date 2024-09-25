'use client'
import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import {AnimatedHeading} from "@/components/ui/Animated-heading";



type departmentsType ={
    name:string
    description:string[]
}


const departments : departmentsType[] = [
    {
        name: 'IT Department',
        description: [
            'Cutting-edge technology ',
            'Hands-on  experience',
            'Focus on cybersecurity',
            'Industry-aligned curriculum'
        ]
    },
    {
        name: 'Marketing Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis',
            'Integrated marketing '
        ]
    },
      {
        name: 'Polictics Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis ',
            'Integrated marketing '
        ]
    },
    {
        name: 'French Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis ',
            'Integrated marketing '
        ]
    },
    {
        name: 'Italian Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis ',
            'Integrated marketing '
        ]
    },
    {
        name: 'Idk Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis ',
            'Integrated marketing '
        ]
    },
    {
        name: 'Bilel Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis ',
            'Integrated marketing '
        ]
    },
    {
        name: 'Design Department',
        description: [
            'Strategic brand management',
            'Digital marketing expertise',
            'Consumer behavior analysis ',
            'Integrated marketing '
        ]
    },

]








export default function Departament() {

    const [c, setC] = useState(0)

    useEffect(() => {
        const time = setInterval(() => {
            setC((prev) => (prev + 1) % departments.length)
        }, 5000)

        return () => clearInterval(time)
    }, [])

    return (

        <div id="#about" className="relative  flex w-full items-center mt-16 overflow-hidden flex-col gap-2">

            <AnimatedHeading size='default' sentence={["our","Departements"]} className='bg-[#f5f9f3] dark:bg-[#00050a]'/>


            <div className="flex flex-col md:flex-row">

            <div className="relative   md:w-1/2   p-12 flex items-center justify-center overflow-hidden">
                <div
                    style={{zIndex:-3}}

                    className='absolute inset-0  bg-[#f5f9f3] dark:bg-[#00050a] h-1/4'></div>

                <AnimatePresence mode="wait">
                    <motion.h2

                        key={departments[c].name}
                        initial={{y: 150}}
                        animate={{y: 0}}
                        exit={{y: -190}}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        className="iphone5:text-5xl  medium-phone:text-6xl  font-bold dark:text-white text-center relative z-10"
                        style={{
                            zIndex:-4,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                        }}
                    >
                        {departments[c].name}
                    </motion.h2>
                </AnimatePresence>
                </div>
                <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"/>
                <div className="relative md:w-1/2 p-12 flex items-center  justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.ul

                            key={c}
                            //max-w-md
                            className="space-y-4 min-w-[310px]  max-w-[350px]  relative z-10"
                        >
                            {departments[c].description.map((item, index) => (
                                <motion.li
                                    key={`${c}-${index}`}
                                    initial={{x: 250, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -450, opacity: 0}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }}
                                    className="bg-black dark:bg-white  text-center  backdrop-blur-sm rounded-lg p-4 shadow-md"
                                >
                                    <span className="medium-phone:text-lg text-gray-100  dark:text-gray-800">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </AnimatePresence>
                </div>
            </div>


        </div>
    )
}


