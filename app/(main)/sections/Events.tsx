'use client'

import Carousel from "@/components/ui/Carousel"
import bg1 from '@/app/assets/bg3.png'
import bg2 from '@/app/assets/bg2.png'
import bg3 from '@/app/assets/bg1.png'
import Image from "next/image"

import {FlipText} from "@/components/ui/FlipText";
import { motion } from "framer-motion"

const arr = [ bg1, bg2, bg3]


export default function Event() {
    return (

        <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-2">

            <motion.h2
                initial={{opacity:1,y:50}}
                whileInView={{opacity:1,y:0}}

                className="iphone5:text-2xl  medium-phone:text-3xl  large-phone:text-4xl uppercase  font-semibold text-center text-black dark:text-white font-sans tracking-tight">
                <FlipText>events</FlipText>
            </motion.h2>

            <Carousel>

                {arr.map((card, index) => (
                    <Image
                        src={card}
                        key={index}
                        alt={`Slid`}
                        priority
                        className="rounded-xl max-h-[70vh] object-cover mr-5 flex[0_0_100%]  min-w-full    shadow-[5px_5px_rgba(107,_33,_168,_0.4),_10px_10px_rgba(107,_33,_168,_0.3)] transition-all duration-500 ease-in-out"
                    />
                ))}
            </Carousel>
        </div>
    )
}