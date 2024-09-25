
import Event from "@/app/(main)/sections/client-side/Events";
import {fetch} from "@/app/lib/supabase/server-api";
import {Tables} from "@/utils/DatabaseTypes";


export default async function EventSection() {
    const data = await fetch("events", false, ["eventpic,eventid"],(q)=>q.limit(4).order('date', {ascending: false})) as Tables<'events'>[];

    return <Event data={data} />
}