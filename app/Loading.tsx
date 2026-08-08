import React from "react";



import {NewHiIcon} from "@/components/ui/Icons";


export const Loading =()=> {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background">
            <NewHiIcon className="w-20 h-20 text-primary animate-pulse"/>
        </div>
    );
}