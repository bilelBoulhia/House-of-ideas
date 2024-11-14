'use client'
import {AnimatedHeading} from "@/components/ui/Animated-heading";

import React from "react";
import {
    Card,
    CardBadge, CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {Button} from "@/components/ui/button";
import {LabelTag} from "@/components/LabelTag";
import { m } from "framer-motion";



export  default function Formations() {
    return (

        <div id="#about" className="relative  flex w-full items-center mt-16 overflow-hidden flex-col gap-2">

            <AnimatedHeading size='default' sentence={["our", "Formations"]}
                             className='bg-[#f5f9f3] dark:bg-[#00050a]'/>

            <div className="relative text-center max-w-2xl w-full whitespace-nowrap overflow-hidden">
                <m.span
                    className="inline-block mx-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
                    initial={{opacity: 0, y: -10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once:true}}
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
                    viewport={{once:true}}
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
                    viewport={{once:true}}
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


            <div>

                <Card

                    transition={{delay: 0.7, ease: 'easeInOut'}}
                    className='max-w-[320px] bg-gradient-to-bl from-white via-white to-transparent  dark:bg-gradient-to-tl dark:from-black dark:via-gray-950 dark:to-black '
                >


                    <LabelTag Label='New'/>

                    <CardContent>

                        <CardUpperBody>
                            <CardTitle className='text-2xl  font-bold text-neutral-800 dark:text-white tracking-wide'>
                                Mix speaking
                            </CardTitle>
                            <CardDescription className='text-neutral-800 dark:text-neutral-200'
                            >
                                Join us to boost key soft skills like communication, teamwork, and leadership! Complete
                                this short form to let us know your goals and preferences, so we can shape a training
                                experience that meets your needs
                            </CardDescription>
                        </CardUpperBody>


                        <CardBottomBody>
                            <CardFooter>
                                <Button
                                    className='bg-violet-500 rounded-xl hover:bg-violet-600 dark:text-white  py-2 px-4'>Details</Button>

                                <CardBadge>Exclusive</CardBadge>
                            </CardFooter>
                        </CardBottomBody>


                    </CardContent>
                </Card>

            </div>


        </div>
    )

}