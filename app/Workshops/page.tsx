"use client"
import {CourseData} from "@/app/(main)/sections/workshop";
import {
    Card, CardBadge,
    CardBottomBody,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardUpperBody
} from "@/components/ui/Card";
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/ui/Modal";
import {Button} from "@/components/ui/button";
import Stepper from "@/components/ui/Stepper";
import React from "react";
import {WorkshopDetails} from "@/components/fragmenets/workshop-Details-Fragmenet";
import {SubscribeForm} from "@/components/fragmenets/forms/subscribe form";
import {shadowVariants} from "@/app/(main)/sections/Events";

const courses: CourseData[] = [
        {
            title: "Web Development ",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Marketing",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Desgin ",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Enterpise planning",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
            {
            title: "Marketing",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Desgin ",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Enterpise planning",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
            {
            title: "Marketing",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Desgin ",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        },
        {
            title: "Enterpise planning",
            description: "Master the art of web development with our comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
            tutor: "John Doe"
        }

    ]
   const pages = [
      <div key="1" className="space-y-2">
          <WorkshopDetails/>
      </div>
      ,
      <div key="2" className="space-y-2">
          <SubscribeForm/>
      </div>,

  ]
export default function Index() {
    return(
        <div className='flex flex-col mt-16 overflow-hidden gap-2'>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
 {courses.map((course, index) => (




         <Card
             key={index} className='relative group bg-[linear-gradient(to_top_left,#f0f0f0,#f6f6f6,#f0f0f0)] dark:bg-gradient-to-tl from-black via-gray-950 to-black border border-black/[0.2]  dark:border-white/[0.2] group-hover:border-slate-700'
         >

             <CardContent>

                 <CardUpperBody>
                     <CardTitle className='text-2xl font-bold dark:text-white tracking-wide'>
                         {course.title}
                     </CardTitle>
                     <CardDescription className='text-neutral-800 dark:text-neutral-200'
                     >
                         {course.description}
                     </CardDescription>
                 </CardUpperBody>


                 <CardBottomBody>
                     <CardFooter>

                         <Modal>
                             <ModalTrigger asChild>
                                 <Button className='bg-violet-950 rounded-xl hover:bg-violet-600 dark:text-white font-bold py-2 px-4'>subscribe</Button>
                             </ModalTrigger>
                             <ModalBody>

                                 <ModalContent>
                                     <div>
                                         <Stepper pages={pages}/>
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