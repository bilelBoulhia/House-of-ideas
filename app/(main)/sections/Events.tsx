import Carousel from "@/components/ui/Carousel"
import bg1 from '@/assets/events images/bg3.png'
import bg2 from '@/assets/events images/bg2.png'
import bg3 from '@/assets/events images/bg1.png'

import { motion } from "framer-motion"
import {AnimatedHeading} from "@/components/ui/Animated-heading";


const arr = [ bg1, bg2, bg3]

export const shadowVariants = {
    hidden: {
        boxShadow: "0px 0px rgba(107, 33, 168, 0), 0px 0px rgba(107, 33, 168, 0)"
    },
    visible: {
        boxShadow: "5px 5px rgba(107, 33, 168, 0.4), 10px 10px rgba(107, 33, 168, 0.3)",
        transition: { duration: 0.8, ease: "easeInOut",delay:0.2 }
    }
}

export default function Event() {
    return (

        <div id='Events' className="relative flex  items-center  overflow-hidden flex-col gap-2">

            <div className=" flex flex-row  items-center text-center justify-center">

                <AnimatedHeading  sentence={["our","Events"]} className='bg-[#f9f9f7] dark:bg-[#000811]'/>

            </div>



            <Carousel useArrows={true}>
                {arr.map((card, index) => (
                    <motion.img
                        key={index}
                        src={card.src}
                        initial="hidden"
                        whileHover={{scale: 1.01}}

                        transition={{duration:0.25}}
                        whileInView="visible"
                        variants={shadowVariants}


                        className="rounded-xl max-h-[70vh] object-cover mr-5 flex[0_0_100%] min-w-full"
                    />
                ))}
            </Carousel>
        </div>
    )
}

