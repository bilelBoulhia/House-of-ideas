import {StaticImageData} from "next/image";
import React from "react";

export const shadowVariants = {
    hidden: {
        boxShadow: "0px 0px rgba(107, 33, 168, 0), 0px 0px rgba(107, 33, 168, 0)"
    },
    visible: {
        boxShadow: "5px 5px rgba(107, 33, 168, 0.4), 10px 10px rgba(107, 33, 168, 0.3)",
        transition: {duration: 0.8, ease: "easeInOut", delay: 0.2}
    }
}

export interface CourseData {
    title: string
    description: string
    picture?: StaticImageData
    tutor: string

}

export interface IconProps {
    className?: string;
    animate?: boolean ;
}


export  interface Loadingprops {
    className?: string;
    children?: React.ReactNode;
}
