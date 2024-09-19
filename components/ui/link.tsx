import {cn} from "@/lib/utils";
import React from "react";
import Link  from "next/link";





export interface props extends React.LinkHTMLAttributes<HTMLLinkElement>{
    children : string,
    className?: string,
    href: string,
}


const Linkcomp: React.FC<props> = ({ children, className, ...props }) => {

    return (
        // @ts-ignore
        <Link
            {...props}
            className={cn("group inline-flex w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold  ",
                className
            )}
        >
            {children}
        </Link>
    )
}
export default Linkcomp