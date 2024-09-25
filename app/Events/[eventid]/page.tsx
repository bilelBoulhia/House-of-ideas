'use client'

import { motion } from "framer-motion";
import {Calendar, Clock, Location, NewHiIcon} from "@/components/ui/Icons";
import {Tag} from "@/components/ui/Tag";

import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {shadowVariants} from "@/utils/types";
import {Tables} from "@/utils/DatabaseTypes";

import React, {Suspense, useEffect, useRef, useState} from "react";
import {fetch, insert} from "@/app/lib/supabase/client-api";
import {notFound} from "next/navigation";
import {Loading} from "@/app/Loading";
import { Button } from "@/components/ui/button";
import {EventSubscribeForm, SubscribeFormRef} from "@/components/fragmenets/forms/event subscribe form";
import {Modal, ModalBody, ModalBodyRef, ModalContent, ModalTrigger} from "@/components/ui/Modal";

import Toast from "@/components/ui/toast";
import Stepper from "@/components/ui/Stepper";
import InstagramLink from "@/components/instagram-link";
import {PersonStanding} from "lucide-react";








const PageContent = ({eventdata,guestdata,sponsordata}: { eventdata: Tables<'events'>[], guestdata: Tables<'guests'>[], sponsordata:  Tables<'sponsors'>[] }) => {

    if ( eventdata.length === 0 ) {
        notFound();
    }
    const formRef = useRef<SubscribeFormRef>(null);
    const modalRef = useRef<ModalBodyRef>(null);
    const [showToast, setShowToast] = useState(false);
    const handleFormSubmit = (data: Tables<'eventapplicants'>) => {
        const insertdata = async (data: Tables<'eventapplicants'>) => {
            try {
                const issuccess = await insert<Tables<'eventapplicants'>>('eventapplicants', data).catch(r => console.error(r));
                if (issuccess) {
                    modalRef.current?.closeModal();
                    setShowToast(true);

                }

            } catch (error) {
                console.error(error);
            }
        };

        insertdata(data).catch(r => console.error(r));
    };
    const handleCloseToast = () => {
        setShowToast(false);
    };
    const pages = (selectedworkshop: Tables<'events'> | null) => [
        <div key="2" className="space-y-2">
            <EventSubscribeForm
                ref={formRef}
                eventid={selectedworkshop?.eventid || 0}
                onSubmit={handleFormSubmit}
            />
        </div>,

    ]
    const handleStepperFinish = () => {
        formRef.current?.submitForm();
    };

    console.log(eventdata)


    return (

        <div >

            <div className='flex flex-col mt-[5rem] m-2 justify-center  gap-2'>
                <BackgroundBeams/>

                {eventdata.map((event) => (

                    <div className="flex flex-col z-10    lg:flex-row ">
                        <div className="lg:w-1/2    flex  justify-center">
                            <motion.div
                                variants={shadowVariants}
                                initial="hidden"
                                whileInView="visible"

                                className="w-full h-full  max-h-[400px] rounded-xl overflow-hidden">
                                <img
                                    src={event.eventpic}
                                    alt='Event image'
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 p-4 overflow-y-auto">
                            <div className="max-w-2xl p-4 ">

                                <h1 className="text-3xl sm:text-4xl font-black text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-900 mb-4 sm:mb-6">
                                    {event.eventname}
                                </h1>

                                <section className="text-left">

                                    <div className='w-full flex-row items-start flex large-phone:flex-row mb-4 sm:mb-6 gap-4 justify-start '>
                                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter ">
                                            About 
                                        </h2>
                                        <InstagramLink href={event.instagramlink}/>
                                    </div>


                                    <p className="text-md sm:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
                                        {event.eventdescription}
                                    </p>
                                </section>

                            </div>
                        </div>
                        <pre>

                   </pre>

                    </div>


                ))}


                <div className='p-6 z-10   mt-2'>
                    <Modal>
                        <ModalTrigger asChild>
                            <Button
                                disabled={!eventdata[0].isavailable}
                                className='bg-violet-500 text-md medium-phone:text-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)] rounded-xl hover:bg-violet-600 dark:text-white  py-8  px-10'>
                                {eventdata[0].isavailable ? 'Subscribe to the event' : 'the event has passed !'}

                            </Button>
                        </ModalTrigger>
                        <ModalBody ref={modalRef}>

                            <ModalContent>
                                <div>
                                    <Stepper
                                        finishSentnce='subscribe'
                                        pages={pages(eventdata[0])}
                                        onFinish={handleStepperFinish}
                                    />

                                </div>
                            </ModalContent>
                        </ModalBody>
                    </Modal>
                </div>


                <div className='p-6 z-10   mt-6'>

                    {eventdata.map((event) => (
                        <section className="mb-12 text-left">

                        <h2 className="text-2xl medium-phone:text-3xl  font-bold tracking-tighter  mb-6 ">Event
                            Details</h2>

                        <div className="grid gap-8 md:grid-cols-2">

                            <Tag className='dark:bg-cyan-800 bg-[#A0DEFF] '>
                                <Calendar className="w-8 h-8 text-purple-400"/>
                                <div>
                                    <p className="text-sm ">Date</p>
                                    <p className="text-lg font-medium">{event.date}</p>
                                </div>
                            </Tag>
                            <Tag className='dark:bg-[#7469B6] bg-[#91DDCF] '>
                                <Location className="w-8 h-8 text-blue-400"/>
                                <div>
                                    <p className="text-sm ">Location</p>
                                    <p className="text-lg font-medium">{event.eventlocation}</p>
                                </div>
                            </Tag>
                            <Tag className='dark:bg-[#F05A7E] bg-[#FFD0D0] '>
                                <Clock className="w-8 h-8 text-blue-400"/>
                                <div>
                                    <p className="text-sm">Time</p>
                                    <p className="text-lg font-medium">{event.eventstarthour?.slice(0, 5)} - {event.eventendhour.slice(0, 5)}</p>
                            </div>
                        </Tag>

                    </div>
                </section>
                    ))}


                    {eventdata.map((event) => (
                        !event.isavailable && (
                            <section className="mb-12 text-left" >
                                <h2 className="text-2xl medium-phone:text-3xl font-bold tracking-tighter mb-6">
                                    Event Overview
                                </h2>

                                <div className="grid gap-8 md:grid-cols-2">
                                    <Tag className="dark:bg-slate-700 bg-[#A0DEFF]">
                                        <PersonStanding className="w-8 h-8 text-purple-400"/>
                                        <div>
                                            <p className="text-sm">event attendees</p>
                                            <p className="text-lg font-medium">
                                                {event.visitorsnum === null ?  'no data' : event.visitorsnum }
                                            </p>
                                        </div>
                                    </Tag>
                                </div>
                            </section>
                        )
                    ))}


                    {guestdata.length > 0 && (
                <section  className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Guests</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {guestdata.map((guest, i) => (
                                <div key={i} className="flex items-center justify-center p-4  rounded-lg ">


                                    <div className="group relative min-h-[14rem] min-w-[10rem] slighty-large-phone:w-64 slighty-large-phone:h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            src={guest.guestpic}
                                            alt="Profile background"

                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80"/>

                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                            <h1 className="text-white text-center font-bold font-sans text-xl  md:text-2xl mb-2 tracking-tight">
                                                {guest.guestname}
                                            </h1>
                                            <div
                                                className="space-y-1 text-center overflow-hidden max-h-0 transition-all duration-300 group-hover:max-h-24">
                                                {guest.guestoccupation.map((oc, i) => (
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

                    )}
                    {sponsordata.length > 0 && (
                <section id='sponsors' className="w-full py-12 md:py-24 lg:py-32">

                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Sponsors</h2>
                        </div>
                        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                            {sponsordata.map((sponsor, i) => (
                                <div key={i}
                                     className="flex items-center  justify-center p-4  ">

                                    <a>
                                        <img className='h-20 p-1 w-40 rounded-xl bg-gray-100' src={sponsor.sponsorpic} alt='img'/>
                                    </a>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                    )}

            </div>




        </div>

            <Toast
                show={showToast}
                message="thank you well contact you soon"
                onClose={handleCloseToast}
            />
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
                seteventdata(EventData);

                if(EventData[0].guest != null && EventData[0].guest != null) {

                    const GuestsData: Tables<'guests'>[] = await fetch("guests", false, ['*'], query => query.eq('guestid', EventData[0].guest));
                    const SponsorsData: Tables<'sponsors'>[] = await fetch("sponsors", false, ['*'], query => query.eq('sponsorid', EventData[0].sponsor));
                    setguestdata(GuestsData);
                    setsponsorsdata(SponsorsData);
                }



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
        <div className='w-full'>

            <Suspense  fallback={<Loading/>}>

                {isLoading ?

                    <Loading/>
                    :
                    <PageContent eventdata={eventdata} sponsordata={sponsordata} guestdata={guestdata} />

                }
            </Suspense>


        </div>
    )
}
