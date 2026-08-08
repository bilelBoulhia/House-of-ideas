'use client'
import React, { Suspense, useMemo, useState } from "react";
import { m } from "framer-motion";

import BackgroundBeams from "@/components/ui/BackgroundBeams";
import { shadowVariants } from "@/utils/types";

import { Tables } from "@/utils/DatabaseTypes";
import { fetch } from "@/app/lib/supabase/supabase-client-handlers";
import { useRouter } from "next/navigation";
import { Loading } from "@/app/Loading";

import useSWR from "swr";
import { NoData } from "@/components/ui/not-data";
import SearchBar from "@/components/search-bar";
import { AnimatedHeading } from "@/components/ui/Animated-heading";


// FIX: Hooks moved to top level of component — never inside if/else branches.
// This follows the Rules of Hooks and prevents unpredictable behaviour.
const PageContent = ({ data }: { data: Tables<'events'>[] }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const filteredEvents = useMemo(() => {
        // Guard: if data is empty, return empty array so no crash occurs
        if (data.length === 0) return [];
        return data.filter(event =>
            event.eventname.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data, searchQuery]);

    const handleSearchQuery = (searchQuery: string) => {
        setSearchQuery(searchQuery);
    };

    const handleRouterClick = (eventid: number) => {
        router.push(`/Events/${eventid}`);
    };

    // FIX: Early return AFTER hooks — hooks must always run before any returns
    if (data.length === 0) {
        return (
            <NoData sentence='no events at the moment' />
        );
    }

    return (
        <>
            <AnimatedHeading
                firstsentenceClassName='z-10'
                sentence={["explore", "more"]}
                className='bg-[#f2f3f3] dark:bg-[#000913]'
            />
            <div className='max-w-md'>
                <SearchBar SendsearchQuery={handleSearchQuery} />
            </div>

            <div className='grid z-10 grid-cols-1 lg:grid-cols-2 gap-10'>
                {filteredEvents.length === 0 ? (
                    <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                        Couldn&apos;t find what you&apos;re looking for
                    </div>
                ) : (
                    filteredEvents.map((event, i) => (
                        <div onClick={() => handleRouterClick(event.eventid)} key={i}>
                            <m.div
                                style={{ zIndex: -4 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="z-1 max-w-3xl"
                            >
                                <div className="max-w-3xl hover:cursor-default mx-auto pl-2 overflow-hidden">
                                    <m.h1
                                        whileHover={{ x: 4 }}
                                        className="text-2xl p-1 md:text-3xl font-extrabold text-left tracking-tight bg-clip-text text-transparent bg-black dark:bg-white"
                                    >
                                        {event.eventname}
                                    </m.h1>
                                </div>
                            </m.div>

                            <m.div
                                className="w-full max-h-[50vh] aspect-[16/9] rounded-xl overflow-hidden"
                                variants={shadowVariants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <m.img
                                    src={event.eventpic}
                                    whileHover={{ scale: 1.02 }}
                                    className="rounded-xl relative h-full w-full object-cover"
                                />
                            </m.div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

const fetcher = async () => {
    const fetcheddata = await fetch("events", ['eventname,eventpic,eventid'], (q) => q.order('date', { ascending: false }));
    return fetcheddata as Tables<'events'>[] || [];
};

export default function Index() {

    const { data, isLoading } = useSWR<Tables<'events'>[]>('/events', fetcher);

    return (
        <div className='flex overflow-hidden flex-col mt-[4rem] items-center p-5 gap-2'>
            <Suspense fallback={<Loading />}>
                {isLoading
                    ? <Loading />
                    : <PageContent data={data || []} />
                }
            </Suspense>
            <BackgroundBeams />
        </div>
    );
}