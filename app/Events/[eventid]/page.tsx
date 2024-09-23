'use client'

import { motion } from "framer-motion";
import {Calendar, Clock, Location, NewHiIcon} from "@/components/ui/Icons";
import {Tag} from "@/components/ui/Tag";

import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {shadowVariants} from "@/utils/types";
import {Tables} from "@/utils/DatabaseTypes";
import Skeleton from "@/components/ui/Skeleton";
import React, {Suspense, useEffect, useState} from "react";
import {fetch} from "@/app/lib/supabase/client-api";
import {notFound} from "next/navigation";






function PageSkeleton() {
    return (

        <Skeleton repeat={1} className="flex min-w-[90vw] animate-pulse flex-col p-4  m-2 justify-center text-center gap-2">

            <div className="flex flex-col mt-[5rem] lg:flex-row  justify-center gap-3">

                <div className="m-3 h-[50vh] rounded-xl  lg:h-[70vh] w-full lg:w-1/2 bg-white/10 backdrop-blur-sm "/>


                <div className="pt-0 lg:pt-[3rem] pl-4 lg:pl-0 w-full lg:w-1/2">
                    <div className="max-w-4xl mx-auto pl-2 overflow-hidden">
                        <div className="h-6 sm:h-8 w-3/4 bg-white/10 backdrop-blur-sm rounded mb-4"/>
                        <div className="h-4 sm:h-6 w-full bg-white/10 backdrop-blur-sm rounded mb-2"/>

                        <div className="h-3 sm:h-4 w-3/4 bg-white/10 backdrop-blur-sm rounded"/>
                    </div>
                </div>
            </div>

            <div className="p-6 mt-6">

                <div className="mb-12 text-left">
                    <div className="h-6 sm:h-8 w-1/3 bg-white/10 backdrop-blur-sm rounded mb-6"/>
                    <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
                        <div className="h-20 sm:h-24 bg-white/10 backdrop-blur-sm rounded"/>

                    </div>
                </div>


                <div className="w-full py-8 md:py-16 lg:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="h-8 sm:h-10 w-2/3 sm:w-1/3 bg-white/10 backdrop-blur-sm rounded"/>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-4 sm:gap-8 py-8 sm:py-12 px-4">
                            <div className="h-64 w-48 sm:h-80 sm:w-64 bg-white/10 backdrop-blur-sm rounded-2xl"/>

                        </div>
                    </div>
                </div>


                <div className="w-full py-8 md:py-16 lg:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="h-8 sm:h-10 w-2/3 sm:w-1/3 bg-white/10 backdrop-blur-sm rounded"/>
                        </div>
                        <div
                            className="max-w-7xl mx-auto flex flex-wrap justify-around gap-4 sm:gap-8 py-8 sm:py-12 px-4">

                                <div  className="h-12 w-24 sm:h-16 sm:w-32 bg-white/10 backdrop-blur-sm rounded"/>

                        </div>
                    </div>
                </div>
            </div>

        </Skeleton>

    )
}


