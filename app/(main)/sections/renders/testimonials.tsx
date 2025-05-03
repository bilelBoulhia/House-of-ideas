'use client'

import img1 from '@/assets/diplomas images/image (2).png'
import img2 from '@/assets/diplomas images/image (3).png'
import img4 from '@/assets/diplomas images/image (5).jpeg'
import img5 from '@/assets/diplomas images/image (6).jpeg'


import {InfiniteMovingCards} from "@/components/ui/infinite-carousel";
import {CardStack, imgtype} from "@/components/ui/card-stack";
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {Tables} from "@/utils/DatabaseTypes";
import React from "react";

import {ReviewForm} from "@/components/fragmenets/forms/review-form";

const images :imgtype[] = [{id:1 ,img:img4},{id:2, img:img2}, {id:3,img:img1} , {id:4,img:img5}]



export default function Testimonials({data}:{data:Tables<'reviews'>[]}) {
    const sentence= ["our","testimonials"]

    return (

        <div id='Reviews' className="relative  flex w-full items-center mt-16 overflow-hidden flex-col gap-2">


            <AnimatedHeading sentence={sentence} className='bg-[#f6faf4] dark:bg-[#000306]'/>
            <div className=" mt-12  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={data}
                    direction="right"
                    speed="slow"
                />
            </div>

            <ReviewForm/>

            <div>

                <div className='m-12'>
                    <CardStack items={images}/>
                </div>
            </div>


        </div>
    )
}

