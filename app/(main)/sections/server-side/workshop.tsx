import {fetch} from "@/app/lib/supabase/server-api";
import {Tables} from "@/utils/DatabaseTypes";
import Workshop from "@/app/(main)/sections/client-side/workshop";
import {WorkshopDetails} from "@/components/fragmenets/workshop-Details-Fragmenet";


export default async function WorkshopSection() {
    const data = await fetch("workshops", false, ['*'], (q) => q.limit(4)) as Tables<'workshops'>[];

    return <Workshop data={data}/>
}

