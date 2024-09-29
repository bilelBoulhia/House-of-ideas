
import {fetch} from "@/app/lib/supabase/server-api";
import {Tables} from "@/utils/DatabaseTypes";
import Testimonials from "@/app/(main)/sections/client-side/Testimonials";


export default async function TestimonialSection() {
    const data = await fetch("reviews", ["*"],q=>q.eq('isaccepted',true)) as Tables<'reviews'>[];

    return <Testimonials data={data}/>
}