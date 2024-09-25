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
import { motion } from "framer-motion";




export default function Workshop({data}: { data: Tables<'workshops'>[]}) {



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

        <div className="relative flex w-full items-center mt-16 overflow-hidden flex-col gap-2">
            <AnimatedHeading sentence={["Latest", "Workshops"]} className='bg-[#f5f7f3] dark:bg-[#00070e]'/>

            {data == undefined || null ? (
                <div
                    className="flex flex-col m-4 min-h-[40rem] items-center justify-center  p-8 bg-gradient-to-br from-blue-950 to-black/80 rounded-3xl shadow-lg"
                >

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                        Sorry, No Workshops at the Moment
                    </motion.h2>
                    <motion.div

                        className=" p-6 rounded-2xl shadow-md  max-w-md w-full"
                    >
                        <p className="text-lg mb-4">
                            We're working hard to bring you exciting new workshops
                        </p>
                        <div className="flex items-center justify-between text-sm ">
                            <span>Next check: Soon</span>
                            <span>Stay tuned!</span>
                        </div>
                    </motion.div>

                </div>
            ) : (


                <div className='mt-10 grid sm:grid-cols-2 laptop:grid-cols-2 gap-8'>
                    {data.map((workshop, index) => (

                        <Card
                            key={index}
                            transition={{delay: 0.7, ease: 'easeInOut'}}
                            className='   dark:bg-gradient-to-tl from-black via-gray-950 to-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'
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
                                                    className='bg-violet-500 rounded-xl hover:bg-violet-600 dark:text-white  py-2 px-4'>subscribe</Button>
                                            </ModalTrigger>
                                            <ModalBody>

                                                <ModalContent>
                                                    <div>
                                                        <Stepper
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

)}
            <Toast
                show={showToast}
                message="thank you well contact you soon"
                onClose={handleCloseToast}
            />
        </div>
    )
}

