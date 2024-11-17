'use client'


import React from "react";

import { m } from "framer-motion";

import {Tables} from "@/utils/DatabaseTypes";
import {NoData} from "@/components/ui/not-data";

import {FormationCarousel} from "@/components/FormationCarousel";




export  default function Formations({data}:{data:Tables<'formations'>[]}) {



    return (

        <div id="Formations" className="relative  flex w-full  items-center mt-16 overflow-hidden flex-col gap-2">
            <div className="relative text-center max-w-2xl w-full whitespace-nowrap overflow-hidden">
                <m.span
                    className="inline-block mx-1 "
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4
                    }}
                >
                    some of our
                </m.span>
                <m.span
                    className="inline-block mx-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                    initial={{opacity: 0, y: -10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.7
                    }}
                >
                    Exclusive Formations
                </m.span>

                <m.span
                    className="inline-block mx-1 "
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4
                    }}
                >
                    only for
                </m.span>

                <m.span
                    className="inline-block mx-1  font-bold"
                    initial={{opacity: 0, x: 10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.6
                    }}
                >
                    HI Members
                </m.span>
            </div>

            {data.length <= 0  ? (
                <NoData sentence='no formation at the moment'/>

            ) : (


                <FormationCarousel formations={data}/>

                )}
        </div>
    )

}


