'use server'

import {Tables} from "@/utils/DatabaseTypes";
import {fetch} from "@/app/lib/supabase/handlers";
import Formations from "@/app/(main)/sections/renders/formations";

export default async function FormationSection() {
    const data = await fetch('formations',['*']) as Tables<'formations'>[];

    console.log(data);
    return <Formations data={data}/>
}