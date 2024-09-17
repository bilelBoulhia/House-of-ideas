'use client'

import Carousel from "@/components/ui/Carousel"
import bg1 from '@/app/assets/events images/bg3.png'
import bg2 from '@/app/assets/events images/bg2.png'
import bg3 from '../../assets/events images/bg1.png'

import { motion } from "framer-motion"


const arr = [ bg1, bg2, bg3]

const shadowVariants = {
    hidden: {
        boxShadow: "0px 0px rgba(107, 33, 168, 0), 0px 0px rgba(107, 33, 168, 0)"
    },
    visible: {
        boxShadow: "5px 5px rgba(107, 33, 168, 0.4), 10px 10px rgba(107, 33, 168, 0.3)",
        transition: { duration: 1, ease: "easeInOut",delay:1 }
    }
}
//  <AnimatedHeading sentence={["our","events"]} className='bg-[#f9f9f7] dark:bg-[#000811]' />
export default function Event() {
    return (

        <div className="relative flex  items-center  overflow-hidden flex-col gap-2">

            <div className=" flex flex-row  items-center text-center justify-center">


                <div className='flex-row flex items-end   w-full justify-end'>

                    <motion.h2
                        initial={{opacity: 1, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                        className=" iphone5:text-2xl z-12  medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center text-black dark:text-white font-sans tracking-tight"

                    >
                        our
                    </motion.h2>
                    <div style={{zIndex: -1}}
                         className="absolute top-0 left-0 h-11 w-[41vw] bg-[#f9f9f7] dark:bg-[#000811]  "></div>

                </div>


                <div className='flex-row flex items-start w-full   justify-start'>
                    <motion.span
                        style={{zIndex: -3}}
                        viewport={{once: true}}
                        initial={{opacity: 1, x: -280}}
                        whileInView={{opacity: 1, x: 5}}
                        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.6}}
                        className='iphone5:text-2xl   medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-sans tracking-tight'

                    >Events
                    </motion.span>
                </div>
            </div>



            <Carousel useArrows={true}>
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

/*
*
*
* */