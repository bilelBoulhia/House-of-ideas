'use client'
import Carousel from "@/components/ui/Carousel"
import bg1 from '@/assets/events images/bg3.png'
import bg2 from '@/assets/events images/bg2.png'
import bg3 from '@/assets/events images/bg1.png'
import {cache, useEffect, useState} from "react";
import { motion } from "framer-motion"
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {fetch} from "@/app/lib/supabase/client-api";
import {shadowVariants} from "@/utils/types";
import {Tables} from '@/utils/DatabaseTypes'
import {json} from "node:stream/consumers";

const arr = [ bg1, bg2, bg3]








export default   function Event() {

    const [events, setData] = useState<Tables<'events'>[]>([]);
    useEffect(() => {
        const getData = async () => {
            const eventpics = await fetch("events", false,["eventpic"]) as Tables<'events'>[];

            setData(eventpics);



        };
        getData();
    }, []);

    return (

        <div id='Events' className=" relative w-full flex   items-center  flex-col gap-2">

            <div className=" flex flex-row  items-center text-center justify-center">

                <AnimatedHeading  sentence={["our","Events"]} className='bg-[#f9f9f7] dark:bg-[#000811]'/>




            </div>


            <Carousel
                useArrows={true}
                className="w-full "
                slideClassName="p-5  flex-[0_0_100%]"
            >
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        className="w-full  aspect-[20/15] extra-large-tablet:aspect-[8/3]  rounded-xl overflow-hidden"
                        initial="hidden"
                        whileHover={{scale: 1.01}}
                        transition={{duration: 0.25}}
                        whileInView="visible"
                        variants={shadowVariants}
                    >
                        <img
                            src={event.eventpic}
                            className="rounded-xl relative h-full w-full object-cover"

                        />
                    </motion.div>
                ))}
            </Carousel>
        </div>
    )
}

/*
*  <motion.img
                        key={index}
                        src={event.eventpic}
                        initial="hidden"
                        whileHover={{scale: 1.01}}
                        transition={{duration: 0.25}}
                        whileInView="visible"
                        variants={shadowVariants}
                        className="rounded-xl  w-full object-cover"
                    />
* */