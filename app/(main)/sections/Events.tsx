'use client'

import Carousel from "@/components/ui/Carousel"
import bg1 from '@/app/assets/bg3.png'
import bg2 from '@/app/assets/bg2.png'
import bg3 from '@/app/assets/bg1.png'
import Image from "next/image"

import {FlipText} from "@/components/ui/FlipText";
import { motion } from "framer-motion"

const arr = [ bg1, bg2, bg3]

const shadowVariants = {
    hidden: {
        boxShadow: "0px 0px rgba(107, 33, 168, 0), 0px 0px rgba(107, 33, 168, 0)"
    },
    visible: {
        boxShadow: "5px 5px rgba(107, 33, 168, 0.4), 10px 10px rgba(107, 33, 168, 0.3)",
        transition: { duration: 1.5, ease: "easeInOut" }
    }
}
export default function Event() {
    return (

        <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-2">

            <motion.h2

                initial={{opacity: 0, x: 0}}
                whileInView={{opacity: 1, x: -60}}
                transition={{duration: 0.5, ease: "easeInOut"}}

                className=" iphone5:text-2xl  medium-phone:text-3xl  large-phone:text-4xl uppercase  font-semibold text-center text-black dark:text-white font-sans tracking-tight">
                <FlipText>events </FlipText>


                <motion.span
                    className='bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-600 via-violet-500 to-pink-900 absolute left-full'
                    initial={{opacity:0,x: '-100%'}}
                    whileInView={{opacity:1,x: 0}}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: 0.5
                    }}
                >
                    Excompo
                </motion.span>

            </motion.h2>

            <Carousel>
                {arr.map((card, index) => (


                    <motion.img
                        key={index}
                        src={card.src}
                        initial="hidden"
                        whileInView="visible"
                        variants={shadowVariants}

                        className="rounded-xl max-h-[70vh] object-cover mr-5 flex[0_0_100%] min-w-full"
                    />
                ))}
            </Carousel>
        </div>
    )
}