'use server'

import {fetch} from "@/app/lib/supabase/handlers";
import {Tables} from "@/utils/DatabaseTypes";
import Workshop from "../renders/workshop";


export default async function WorkshopSection() {
    const data = await fetch("workshops",  ['*'], (q) => q.limit(4).order('date',{ascending:false})) as Tables<'workshops'>[];
    return <Workshop data={data}/>
}

