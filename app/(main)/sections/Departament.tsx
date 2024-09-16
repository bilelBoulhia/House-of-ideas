'use client'
import {motion} from "framer-motion";
import Image from "next/image";
import img1 from "@/app/assets/images/dragon_1.jpg";
import img2 from "@/app/assets/images/dragon_2.jpg";
import img3 from "@/app/assets/images/dragon_3.jpg";
import img4 from "@/app/assets/images/dragon_4.jpg";
import img5 from "@/app/assets/images/dragon_5.jpg";
import img6 from "@/app/assets/images/dragon_6.jpg";
import img7 from "@/app/assets/images/dragon_7.jpg";
import img8 from "@/app/assets/images/dragon_8.jpg";
import {useState} from "react";













export default function Departament() {

    const images=[img1,img2,img3,img4,img5,img6,img7,img8]

    return (

        <div className="relative min-h-screen flex w-full items-center mt-16 overflow-hidden flex-col gap-2">


            <div className=" flex flex-row  items-center text-center justify-center">


                <div className='flex-row flex items-end bg-[#f4f5f5]  dark:bg-[#000305]  w-full justify-end'>

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
                        initial={{opacity: 1, x: -300}}
                        whileInView={{opacity: 1, x: 5}}
                        transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.6}}
                        className='iphone5:text-xl   medium-phone:text-3xl  large-phone:text-4xl uppercase  font-bold text-center  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-sans tracking-tight'

                    >Departements
                    </motion.span>
                </div>
            </div>


            <div className=' w-full h-full'>


            <div className="absolute  inset-0 flex items-center justify-center">
                <div
                    className={'h-24 w-24  rounded-full [transform-style:preserve-3d] hover:animate-autoRunPaused animate-autoRun'}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 [transform:rotateY(calc((var(--position)-1)*(360/var(--quantity))*1deg))_translateZ(300px)]"
                            style={{
                                '--position': index + 1,
                                '--quantity': images.length,
                            } as React.CSSProperties}
                        >
                          <div className='h-24 w-24 bg-white rounded-full' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}



/*
*   <Image
                                src={src}
                                alt={`Carousel image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
* */