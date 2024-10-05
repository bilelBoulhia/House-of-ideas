'use client'
import {
    Card,
    CardBadge, CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {AnimatedHeading} from "@/components/ui/Animated-heading";
import {Modal, ModalBody, ModalBodyRef, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {SubscribeForm, SubscribeFormRef} from "@/components/fragmenets/forms/subscribe form";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
import React, {useRef, useState} from "react";
import {WorkshopDetails} from "@/components/fragmenets/workshop-Details-Fragmenet";
import {Tables} from "@/utils/DatabaseTypes";
import {insert} from "@/app/lib/supabase/client-api";
import Toast from "@/components/ui/toast";

import {NoData} from "@/components/ui/not-data";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";



export default function Workshop({data}: { data: Tables<'workshops'>[]}) {


        const router = useRouter();
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

        const handleRouterClick = () => {

        router.push(`/Workshops`);
        };
        const handleStepperFinish = () => {
            formRef.current?.submitForm();
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



        return (

            <div className="relative flex w-full items-center mt-16 overflow-hidden flex-col gap-10">
                <AnimatedHeading sentence={["Latest", "Workshops"]} className='bg-[#f5f7f3] dark:bg-[#00070e]'/>

                {data.length <= 0  ? (
                    <NoData sentence='no workshops at the moment'/>

                ) : (


                    <>


                        <div className='mt-10 grid sm:grid-cols-2 laptop:grid-cols-2 gap-8'>
                            {data.map((workshop, index) => (

                                    <Card
                                        key={index}
                                        transition={{delay: 0.7, ease: 'easeInOut'}}
                                        className=' bg-[#fffef9]  dark:bg-gradient-to-tl from-black via-gray-950 to-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'
                                    >
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

                                                                className='bg-violet-500 rounded-xl hover:bg-violet-600 dark:text-white  py-2 px-4'>Details</Button>
                                                        </ModalTrigger>
                                                        <ModalBody>

                                                            <ModalContent>
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

                                )
                            )}

                        </div>

                        <Button
                            onClick={()=>handleRouterClick()}
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-md text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-lg hover:shadow-purple-500/25">
                            <span
                                className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                            <span
                                className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative flex items-center">See more
                             <ArrowRight
                                 className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
                           </span>
                        </Button>
                    </>


                )}
                <Toast
                    show={showToast}
                    message="thank you well contact you soon"
                    onClose={handleCloseToast}
                />
            </div>
        )

}

