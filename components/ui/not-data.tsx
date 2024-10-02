import { motion } from "framer-motion";
import React from "react";

export const NoData = ({sentence}:{sentence:string}) => (
    <div
        className="flex z-10  flex-col m-4 min-h-[30rem] items-center justify-center   p-8 rounded-3xl shadow-lg"
    >

        <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
        >
            {sentence}
        </motion.h2>
        <motion.div

            className=" p-6 rounded-2xl shadow-md text-white bg-neutral-950 max-w-md w-full"
        >
            <p className="text-lg mb-4">
                there will be more in the future!
            </p>
            <div className="flex items-center justify-between text-sm ">
                <span>Next check: Soon</span>
                <span>Stay tuned!</span>
            </div>
        </motion.div>

    </div>
)