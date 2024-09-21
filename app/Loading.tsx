import React from "react";
import {Loader} from "@/components/ui/Laoder";
import {Loadingprops} from "@/utils/types";


export default function Loading({className, children}: Loadingprops) {
    return (
        <div className='w-full h-full'>
            <Loader className={className}>{children}</Loader>
        </div>
    );
}