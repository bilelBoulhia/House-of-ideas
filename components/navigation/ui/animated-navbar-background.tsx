
import {m} from "framer-motion";
import React from "react";
import useScrollAnimations from "@/app/lib/hooks/useScrollAnimations";

export  default function AnimatedNavBarBg({width, borderRadius, backgroundColor}: ReturnType<typeof useScrollAnimations>) {
    return (

        <m.div
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