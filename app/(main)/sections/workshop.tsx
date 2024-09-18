'use client'
import {motion} from "framer-motion";
import c1 from '@/app/assets/workshop images/image (1).png'

import  {StaticImageData} from "next/image";

import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import {
    Card,
    CardBadge, CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter,
    CardImage, CardName,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {AnimatedHeading} from "@/components/ui/Section-Heading";
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {SubscribeForm} from "@/components/forms/subscribe form";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
interface CourseData {
    title: string
    description: string
    picture?: StaticImageData
    tutor: string

}



  const pages = [
    <div key="1" className="space-y-2">
     <SubscribeForm/>
    </div>,
    <div key="2" className="space-y-2">
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <p>Please fill out your personal information in this step.</p>
    </div>,
    <div key="3" className="space-y-2">
      <h2 className="text-2xl font-bold">Review</h2>
      <p>Review your information before submitting.</p>
    </div>
  ]






export default function Workshop() {

    const courses :CourseData[] = [
        {
            title: "Web Development Mastery",
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
        },
        {
            title: "Web Development Mastery",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        }

    ]


    return (

        <div className="relative min-h-screen flex w-full items-center mt-16 overflow-hidden flex-col gap-2">


            <AnimatedHeading sentence={["Latest","workshops"]} className='bg-[#f7f4f9] dark:bg-[#00070e]'/>

            <div
                className='mt-10 grid md:grid-cols-2 laptop:grid-cols-2 gap-8'>
                {courses.map((course, index) => (

                   <Card
                       key={index}
                       initial={{rotate: index % 2 === 0 ? -5 : 5}}
                       viewport={{once: true}}
                       whileInView={{rotate: 0,}}
                       transition={{delay: 0.7}}
                       className='bg-[#F5F7F8] dark:bg-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'
                   >
                    <CardContent>

                     <CardUpperBody>
                         <CardTitle className='text-2xl font-bold dark:text-white tracking-wide'>WEB dev</CardTitle>
                         <CardDescription className='text-violet-400 dark:text-violet-200'
                         >Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.
                         </CardDescription>
                     </CardUpperBody>


                        <CardBottomBody>
                            <div className="flex items-center mb-4">
                                <CardImage alt='s' src={c1}/>
                                <CardName className='dark:text-white'>steve mcfin</CardName>
                            </div>
                        <CardFooter>

                             <Modal>
                                  <ModalTrigger asChild>
                                          <Button className='bg-violet-500 hover:bg-violet-600 dark:text-white font-bold py-2 px-4 rounded'>subscribe</Button>
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


