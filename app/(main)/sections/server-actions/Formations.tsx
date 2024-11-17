
import Formations from "@/app/(main)/sections/client-side/Formations";
import {Tables} from "@/utils/DatabaseTypes";
import {fetch} from "@/app/lib/supabase/server-api";

export default async function FormationSection() {
    const data = await fetch('formations',['*']) as Tables<'formations'>[];

    console.log(data);
    return <Formations data={data}/>
}