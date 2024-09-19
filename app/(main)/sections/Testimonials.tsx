'use client'

import img1 from '@/app/assets/diplomas images/image (2).png'
import img2 from '@/app/assets/diplomas images/image (3).png'
import img3 from '@/app/assets/diplomas images/image (4).png'


import {InfiniteMovingCards} from "@/components/ui/infinite-carousel";



import {CardStack, imgtype} from "@/components/ui/card-stack";
import {AnimatedHeading} from "@/components/ui/Section-Heading";


const images :imgtype[] = [{id:1, img:img2}, {id:2,img:img1} , {id:3,img:img3}]

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

    const sentence= ["our","testimonials"]
    return (

        <div className="relative  flex w-full items-center mt-16 overflow-hidden flex-col gap-2">


            <AnimatedHeading  sentence={sentence} className='bg-[#f7f9f9] dark:bg-[#000206]'/>
            <div
                className=" mt-12 rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className='m-12'>
                  <CardStack items={images}/>
            </div>



        </div>
    )
}

