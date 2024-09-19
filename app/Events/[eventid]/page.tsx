'use client'
import bg1 from '@/app/assets/events images/bg3.png'
import React, {useEffect, useState} from "react";
import {shadowVariants} from "@/app/(main)/sections/Events";
import {useMediaQuery} from 'usehooks-ts'
import { motion } from "framer-motion";
import {Calendar, Clock, Location, Sponsorlogo} from "@/components/ui/Icons";
import {Tag} from "@/components/ui/Tag";




export default function Index() {

    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const [hasMounted, setHasMounted] = useState(false)
    const animationVariants = {
        hidden: {x: isDesktop ? "-100%" : 0,y: isDesktop ? 0 : '-100%'},
        visible: {x: 0,y:0},
    }
    useEffect(() => {
        setHasMounted(true)
    }, [])



    return(
        <div className='flex flex-col mt-[5rem] p-2 justify-center text-center gap-2'>


            <div className='flex flex-col  lg:flex-row  justify-center  gap-3'>
                <motion.div>
                    <motion.img
                        src={bg1.src}
                        variants={shadowVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="rounded-xl min-w-full z-3 max-h-[70vh] object-cover  flex[0_0_100%] "/>

                </motion.div>

                <motion.div
                    style={{zIndex: -1}}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
                    variants={animationVariants}
                    transition={{duration: 0.8, ease: 'easeInOut'}}
                    className=" z-1">


                    <div className="max-w-4xl mx-auto pl-2 overflow-hidden">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 sm:mb-6 md:mb-8">
                            E-Commerce Innovation Expo 2024: Shaping the Future of Online Retail
                        </h1>

                        <section className="text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter mb-2 sm:mb-3 md:mb-4 text-gray-200">
                                About the Event
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                Join us for the premier event in the e-commerce industry! The E-Commerce Innovation Expo
                                2024 brings together industry leaders, innovators, and decision-makers to explore the
                                latest trends, technologies, and strategies shaping the future of online retail.
                            </p>
                        </section>
                    </div>
                </motion.div>

            </div>
            <div className='p-6 mt-6'>
                <section className="mb-12 text-left">
                    <h2 className="text-3xl font-bold tracking-tighter  mb-6 text-gray-200">Event Details</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Tag className='bg-[#000811]'>
                            <Calendar className="w-8 h-8 text-purple-400"/>
                            <div>
                                <p className="text-sm text-gray-400">Date</p>
                                <p className="text-lg font-medium">September 12-14, 2024</p>
                            </div>
                        </Tag>
                        <Tag className='bg-[#000811]'>
                            <Location className="w-8 h-8 text-blue-400"/>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-lg font-medium">Tech Central Convention Center, Silicon
                                    Valley</p>
                            </div>
                        </Tag>
                        <Tag className='bg-[#000811]'>
                            <Clock className="w-8 h-8 text-blue-400"/>
                            <div>
                                <p className="text-sm text-gray-400">Time</p>
                                <p className="text-lg font-medium">9:00 AM - 6:00 PM daily</p>
                            </div>
                        </Tag>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Sponsors</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i}
                                     className="flex items-center justify-center p-4  rounded-lg shadow-md">

                                    <a className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                       href="https://www.agiledrop.com/laravel?utm_source=filament" target="_blank"
                                       title="Agiledrop">
                                        <Sponsorlogo/>
                                    </a>

                                </div>
                                ))}
                        </div>
                    </div>
                </section>


            </div>
        </div>
)
}