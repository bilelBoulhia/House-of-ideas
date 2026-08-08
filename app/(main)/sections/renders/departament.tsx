'use client'
import {AnimatePresence, m} from "framer-motion";
import React, {useEffect, useState} from "react";
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {LabelTag} from "@/components/LabelTag";



type departmentsType ={
    name:string
    description:string[]
}


const departments : departmentsType[] = [
    {
        name: 'Human Resources',
        description: [
            'Organization',
            'Recruitment',
            'Evaluation',
            'Conflict resolution',
            'Department orientation'


        ]
    },
    {
        name: 'Information Technology',
        description: [
            'Web development',
            'Database management',
            'Research and developement',
            'Email marketing'

        ]
    },
      {
        name: 'External Relations',
        description: [
            'Contacting trainers / hosts',
            'Contacting sponsors',
            'Opportunities scouting',
            'Commercial service'

        ]
    },
    {
        name: 'Internal Activities',
        description: [
            'Club-bounding activities',
            'Recruitments',
            'Internship facilitation for partners',

        ]
    },
    {
        name: 'Secretariat Department',
        description: [
            'making minutes',
            'creating reports',
            'Administrative representaion',
            'Electronic journal'

        ]
    },

    {
        name: 'Marketing Department',
        description: [
            'Maintaining the club\'s image',
            'Promoting club’s services',
            'Promoting events ',
            'Design service'
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

            <AnimatedHeading size='default' sentence={["our","Departements"]} className='bg-[#f5f9f3] dark:bg-[#000409] '/>


            <div className="flex flex-col md:flex-row">

            <div className="relative   md:min-h-[30rem]   md:w-1/2   p-12 flex items-center justify-center overflow-hidden">
                {/*<div style={{zIndex:-1}} className='absolute inset-0   h-1/4'></div>*/}

                <AnimatePresence mode="wait">
                    <m.h2

                        key={departments[c].name}
                        initial={{x: -150}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{duration: 0.6, ease: "easeInOut"}}
                        className="iphone5:text-5xl  medium-phone:text-6xl  font-bold dark:text-white text-center relative z-10"
                        style={{
                            zIndex:-2,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                        }}
                    >
                        {departments[c].name}
                    </m.h2>
                </AnimatePresence>
                </div>

                <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"/>
                <div className="relative md:w-1/2 p-12 flex items-center  justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <m.ul
                            key={c}
                            className="space-y-4 min-w-[320px] p-1  max-w-[350px]  relative z-10"
                        >

                            {departments[c].description.map((item, index) => (





                                    <m.li
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


                                        {(item === 'Design service' || item === 'Commercial service' || item === 'Internship facilitation') && <LabelTag Label='New'/>}
                                        <span className="medium-phone:text-lg text-gray-100    dark:text-gray-800">{item}</span>
                                    </m.li>


                            ))}
                        </m.ul>
                    </AnimatePresence>
                </div>
            </div>


        </div>
    )
}


