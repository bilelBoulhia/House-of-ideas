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
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {SubscribeForm}from "@/components/fragmenets/forms/subscribe form";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
import React, {useState} from "react";
import {WorkshopDetails} from "@/components/fragmenets/workshop-Details-Fragmenet";
import {Tables} from "@/utils/DatabaseTypes";


export const pages= (selectedworkshop : Tables<'workshops'> | null) => [
    <div key="1" className="space-y-2">
        <WorkshopDetails data={selectedworkshop}/>
    </div>
    ,
    <div key="2" className="space-y-2">
        <SubscribeForm/>
    </div>,

]



export default function Workshop({data}: { data: Tables<'workshops'>[]}) {
    const [selectedworkshop,setSelectedworkshop] = useState<Tables<'workshops'> | null>(null);
    return (

        <div className="relative flex w-full items-center mt-16 overflow-hidden flex-col gap-2">
            <AnimatedHeading sentence={["Latest", "Workshops"]} className='bg-[#f7f4f9] dark:bg-[#00070e]'/>

            <div
                className='mt-10 grid sm:grid-cols-2 laptop:grid-cols-2 gap-8'>
                {data.map((workshop, index) => (

                    <Card
                        key={index}
                        transition={{delay: 0.7,ease:'easeInOut'}}
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
                                          <Button onClick={()=>setSelectedworkshop(workshop)} className='bg-violet-950 hover:bg-violet-600 dark:text-white font-bold py-2 px-4 rounded'>subscribe</Button>
                                  </ModalTrigger>
                                  <ModalBody>

                                      <ModalContent>
                                          <div >
                                              <Stepper pages={pages(selectedworkshop)} />
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
        </div>
    )
}

