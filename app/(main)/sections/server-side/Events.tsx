
import Event from "@/app/(main)/sections/client-side/Events";
import {fetch} from "@/app/lib/supabase/server-api";
import {Tables} from "@/utils/DatabaseTypes";


export default async function EventSection() {
    const data = await fetch("events", false, ["eventpic,eventid"]) as Tables<'events'>[];

    return <Event data={data} />
}