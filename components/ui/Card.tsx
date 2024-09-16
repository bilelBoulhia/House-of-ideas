'use client'
import React, {createContext, ReactNode, useContext, useState} from "react";
import {cn} from "@/lib/utils";
import {Slot} from "@radix-ui/react-slot";
import {Button} from "@/components/ui/button";
import {motion, MotionProps} from "framer-motion";
import c1 from "@/app/assets/workshop images/image (1).png";
import Image, {StaticImageData} from "next/image";
import {Badge} from "@/components/ui/badge";












export const CardTrigger = ({
                                 children,
                                 className,

                             }: {
    children: ReactNode;
    className?: string;

}) => {


    return (
        <Button
            className={cn(className)}

        >
            {children}
        </Button>
    );
};
interface CardProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}
export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
    return (
        <motion.div
            className={cn(
                "w-80 h-80 rounded-2xl p-4 overflow-hidden group-hover:border-slate-700 relative z-20",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const CardContent = ({children,className}: {children: React.ReactNode[], className?: string}) => {

    return(
        <div className={cn("relative z-10 p-6 h-full flex flex-col justify-between",className)}>
            {children}
        </div>
    )

}
export const CardTitle=({children,className}:{children:string,className?:string}) => {
    return (
        <h2 className={cn("mb-2",className)}
        >{children}
        </h2>
    )
}

export const CardDescription=({children,className}:{children:string,className?:string}) => {
    return (
        <p className={cn("mb-4 line-clamp-3",className)}>
            {children}
        </p>
    )
}
export const CardImage=({src,alt,className}:{src: StaticImageData, className?:string,alt:string}) => {
    return (
        <Image src={src} alt={alt} className={cn("w-12 h-12 rounded-full mr-4",className)} />
    )
}
export const CardUpperBody=({children,className}:{children:React.ReactNode[],className?:string}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export const CardBottomBody=({children,className}:{children:React.ReactNode[],className?:string}) => {
    return (
        <div className={cn("mt-4 transition-opacity duration-300 ease-in-out opacity-100",className)}>
            {children}
        </div>
    )
}
export const CardFooter=({children,className}:{children:React.ReactNode[],className?:string}) => {
    return (
        <div className={cn("flex justify-between items-center",className)}>
            {children}
        </div>
    )
}
export const CardName=({children,className}:{children:string,className?:string}) => {
    return (
        <span className={cn("font-semibold",className)}>{"with"} {children}</span>
    )
}

export const CardBadge=({children,className}:{children:string,className?:string}) => {
    return (
        <Badge variant='secondary' className={cn('px-2 py-1 ',className)}>{children}</Badge>
    )
}
