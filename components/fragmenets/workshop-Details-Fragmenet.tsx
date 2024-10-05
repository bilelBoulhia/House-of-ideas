import React, {Suspense, useEffect, useState} from "react"
import {Tables} from "@/utils/DatabaseTypes"
import {fetch} from "@/app/lib/supabase/client-api"
import {CalendarIcon, ClockIcon} from "lucide-react";
import {Badge} from "@/components/ui/badge";

function TutorSkeleton() {
    return (
        <div className="animate-pulse flex flex-col lg:flex-row w-full">
            <div className="lg:w-1/2 p-12 flex items-center justify-center">
                <div className="h-12 bg-white/30 backdrop-blur-2xl rounded w-3/4"/>
            </div>
            <div className="w-px"/>
            <div className="lg:w-1/2 p-12 flex items-center justify-center">
                <div className="h-64 w-64  bg-white/30 backdrop-blur-2xl bg-opacity-10
                   animate-pulse rounded-xl"/>
            </div>
        </div>
    )
}

function TutorContent({tutor}: { tutor: Tables<'tutors'>[] }) {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="relative lg:w-1/2 p-12 flex items-center justify-center overflow-hidden">
                <h2
                    className="iphone5:text-5xl medium-phone:text-6xl font-bold dark:text-white text-center relative z-10"
                >
                    With mrs
                    <h1 className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>
                        {tutor[0]?.tutorname}
                    </h1>
                </h2>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"/>
            <div className="relative lg:w-1/2 p-12 flex items-center justify-center overflow-hidden">
                {tutor[0]?.tutorpic === null ? (

                    <img
                        className='rounded-xl'
                         src='https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
                         alt={tutor[0]?.tutorname}/>


                ) : (

                    <img className='rounded-xl' src={tutor[0]?.tutorpic?.toString()} alt={tutor[0]?.tutorname}/>

                )}


            </div>
        </div>
    )
}

export function WorkshopDetails({data}: { data: Tables<'workshops'> | null }) {
    const [tutor, setTutor] = useState<Tables<'tutors'>[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getdata = async () => {
            if (data?.tutor) {
                try {
                    setIsLoading(true)
                    const tutorData: Tables<'tutors'>[] = await fetch("tutors",  [], (q) => q.eq('tutorid', data.tutor))
                    setTutor(tutorData)
                } finally {
                    setIsLoading(false)
                }
            }
        }
        getdata().catch()
    },[])

    return (
        <div  className='flex flex-col cursor-default h-full w-full items-center justify-center'>
            <div className='flex flex-col h-full w-full items-center justify-center'>
                <h2 className='text-4xl tracking-tight font-bold uppercase text-center'>{data?.workshopname}</h2>
                <h2 className='text-xl max-w-xl tracking-tight font-medium p-3 text-center'>
                    {data?.workshopdescription}
                </h2>
                <div className="flex   flex-row justify-between py-4 px-8  gap-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3">
                        <CalendarIcon className="w-6 h-6 text-primary"/>
                        <h2 className="text-xl font-semibold  text-foreground">{data?.date}</h2>
                    </div>
                    <div className="flex  items-center space-x-2">
                        <ClockIcon className="w-6 h-6 text-primary"/>
                        <Badge variant="secondary" className="text-lg px-0 hover:bg-transparent  py-1">
                                {data?.starthour?.slice(0, 5)}
                        </Badge>
                            <span className="text-lg font-medium">-</span>
                        <Badge variant="secondary" className="text-lg px-0 hover:bg-transparent  py-1">{data?.endhour?.slice(0, 5)}
                        </Badge>

                    </div>
                </div>

            </div>
            <div className='flex flex-row h-full w-full items-center justify-center'>
                <Suspense fallback={<TutorSkeleton/>}>
                    {isLoading ? <TutorSkeleton/> : <TutorContent tutor={tutor}/>}
                </Suspense>
            </div>
        </div>
    )
}