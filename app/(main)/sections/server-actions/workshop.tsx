import {fetch} from "@/app/lib/supabase/server-api";
import {Tables} from "@/utils/DatabaseTypes";
import Workshop from "@/app/(main)/sections/client-side/workshop";

export default async function WorkshopSection() {
    const data = await fetch("workshops",  ['*'], (q) => q.limit(4).eq('isavailable',true).order('createdat',{ascending:false})) as Tables<'workshops'>[];


    return <Workshop data={data}/>
}

