import {fetch} from "@/app/lib/supabase/server-api";
import {Tables} from "@/utils/DatabaseTypes";
import Workshop from "@/app/(main)/sections/client-side/workshop";
//.eq('isavailable',true)
export default async function WorkshopSection() {
    const data = await fetch("workshops",  ['*'], (q) => q.limit(4).order('date',{ascending:false})) as Tables<'workshops'>[];
    return <Workshop data={data}/>
}

