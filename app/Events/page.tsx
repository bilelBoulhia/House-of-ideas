'use client'
import React, {Suspense, useEffect, useState} from "react";
import {motion} from "framer-motion";



import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {shadowVariants} from "@/utils/types";
import Skeleton from "@/components/ui/Skeleton";

import {Tables} from "@/utils/DatabaseTypes";
import {fetch} from "@/app/lib/supabase/client-api";
import {useRouter} from "next/navigation";
function PageSkeleton() {
    return (

            <Skeleton className=' grid-cols-1   w-full '>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="min-w-[92vw] mb-[7rem]  min-h-[calc(90vh] mx-auto">
                        {' '}
                        <div className="space-y-4">

                            <div className="h-8 md:h-10 w-1/2 bg-gray-200 rounded-md dark:bg-gray-700  animate-pulse"/>


                            <div
                                className="w-full aspect-[20/15] extra-large-tablet:aspect-[8/3] rounded-xl overflow-hidden">
                                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"/>
                            </div>
                        </div>
                    </div>
                ))}
            </Skeleton>

    )
}

const PageContent = ({data}: { data: Tables<'events'>[] }) => {


    const router = useRouter();
    const handleRouterClick = (eventid: number) => {
        router.push(`/Events/${eventid}`);
    };

    return (
        <>
            <div className='grid grid-cols-1 gap-12'>

                {data.map((event, i) => (
                    <div onClick={() => handleRouterClick(event.eventid)} key={i}>

                        <motion.div
                            style={{zIndex: -4}}

                            initial={{x: -3}}
                            whileInView={{x: 0}}
                            transition={{duration: 0.3, ease: 'easeInOut'}}
                        className=" z-1 max-w-3xl">
                        <div className="max-w-3xl hover:cursor-default mx-auto pl-2 overflow-hidden">

                            <motion.h1
                                whileHover={{x: 4}}
                                className="text-2xl p-1  md:text-3xl font-extrabold text-left tracking-tight bg-clip-text text-transparent bg-black  dark:bg-white ">
                                {event.eventname}
                            </motion.h1>

                        </div>
                    </motion.div>

                    <motion.div

                        className="w-full  aspect-[20/15] extra-large-tablet:aspect-[8/3]  rounded-xl overflow-hidden"
                        initial={{x: -3}}
                        whileInView={{x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                    >
                        <motion.img

                            src={event.eventpic}
                            variants={shadowVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{scale: 1.02}}

                            className="rounded-xl relative h-full w-full object-cover"

                        />
                    </motion.div>

                </div>
            ))}

        </div>

    </>
    )

}


export default function Index() {

    const [data, setdata] = useState<Tables<'events'>[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getdata = async () => {
            try {
                setIsLoading(true);
                const WorkshopData: Tables<'events'>[] = await fetch("events", false, ['eventname,eventpic,eventid']);
                setdata(WorkshopData);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        getdata().catch(r => console.error(r));
    }, []);





    return (
        <div className='flex flex-col mt-[4rem] items-center justify-center p-5 gap-2'>

            <Suspense fallback={<PageSkeleton/>}>
                {isLoading ?

                    <PageSkeleton/>
                    :
                    <PageContent data={data}/>
                }
            </Suspense>
            <BackgroundBeams/>
        </div>
    )
}


