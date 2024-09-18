'use client'


import Image, {StaticImageData} from "next/image";


import {
    Card,
    CardBadge, CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {AnimatedHeading} from "@/components/ui/Section-Heading";
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {SubscribeForm} from "@/components/fragmenets/forms/subscribe form";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
import React from "react";
import {WorkshopDetails} from "@/components/fragmenets/workshop-Details-Fragmenet";
interface CourseData {
    title: string
    description: string
    picture?: StaticImageData
    tutor: string

}



  const pages = [
      <div key="1" className="space-y-2">
          <WorkshopDetails/>
      </div>
      ,
      <div key="2" className="space-y-2">
          <SubscribeForm/>
      </div>,

  ]


export default function Workshop() {

    const courses: CourseData[] = [
        {
            title: "Web Development Mastery",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Marketing",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Web Development Mastery",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Web Development Mastery",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        }

    ]


    return (

        <div className="relative min-h-screen flex w-full items-center mt-16 overflow-hidden flex-col gap-2">


            <AnimatedHeading sentence={["Latest", "workshops"]} className='bg-[#f7f4f9] dark:bg-[#00070e]'/>

            <div
                className='mt-10 grid sm:grid-cols-2 laptop:grid-cols-2 gap-8'>
                {courses.map((course, index) => (

                    <Card
                        key={index}
                        transition={{delay: 0.7,ease:'easeInOut'}}
                        className='   dark:bg-gradient-to-tl from-black via-gray-950 to-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'
                    >
                        <CardContent>

                            <CardUpperBody>
                                <CardTitle className='text-2xl font-bold dark:text-white tracking-wide'>
                                   WEB dev
                                </CardTitle>
                                <CardDescription className='text-neutral-800 dark:text-neutral-200'
                                >Master the art of web development with our comprehensive course covering HTML, CSS,
                                 JavaScript, and modern frameworks, and a strong grasp on the best practices involving design, implementation
                                </CardDescription>
                            </CardUpperBody>


                            <CardBottomBody>
                                <CardFooter>

                             <Modal>
                                  <ModalTrigger asChild>
                                          <Button className='bg-violet-950 hover:bg-violet-600 dark:text-white font-bold py-2 px-4 rounded'>subscribe</Button>
                                  </ModalTrigger>
                                  <ModalBody>

                                      <ModalContent>
                                          <div >
                                              <Stepper pages={pages} />
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


/*
*    initial={{rotate: index % 2 === 0 ? -5 : 5}}
                        viewport={{once: true}}
                        whileInView={{rotate: 0,}}
                        transition={{delay: 0.7}}
*
* */