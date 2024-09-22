import {CardSkeleton} from "@/components/ui/Card";
import React from "react";
import {cn} from "@/app/lib/utils";

export  default function Skeleton({children,className,repeat = 6}: {repeat?:number,className?: string,children?: React.ReactNode}) {
    return (

            <div className={cn(" w-full ", className)}>
                {[...Array(repeat)].map((_, i) => (
                    <div key={i}>
                        {children}
                    </div>
                ))}
            </div>
    )
}