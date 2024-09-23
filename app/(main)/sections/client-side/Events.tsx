'use client'
import Carousel from "@/components/ui/Carousel"

import { motion } from "framer-motion"
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {shadowVariants} from "@/utils/types";
import {Tables} from '@/utils/DatabaseTypes'
import {useRouter} from "next/navigation";





export default function Event({data}: {data: Tables<'events'>[]}) {

    const router = useRouter();
    const handleRouterClick = (eventid: number) => {
        router.push(`/Events/${eventid}`);
    };


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
                {data.map((event, index) => (
                    <motion.div
                        key={index}
                        onClick={() => handleRouterClick(event.eventid)}
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
                            alt='Eventsimae'
                        />
                    </motion.div>
                ))}
            </Carousel>
        </div>
    )
}

