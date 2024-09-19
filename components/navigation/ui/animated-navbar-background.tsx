import useScrollAnimations from "@/lib/hooks/useScrollAnimations";
import {motion} from "framer-motion";
import React from "react";

export  default function AnimatedNavBarBg({width, borderRadius, backgroundColor}: ReturnType<typeof useScrollAnimations>) {
    return (

        <motion.div
            style={{
                width,
                borderRadius,
                backgroundColor,

                left: '50%',
                x: '-50%',
                zIndex: -1,
            }}
            className='absolute    inset-0'
        />

    )
}