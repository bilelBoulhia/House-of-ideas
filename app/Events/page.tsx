'use client'
import React, {Suspense, useEffect, useState} from "react";
import {motion} from "framer-motion";



import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {shadowVariants} from "@/utils/types";


import {Tables} from "@/utils/DatabaseTypes";
import {fetch} from "@/app/lib/supabase/client-api";
import {useRouter} from "next/navigation";
import {Loading} from "@/app/Loading";
import {Loader} from "lucide-react";
import useSWR from "swr";
import {NoData} from "@/components/ui/not-data";


const PageContent = ({data}: { data: Tables<'events'>[] }) => {

    if (data.length === 0) {
        return (
            <NoData sentence='sorry , no workshops at the moment'/>
        )
    } else {

        const router = useRouter();
        const handleRouterClick = (eventid: number) => {
            router.push(`/Events/${eventid}`);
        };

        return (
            <>


                <div className='grid  z-10 grid-cols-1 lg:grid-cols-2 gap-10'>
                    {data.map((event, i) => (
                        <div onClick={() => handleRouterClick(event.eventid)} key={i}>

                            <motion.div
                                style={{zIndex: -4}}

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

                                className="w-full max-h-[50vh]  aspect-[16/9]   rounded-xl overflow-hidden"
                                variants={shadowVariants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{duration: 0.3, ease: 'easeInOut'}}
                            >
                                <motion.img
                                    src={event.eventpic}
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
}

const fetcher = async ()=>{
    const fetcheddata = await fetch("events", ['eventname,eventpic,eventid'], (q) => q.order('date', {ascending: false}));

    return fetcheddata as Tables<'events'>[] || [] ;

}

export default function Index() {

    const {data,isLoading} = useSWR<Tables<'events'>[]>('/events',fetcher);





    return (
        <div className='flex overflow-hidden flex-col mt-[4rem] items-center  p-5 gap-2'>

            <Suspense fallback={<Loading/>}>
                {isLoading ?
                    <Loading/>
                    :
                    <PageContent data={data || []}/>
                }
            </Suspense>
            <BackgroundBeams/>
        </div>
    )
}


