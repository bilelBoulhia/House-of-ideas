'use client'

import {motion} from "framer-motion";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";

export default function Hero  (){
    return(
        <div>
            <BackgroundBeams/>
            <div className='flex mt-10 flex-col gap-6  h-full w-full'>
              <div>
                  <h2 className="iphone5:text-4xl medium-phone:text-5xl slighty-large-phone:text-5xl large-phone:text-7xl tablet:text-7xl md:text-8xl   text-8xl font-bold text-center text-black  dark:text-white font-sans tracking-tight">
                    Welcome to<br/>
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span>House of Ideas</span>
                        </div>
                    </div>
                  </h2>
               </div>
            </div>
        </div>
    )
}
