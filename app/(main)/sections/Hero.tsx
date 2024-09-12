'use client'

import {motion} from "framer-motion";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";

export default function Hero  (){
    return(
        <motion.div>
            <BackgroundBeams className='min-h-screen'/>

            <h2 className="iphone5:text-4xl relative font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    Welcome to{" "}<br/>
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

                        <div
                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span >house of Ideas</span>
                        </div>
                    </div>
                </h2>

        </motion.div>
)
}
