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


// Guest type
export type Guest = {
    name: string;
    guestpic:string;
    occupations: string[];
};

export type Sponsor = {
    sponsorpic: string;
};

// Event type
export type Events = {
    eventid: number;
    eventname: string;
    eventdescription: string;
    eventpic: string;
    eventlocation: string;
    date: string;
    eventstarthour: string;
    eventendhour: string;
    isavailable: boolean;
    instagramlink: string;
    visitorsnum: number;
    guests: Guest[];
    sponsor_pics: Sponsor[];
};



export interface IconProps {
    className?: string;
    animate?: boolean ;

}

