import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Tables} from "@/utils/DatabaseTypes";
import {fetch} from "@/app/lib/supabase/client-api";


export function WorkshopDetails({data}: { data: Tables<'workshops'> | null }) {
    const [tutor, setTutor] = useState<Tables<'tutors'>[]>([]);


    useEffect(() => {
        const getdata = async () => {
            if (data?.tutor) {
                try {
                    const tutorData: Tables<'tutors'>[] = await fetch("tutors", false, [], (q) => q.eq('tutorid', data.tutor));
                    setTutor(tutorData);
                } catch (err) {
                    console.error(err);
                }
            }

        };
        getdata().catch(r=> console.error(r));
    }, [data]);



    return (
        <div className='flex flex-col h-full w-full items-center justify-center'>
            <div className='flex flex-col h-full w-full items-center justify-center'>
                <h2 className='text-4xl tracking-tight font-bold uppercase text-center'>{data?.workshopname}</h2>
                <h2 className='text-xl max-w-xl tracking-tight font-medium p-3 text-center'>
                    {data?.workshopdescription}
                </h2>
            </div>
            <div className='flex flex-row h-full w-full items-center justify-center'>
                <div className="flex flex-col lg:flex-row">
                    <div className="relative lg:w-1/2 p-12 flex items-center justify-center overflow-hidden">
                        <motion.h2
                            className="iphone5:text-5xl medium-phone:text-6xl font-bold dark:text-white text-center relative z-10">
                            With mrs
                            <h1 className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>
                                {tutor[0]?.tutorname || <div className='h-20 max-w-full rounded-xl bg-neutral-700 animate-pulse'/>}
                            </h1>
                        </motion.h2>
                    </div>
                    <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"/>
                    <div className="relative lg:w-1/2 p-12 flex items-center justify-center overflow-hidden">
                        <img className='rounded-xl' src={tutor[0]?.tutorpic?.toString() || 'https://placehold.co/600x400?text=sorry no pic for us'} alt={tutor[0]?.tutorname || 'Loading'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}