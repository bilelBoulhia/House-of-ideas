
import React from "react";
import {cn} from "@/app/lib/utils";

import {m, MotionProps} from "framer-motion";


import {Badge} from "@/components/ui/badge";
import {shadowVariants} from "@/utils/types";














interface CardProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
    return (

        <m.div
              initial="hidden"
              viewport={{once:true}}
              whileInView="visible"
              variants={shadowVariants}
            className={cn("rounded-2xl min-w-[250px]   m-7 p-4 overflow-hidden group-hover:border-slate-700 relative ",
                className
            )}
            {...props}
        >


            {children}

        </m.div>


    );
};

export const CardContent = ({children, className}: { children?: React.ReactNode, className?: string }) => {

    return (
        <div className={cn("relative min-h-[15rem]  p-2 h-full flex flex-col justify-center", className)}>
        {children}
        </div>
    )

}
export const CardTitle=({children,className}:{children:string,className?:string}) => {
    return (
        <m.h2
            style={{
                zIndex: -2,
            }}

            initial={{x:'-100%'}}
            viewport={{once:true}}
            whileInView={{x:1}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.2}}

            className={cn("mb-2 line-clamp-1",className)}
        >{children}
        </m.h2>
    )
}

export const CardDescription=({children,className}:{children:string,className?:string}) => {
    return (
        <p


            className={cn("mb-4  line-clamp-3",className)}>
            {children}
        </p>
    )
}

export const CardUpperBody=({children,className}:{children:React.ReactNode[],className?:string}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export const CardBottomBody=({children,className}:{children:React.ReactNode[] |  React.ReactNode,className?:string}) => {
    return (
        <div className={cn("mt-4 transition-opacity duration-300 ease-in-out opacity-100",className)}>
            {children}
        </div>
    )
}
export const CardFooter=({children,className}:{children?:React.ReactNode,className?:string}) => {
    return (
        <div className={cn("flex justify-between items-center",className)}>
            {children}
        </div>
    )
}


export const CardBadge=({children,className}:{children:string,className?:string}) => {
    return (
        <Badge variant='secondary' className={cn('px-2 py-1 ',className)}>{children}</Badge>
    )
}
export const CardSkeleton = () => {
    return (
        <div className=" w-[320px] lg:w-[500px] mx-auto">
            <div className="rounded-2xl m-7 p-4 overflow-hidden relative bg-white/30">
                <div className="relative min-h-[15rem] p-2 h-full flex flex-col justify-center"/>



            </div>
        </div>
    );
};
