import {cn} from "@/app/lib/utils";
import React from "react";
import {Loadingprops} from "@/utils/types";



export const Loader: React.FC<Loadingprops> = ({className, children}) => {
    return (
        <div className={cn("animate-pulse", className)}>
            {children}
        </div>
    );
};

export const LoaderChild: React.FC<Loadingprops> = ({className}) => {
    return (
        <div className={cn("bg-neutral-700", className)}/>
    );
};


