'use client'



import { motion } from "framer-motion"
import {InfiniteMovingCards} from "@/components/ui/infinite-carousel";

const testimonials = [
    {
        quote:
            " thoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote: "im gay",
       name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

export default function Testimonials() {
    return (

        <div className="relative  flex w-full items-center mt-16 overflow-hidden flex-col gap-2">

            <div className=" flex flex-row  items-center text-center justify-center">


                <div className='flex-row flex items-end bg-[#f4f5f5] dark:bg-[#00060c]  w-full justify-end'>

                    <motion.h2
                        initial={{opacity: 1, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                        className=" iphone5:text-2xl z-12  medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center text-black dark:text-white font-sans tracking-tight"

                    >
                        Our
                    </motion.h2>
                    <div style={{zIndex: -1}}
                         className="absolute top-0 left-0 h-11 w-[41vw] bg-blend-darken  bg-[#f4f5f5] dark:bg-[#00060c]  "></div>

                </div>


                <div className='flex-row flex items-start w-full   justify-start'>
                    <motion.span
                        style={{zIndex: -3}}
                        viewport={{once: true}}
                        initial={{opacity: 1, x: -200}}
                        whileInView={{opacity: 1, x: 5}}
                        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.6}}
                        className='iphone5:text-2xl   medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-sans tracking-tight'

                    >Testimonials
                    </motion.span>
                </div>


            </div>

            <div className=" mt-12 rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>

        </div>
    )
}

/*
*
*
* */