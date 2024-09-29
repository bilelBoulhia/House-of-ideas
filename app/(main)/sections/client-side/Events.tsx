'use client'
import Carousel from "@/components/ui/Carousel"

import { motion } from "framer-motion"
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {shadowVariants} from "@/utils/types";
import {Tables} from '@/utils/DatabaseTypes'
import {useRouter} from "next/navigation";
import React from "react";





export default function Event({data}: {data: Tables<'events'>[]}) {

    console.log(data)
    const router = useRouter();
    const handleRouterClick = (eventid: number) => {
        router.push(`/Events/${eventid}`);
    };


    return (

        <div id='Events' className=" relative w-full flex mt-6  large-phone:mt-[6rem] items-center  flex-col gap-2">

            <div className=" flex flex-row  items-center text-center justify-center">
                <AnimatedHeading  sentence={["our","Events"]} className='bg-[#f4f5f3] dark:bg-[#000812]'/>
            </div>


            {data == undefined || null ? (
                <div
                    className="flex flex-col m-4 min-h-[40rem] items-center justify-center  p-8 bg-gradient-to-br from-blue-950 to-black/80 rounded-3xl shadow-lg"
                >

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                        Sorry, No Event at the Moment
                    </motion.h2>
                    <motion.div

                        className=" p-6 rounded-2xl shadow-md  max-w-md w-full"
                    >
                        <p className="text-lg mb-4">
                            We're working hard to bring you exciting new workshops
                        </p>
                        <div className="flex items-center justify-between text-sm ">
                            <span>Next check: Soon</span>
                            <span>Stay tuned!</span>
                        </div>
                    </motion.div>

                </div>
            ) : (

                <Carousel
                    useArrows={true}
                    className="w-full"
                    slideClassName="p-5  flex-[0_0_100%] "
                >
                    {data.map((event, index) => (
                        <motion.div
                            key={index}

                            onClick={() => handleRouterClick(event.eventid)}
                            className="w-full rounded-xl aspect-[16/9]   lg:aspect-[21/9] h-auto overflow-hidden"
                            initial="hidden"
                            whileHover={{scale: 1.01}}
                            transition={{duration: 0.25}}
                            whileInView="visible"
                            variants={shadowVariants}
                        >
                            <img
                                    src={event.eventpic}
                                    className="rounded-xl  relative h-full w-full object-cover"
                                    alt='Eventsimae'
                            />

                        </motion.div>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

