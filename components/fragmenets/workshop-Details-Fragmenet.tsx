import {motion} from "framer-motion";
import Image from "next/image";
import c1 from "@/assets/workshop images/image (1).png";
import React from "react";

export const WorkshopDetails = ()=>{
    return (
        <div className='flex flex-col h-full w-full items-center justify-center'>
            <div className='flex flex-col h-full w-full items-center justify-center'>
                <h2 className='text-4xl tracking-tight font-bold uppercase text-center'>Learn Web dev</h2>
                <h2 className='text-xl max-w-xl tracking-tight font-medium p-3 text-center'>Master the art of web development
                Master the art of web development with our comprehensive course covering HTML, CSS,
                JavaScript, and modern frameworks, and a strong grasp on the best practices involving design, implementation    </h2>
            </div>
            <div className='flex  flex-row h-full w-full items-center justify-center'>
                <div className="flex flex-col lg:flex-row">

                    <div className="relative lg:w-1/2   p-12 flex items-center justify-center overflow-hidden">
                        <motion.h2
                            className="iphone5:text-5xl  medium-phone:text-6xl  font-bold dark:text-white text-center relative z-10"
                        >
                            With mrs
                            <h1
                            className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>Radouini
                            fatima
                            </h1>
                        </motion.h2>

                    </div>
                    <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"/>
                    <div className="relative lg:w-1/2 p-12 flex items-center  justify-center overflow-hidden">
                        <Image src={c1} alt='s'/>
                    </div>
                </div>

            </div>
        </div>
    )
}