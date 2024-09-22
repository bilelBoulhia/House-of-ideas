'use client'

import {
    Card, CardBadge,
    CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter, CardSkeleton,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
import React, {Suspense, useEffect, useState} from "react";
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {Tables} from "@/utils/DatabaseTypes";
import {fetch} from "@/app/lib/supabase/client-api";
import {pages} from "@/app/(main)/sections/client-side/workshop";
import Skeleton from "@/components/ui/Skeleton";


function PageSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-4">
        <Skeleton className='grid grid-cols-1 animate-pulse sm:grid-cols-2 lg:grid-cols-3  gap-4'>
            {[...Array(6)].map((_, i) => (
                <div key={i}>
                    <CardSkeleton/>
                </div>
            ))}
        </Skeleton>
        </div>
    )
}



function PageContent({data}: { data: Tables<'workshops'>[] }) {
    return (

<>
    <AnimatedHeading sentence={["explore", "more"]} className='bg-[#f2f3f3]  dark:bg-[#000913] blur-[3px]'/>


        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
            {data.map((workshop, index) => (

                <Card key={index}
                      className='relative group bg-[linear-gradient(to_top_left,#f0f0f0,#f6f6f6,#f0f0f0)] dark:bg-gradient-to-tl from-black via-gray-950 to-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'>

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
                                            <Button
                                                className='bg-violet-500 rounded-xl hover:bg-violet-600 dark:text-white  py-2 px-4'>subscribe</Button>
                                        </ModalTrigger>
                                        <ModalBody>

                                            <ModalContent>
                                                <div>
                                                    <Stepper pages={pages(workshop)}/>
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

            </div>

</>
    )
}


export default function Index() {
    const [data, setdata] = useState<Tables<'workshops'>[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getdata = async () => {
            try {
                setIsLoading(true);
                const WorkshopData: Tables<'workshops'>[] = await fetch("workshops", false, ['*']);
                setdata(WorkshopData);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        getdata().catch(r=>console.error(r));
    }, []);
    return (

        <div className='flex flex-col mt-[8rem] items-center justify-center overflow-hidden gap-2'>
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