const PageContent = ({data}: { data: [Tables<'events'>[], Tables<'guests'>[], Tables<'sponsors'>[]] }) => {

    if (data[0].length=== 0) {
        notFound();

    }
    return (
        <div className='flex flex-col mt-[5rem] m-2 justify-center   text-center gap-2'>

            <BackgroundBeams/>
            <div className='flex flex-col lg:flex-row  overflow-hidden justify-center  gap-3'>
                <motion.div className='m-3'>
                    <motion.img
                        src={data[0][0].eventpic}
                        variants={shadowVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="rounded-xl  min-w-full z-3 min-h-[25vh] object-cover  flex[0_0_100%] "/>

                </motion.div>

                <div

                    className="pt-0 lg:pt-[3rem] pl-4  z-[-2] lg:pl-0 z-1">

                    <div className="max-w-4xl mx-auto pl-2 overflow-hidden">
                        <h1 className="text-3xl medium-phone:text-4xl font-black  text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-900 mb-4 sm:mb-6 md:mb-8">
                            {data[0][0].eventname}
                        </h1>

                        <section className="text-left">
                            <h2 className="text-2xl medium-phone:text-3xl font-bold tracking-tighter  mb-6 ">
                                About the Event
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg  mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                {data[0][0].eventdescription}
                            </p>
                        </section>
                    </div>
                </div>

            </div>

            <div className='p-6 mt-6'>
                <section className="mb-12 text-left">
                    <h2 className="text-2xl medium-phone:text-3xl  font-bold tracking-tighter  mb-6 ">Event Details</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Tag className='dark:bg-cyan-800 bg-[#A0DEFF] '>
                            <Calendar className="w-8 h-8 text-purple-400"/>
                            <div>
                                <p className="text-sm ">Date</p>
                                <p className="text-lg font-medium">{data[0][0].eventdate}</p>
                            </div>
                        </Tag>
                        <Tag className='dark:bg-[#7469B6] bg-[#91DDCF] '>
                            <Location className="w-8 h-8 text-blue-400"/>
                            <div>
                                <p className="text-sm ">Location</p>
                                <p className="text-lg font-medium">{data[0][0].eventlocation}</p>
                            </div>
                        </Tag>
                        <Tag className='dark:bg-[#F05A7E] bg-[#FFD0D0] '>
                            <Clock className="w-8 h-8 text-blue-400"/>
                            <div>
                                <p className="text-sm">Time</p>
                                <p className="text-lg font-medium">{data[0][0].eventstarthour?.slice(0, 5)} - {data[0][0].eventendhour.slice(0, 5)}</p>
                            </div>
                        </Tag>
                    </div>
                </section>

                <section id='sponsors' className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Guests</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {data[1].map((_, i) => (
                                <div key={i} className="flex items-center justify-center p-4  rounded-lg ">


                                    <div className="group relative min-h-[14rem] min-w-[10rem] slighty-large-phone:w-64 slighty-large-phone:h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            src={data[1][0].guestpic}
                                            alt="Profile background"

                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80"/>

                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                            <h1 className="text-white font-bold font-sans text-xl  md:text-2xl mb-2 tracking-tight">
                                                {data[1][0].guestname}
                                            </h1>
                                            <div
                                                className="space-y-1 overflow-hidden max-h-0 transition-all duration-300 group-hover:max-h-24">
                                                {data[1][0].guestoccupation.map((oc, i) => (
                                                    <p
                                                        key={i}
                                                        className="text-gray-300 text-sm font-medium truncate transform translate-y-4 transition-transform duration-300 delay-100 group-hover:translate-y-0"
                                                        style={{transitionDelay: `${i * 50}ms`}}
                                                    >
                                                        {oc}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4  rounded-full p-2 opacity-0 transform -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                          <NewHiIcon className='h-6 w-6 '/>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='sponsors' className="w-full py-12 md:py-24 lg:py-32">

                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Sponsors</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {data[2].map((_, i) => (
                                <div key={i}
                                     className="flex items-center  justify-center p-4  ">

                                    <a className="flex items-center justify-center text-gray-400 hover:text-gray-200"
                                       href="https://www.agiledrop.com/laravel?utm_source=filament" target="_blank"
                                       title="Agiledrop">
                                        <img className='h-20 p-1 w-40 rounded-xl bg-gray-100' src={data[2][0].sponsorpic} alt='img'/>
                                    </a>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default function Index({params}: { params: { eventid: number } }) {





    const [eventdata, seteventdata] = useState<Tables<'events'>[]>([]);
    const [guestdata, setguestdata] = useState<Tables<'guests'>[]>([]);
    const [sponsordata, setsponsorsdata] = useState<Tables<'sponsors'>[]>([]);

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        const getdata = async () => {
            setIsLoading(true);
            try {
                const EventData: Tables<'events'>[] = await fetch("events", false, ['*'],(query) => query.limit(1).eq('eventid', params.eventid));

                const GuestsData: Tables<'guests'>[] = await fetch("guests", false, ['*'],query => query.eq('guestid',EventData[0].guest));
                const SponsorsData: Tables<'sponsors'>[] = await fetch("sponsors", false, ['*'], query => query.eq('sponsorid', EventData[0].sponsor));


                seteventdata(EventData);
                setguestdata(GuestsData);
                setsponsorsdata(SponsorsData);

            } catch (error) {
                console.error(error);
                notFound();
            } finally {
                setIsLoading(false);
            }
        };
        getdata().catch(r => console.error(r));
    }, []);


    return (
        <div>

            <Suspense fallback={<PageSkeleton/>}>

                {isLoading ?

                    <PageSkeleton/>
                    :
                    <PageContent data={[eventdata, guestdata, sponsordata]}/>

                }
            </Suspense>


        </div>
    )
}
