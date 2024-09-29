'use client'

import {motion} from "framer-motion"
import {TypewriterEffect} from "@/components/ui/TyperWriter";

import {FlipText} from "@/components/ui/FlipText";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";









export default function Hero() {

    const sentence = [{text: "cat",}, {text: "welcome",}, {text: "message.txt",}];
    const router = useRouter()

    return (
        <div>

            <div className='flex min-h-[calc(100vh-40rem)]  justify-evenly gap-6   overflow-hidden  flex-col w-full '>
                <motion.div>
                    <h2 className="mt-[4rem] iphone5:text-[2.7rem] medium-phone:text-[3.5rem] slighty-large-phone:text-[4rem] large-phone:text-7xl    font-bold text-center text-black dark:text-white font-sans tracking-tight">
                        <FlipText>Welcome</FlipText> <FlipText>to </FlipText>   <br/>

                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div
                                className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2">
                                <span>house of Ideas</span>
                            </div>
                        </div>
                    </h2>
                </motion.div>
                {/*op 0.1*/}

                <div className='flex md:gap-12 gap-5   flex-col sm:flex-row justify-center items-center'>
                    <Button className='bg-gradient-to-r  from-purple-700 to-purple-900' onClick={()=>router.push('/Workshops')} size='md' variant='cto'>
                        <span className="mr-2 min-w-[13rem]">
                            check out  all   Workshops
                        </span>
                        <ArrowRight className=" w-5 h-5  transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"/>


                    </Button>
                    <Button className=' bg-gradient-to-r  from-blue-700 to-blue-900' onClick={()=>{router.push('/Events')}} size='md' variant='cto'>
                        <span className="mr-2 min-w-[13rem]">
                            check out all Events
                        </span>
                        <ArrowRight className="w-5 h-5  transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"/>


                    </Button>

                </div>
            </div>
        </div>
    )
}