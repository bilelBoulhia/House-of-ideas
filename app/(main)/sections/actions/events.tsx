'use server'
import Event from "@/app/(main)/sections/renders/events";
import {fetch} from "@/app/lib/supabase/handlers";
import {Tables} from "@/utils/DatabaseTypes";


export default async function EventSection() {
    const data = await fetch("events", ["eventpic,eventid"],(q)=>q.limit(4).order('date', {ascending: false})) as Tables<'events'>[];

    return <Event data={data} />
}