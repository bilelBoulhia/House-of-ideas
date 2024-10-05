'use client'

import {
    Card, CardBadge,
    CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {Modal, ModalBody, ModalBodyRef, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
import React, {Suspense, useEffect, useRef, useState} from "react";
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {Tables} from "@/utils/DatabaseTypes";
import {fetch, insert} from "@/app/lib/supabase/client-api";

import {WorkshopDetails} from "@/components/fragmenets/workshop-Details-Fragmenet";
import {SubscribeForm, SubscribeFormRef} from "@/components/fragmenets/forms/subscribe form";
import {notFound} from "next/navigation";

import Toast from "@/components/ui/toast";
import {Loading} from "@/app/Loading";
import useSWR from "swr";
import {NoData} from "@/components/ui/not-data";






function PageContent({data}: { data: Tables<'workshops'>[] }) {

    if(data.length === 0 ){
        return (
            <NoData sentence='no workshops at the moment'/>
        )
    }else {


        const formRef = useRef<SubscribeFormRef>(null);
        const modalRef = useRef<ModalBodyRef>(null);
        const [showToast, setShowToast] = useState(false);
        const handleFormSubmit = (data: Tables<'applicants'>) => {
            const insertdata = async (data: Tables<'applicants'>) => {
                try {
                    const issuccess = await insert<Tables<'applicants'>>('applicants', data).catch(r => console.error(r));
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
        const pages = (selectedworkshop: Tables<'workshops'> | null) => [
            <div key="1" className="space-y-2">
                <WorkshopDetails data={selectedworkshop}/>
            </div>
            ,
            <div key="2" className="space-y-2">
                <SubscribeForm
                    ref={formRef}
                    workshopid={selectedworkshop?.workshopid || 0}
                    onSubmit={handleFormSubmit}
                />
            </div>,

        ]

        const handleStepperFinish = () => {
            formRef.current?.submitForm();
        };

        return (


            <>
            <AnimatedHeading firstsentenceClassName='z-10' sentence={["explore", "more"]} className='bg-[#f2f3f3]  dark:bg-[#000913] '/>
            <div  className='z-10  w-full'>




                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {data.map((workshop, index) => (
                        <Card key={index}
                              className='relative group bg-[#fffef9] dark:bg-gradient-to-tl from-black via-gray-950 to-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'>

                            <CardContent>

                                <CardUpperBody>

                                    <CardTitle className='text-2xl font-bold dark:text-white tracking-wide'>
                                        {workshop.workshopname}

                                    </CardTitle>

                                    <CardDescription className='text-neutral-800 dark:text-neutral-200'
                                    >
                                        {workshop.workshopdescription}
                                    </CardDescription>
                                </CardUpperBody>


                                <CardBottomBody>
                                    <CardFooter>

                                        <Modal>
                                            <ModalTrigger asChild>
                                                <Button   className='bg-violet-500 rounded-xl hover:bg-violet-600 dark:text-white  py-2 px-4'>Details</Button>
                                            </ModalTrigger>
                                            <ModalBody ref={modalRef}>

                                                <ModalContent className='z-22' >
                                                    <div>
                                                        <Stepper
                                                            isDisabled={Date.parse(workshop.date) < Date.now()}
                                                            finishSentnce='subscribe'
                                                            pages={pages(workshop)}
                                                            onFinish={handleStepperFinish}
                                                        />

                                                    </div>
                                                </ModalContent>
                                            </ModalBody>
                                        </Modal>

                                        <CardBadge>Free</CardBadge>
                                    </CardFooter>
                                </CardBottomBody>


                            </CardContent>

                        </Card>


                    ))}

                    <Toast
                        show={showToast}
                        message="thank you well contact you soon"
                        onClose={handleCloseToast}
                    />

                </div>


            </div>
                </>
        )

    }
}


const fetcher = async () => {
    const fetcheddata = await fetch("workshops", ['*'],q=>q.order('date', {ascending: false}));
    return fetcheddata as Tables<'workshops'>[] || [];

}
export default function Index() {

    const {data, isLoading} = useSWR<Tables<'workshops'>[]>('/workshops',fetcher);


    return (

        <div

            className='flex flex-col  mt-[8rem] items-center justify-center overflow-hidden gap-2'>
            <Suspense fallback={<Loading/>}>
                {isLoading ?
                    <Loading/>
                    :
                    <PageContent data={data || []}/>
                }
            </Suspense>

                <BackgroundBeams  />


        </div>
    )
}