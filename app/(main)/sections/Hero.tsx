'use client'

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/BackgroundBeams"
import {TypewriterEffect} from "@/components/ui/TyperWriter";

export default function Hero() {

    const sentence = [
        {
            text: "cat",
        },
        {
            text: "welcome",
        },
        {
            text: "message.txt",
        }

    ];



    return (
        <div>
            <BackgroundBeams className='max-h-screen'/>
            <div className='flex flex-col gap-6 h-full w-full p-5'>
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}

                >
                    <h2 className="mt-[6rem] slighty-large-phone:mt-[0rem]  iphone5:text-4xl medium-phone:text-5xl slighty-large-phone:text-5xl large-phone:text-7xl tablet:text-7xl md:text-8xl text-8xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                        Welcome to<br/>
                        <div style={{zIndex: -1}}
                             className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div
                                className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                <span>House of Ideas</span>
                            </div>
                        </div>
                    </h2>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}
                    className="text-center  font-mono text-purple-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mt-6 bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg shadow-[0_0_15px_rgba(128,0,128,0.1)] border border-purple-900"
                    style={{
                        boxShadow: 'inset 0 1px 3px 0 rgba(128,0,128,0.1), 0 0 15px rgba(128,0,128,0.1)',
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(64,0,64,0.15), rgba(64,0,64,0.15) 1px, transparent 1px, transparent 2px)'
                    }}
                >
                    <div className="flex items-center justify-between mb-4 border-b border-purple-800 pb-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-purple-400 text-sm">bash</div>
                    </div>
                    <div className="mb-2 text-left flex items-center">
                        <span className="text-purple-400 whitespace-nowrap">user@houseofideas:~$&nbsp;</span>
                        <TypewriterEffect className='text-purple-400' words={sentence}/>
                    </div>
                    <p className="whitespace-pre-line text-left">
                        Welcome to the official website of House of Ideas,
                        where passion meets discovery. As a leading
                        scientific club at Economic University, we are
                        dedicated to fostering curiosity, collaboration,
                        and innovation in the field of science and economics.
                    </p>
                    <p className="mt-2 text-left">
                        <span className="text-purple-400">user@houseofideas:~$</span> <span
                        className="animate-pulse">█</span>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}