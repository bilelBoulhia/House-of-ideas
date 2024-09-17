'use client'
import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";



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

]








export default function Departament() {

    const [currentDept, setCurrentDept] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDept((prev) => (prev + 1) % departments.length)
        }, 5000) // Change department every 5 seconds

        return () => clearInterval(timer)
    }, [])

    return (

        <div className="relative  flex w-full items-center mt-16 overflow-hidden flex-col gap-2">


            <div className="flex flex-row items-center text-center justify-center">


                <div className='flex-row flex items-end bg-[#f4f5f5]  dark:bg-[#000305]  w-full justify-end'>

                    <motion.h2
                        initial={{opacity: 1, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                        className=" iphone5:text-xl z-12  medium-phone:text-3xl  large-phone:text-4xl uppercase  font-semibold text-center text-black dark:text-white font-sans tracking-tight"

                    >
                        OUR
                    </motion.h2>
                    <div style={{zIndex: -20}}
                         className="absolute top-0 left-0 h-11 w-[30vw] bg-[#f1f9f9]  dark:bg-[#000305]  "></div>

                </div>


                <div className='flex-row flex items-start w-full   justify-start'>
                    <motion.span
                        style={{zIndex: -21}}
                        viewport={{once: true}}
                        initial={{opacity: 1, x: -300}}
                        whileInView={{opacity: 1, x: 5}}
                        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.6}}
                        className='iphone5:text-xl   medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-sans tracking-tight'

                    >Departements
                    </motion.span>
                </div>
            </div>


            <div className="flex flex-col md:flex-row">

                <div className="relative  md:w-1/2   p-12 flex items-center justify-center overflow-hidden">
                    <div className='absolute inset-0 bg-[#000305] h-1/4'></div>  <AnimatePresence mode="wait">
                    <motion.h2
                        key={departments[currentDept].name}
                        initial={{y: 150}}
                        animate={{y: 0}}
                        exit={{y: -190}}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        className="iphone5:text-5xl medium-phone:text-6xl font-bold text-white text-center relative z-10"
                        style={{
                            zIndex:-1,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                        }}
                    >
                        {departments[currentDept].name}
                    </motion.h2>
                </AnimatePresence>
                </div>
                <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"/>
                <div className="relative md:w-1/2 p-12 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.ul
                            style={{zIndex:-1}}
                            key={currentDept}
                            className="space-y-4 w-full  max-w-md relative z-10"
                        >
                            {departments[currentDept].description.map((item, index) => (
                                <motion.li
                                    key={`${currentDept}-${index}`}
                                    initial={{x: 250, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -450, opacity: 0}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }}
                                    className="bg-white  backdrop-blur-sm rounded-lg p-4 shadow-md"
                                >
                                    <span className="medium-phone:text-lg text-gray-800">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </AnimatePresence>
                </div>
            </div>


        </div>
    )
}


