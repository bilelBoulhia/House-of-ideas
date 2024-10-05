'use client'
import Carousel from "@/components/ui/Carousel"

import { motion } from "framer-motion"
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {shadowVariants} from "@/utils/types";
import {Tables} from '@/utils/DatabaseTypes'
import {useRouter} from "next/navigation";
import React from "react";
import {NoData} from "@/components/ui/not-data";





export default function Event({data}: {data: Tables<'events'>[]}) {





    const router = useRouter();
    const handleRouterClick = (eventid: number) => {
        router.push(`/Events/${eventid}`);
    };


    return (

        <div id='Events' className=" relative w-full flex mt-6  large-phone:mt-[6rem] items-center  flex-col gap-2">

            <div className=" flex flex-row  items-center text-center justify-center">
                <AnimatedHeading  sentence={["our","Events"]} className='bg-[#f4f5f3] dark:bg-[#000812]'/>
            </div>


            {data.length <= 0  ? (

                <NoData sentence='no events at the moment'/>
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

