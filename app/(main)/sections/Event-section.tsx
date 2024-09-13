'use client'

import Carousel from "@/components/ui/Carousel"
import bg1 from '@/app/assets/bg1.png'
import Image from "next/image"

const arr = [bg1, bg1, bg1, bg1]

export default function Event() {
    return (

            <Carousel >
                {arr.map((card, index) => (
                    <Image
                        src={card}
                        key={index}
                        alt={`Slid`}
                        className="rounded-xl max-h-[70vh] object-cover mr-5 flex[0_0_100%]  min-w-full  bg-pink-300  shadow-[5px_5px_rgba(128,_0,_128,_0.4),_10px_10px_rgba(128,_0,_128,_0.3)] transition-all duration-500 ease-in-out"
                    />
                ))}
            </Carousel>

    )
}