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
    CardTrigger, CardUpperBody
} from "@/components/ui/Card";
interface CourseData {
    title: string
    description: string
    picture?: StaticImageData
    tutor: string

}










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


            <div className=" flex flex-row  items-center text-center justify-center">


                <div className='flex-row flex items-end bg-[#f4f5f5]  dark:bg-[#00060c]  w-full justify-end'>

                    <motion.h2
                        initial={{opacity: 1, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                        className=" iphone5:text-xl z-12  medium-phone:text-3xl  large-phone:text-4xl uppercase  font-semibold text-center text-black dark:text-white font-sans tracking-tight"

                    >
                        Excompo
                    </motion.h2>
                    <div style={{zIndex: -20}}
                         className="absolute top-0 left-0 h-11 w-[41vw] bg-[#f1f9f9]   dark:bg-[#000305]  "></div>

                </div>


                <div className='flex-row flex items-start w-full   justify-start'>
                    <motion.span
                        style={{zIndex: -21}}
                        viewport={{once: true}}
                        initial={{opacity: 1, x: -210}}
                        whileInView={{opacity: 1, x: 5}}
                        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.6}}
                        className='iphone5:text-xl   medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-sans tracking-tight'

                    >Workshop
                    </motion.span>
                </div>
            </div>

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
                                <CardTrigger className='bg-violet-500 hover:bg-violet-600 dark:text-white font-bold py-2 px-4 rounded'>subscribe</CardTrigger>
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


