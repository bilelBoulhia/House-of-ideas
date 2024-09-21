'use client'
import bg1 from '@/assets/events images/bg3.png'
import {shadowVariants} from "@/app/(main)/sections/Events";
import {useMediaQuery} from 'usehooks-ts'
import { motion } from "framer-motion";
import {Calendar, Clock, Location, NewHiIcon, Sponsorlogo} from "@/components/ui/Icons";
import {Tag} from "@/components/ui/Tag";
import g1 from '@/assets/guest images/president.png'
import LinesBackground from "@/components/ui/LinesBackground";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";

const occupations = ['Desginer','Hr manger','ceo of ssda']

export default function Index() {

    const isDesktop = useMediaQuery("(min-width: 1024px)")

    const animationVariants = {
        hidden: {x: isDesktop ? "-100%" : 0,y: isDesktop ? 0 : '-100%'},
        visible: {x: 0,y:0},
    }




    return(
        <div className='flex flex-col mt-[5rem] m-2 justify-center  text-center gap-2'>

            <BackgroundBeams />
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

                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
                    variants={animationVariants}
                    transition={{duration: 0.8, ease: 'easeInOut'}}
                    className="pt-4 pl-4 lg:pl-0 z-1">

                    <div className="max-w-4xl mx-auto pl-2 overflow-hidden">
                        <h1 className="text-4xl font-black  text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-900 mb-4 sm:mb-6 md:mb-8">
                            E-Commerce Innovation Expo 2024: Shaping the Future of Online Retail
                        </h1>

                        <section className="text-left">
                            <h2 className="text-3xl font-bold tracking-tighter  mb-6 ">
                                About the Event
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg  mb-4 sm:mb-5 md:mb-6 leading-relaxed">
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
                    <h2 className="text-3xl font-bold tracking-tighter  mb-6 ">Event Details</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Tag className='dark:bg-cyan-800 bg-[#A0DEFF] '>
                            <Calendar className="w-8 h-8 text-purple-400"/>
                            <div>
                                <p className="text-sm ">Date</p>
                                <p className="text-lg font-medium">September 12-14, 2024</p>
                            </div>
                        </Tag>
                        <Tag className='dark:bg-[#7469B6] bg-[#91DDCF] '>
                            <Location className="w-8 h-8 text-blue-400"/>
                            <div>
                                <p className="text-sm ">Location</p>
                                <p className="text-lg font-medium">Tech Central Convention Center</p>
                            </div>
                        </Tag>
                        <Tag className='dark:bg-[#F05A7E] bg-[#FFD0D0] '>
                            <Clock className="w-8 h-8 text-blue-400"/>
                            <div>
                                <p className="text-sm">Time</p>
                                <p className="text-lg font-medium">9:00 AM - 6:00 PM daily</p>
                            </div>
                        </Tag>
                    </div>
                </section>

                <section id='sponsors' className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Guests</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-center justify-center p-4  rounded-lg ">


                                    <div className="group relative min-h-[14rem] min-w-[10rem] slighty-large-phone:w-64 slighty-large-phone:h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            src={g1.src}
                                            alt="Profile background"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80"/>

                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                            <h1 className="text-white font-bold font-sans text-xl  md:text-2xl mb-2 tracking-tight">
                                                Iman Riham
                                            </h1>
                                            <div
                                                className="space-y-1 overflow-hidden max-h-0 transition-all duration-300 group-hover:max-h-24">
                                                {occupations.map((oc, i) => (
                                                    <p
                                                        key={i}
                                                        className="text-gray-300 text-sm font-medium truncate transform translate-y-4 transition-transform duration-300 delay-100 group-hover:translate-y-0"
                                                        style={{transitionDelay: `${i * 50}ms`}}
                                                    >
                                                        {oc}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4  rounded-full p-2 opacity-0 transform -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                          <NewHiIcon className='h-6 w-6 '/>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='sponsors' className="w-full py-12 md:py-24 lg:py-32">

                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Sponsors</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i}
                                     className="flex items-center justify-center p-4  ">

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