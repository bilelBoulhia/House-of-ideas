'use server'
import {fetch} from "@/app/lib/supabase/handlers";
import {Tables} from "@/utils/DatabaseTypes";
import Testimonials from "@/app/(main)/sections/renders/testimonials";

export default async function TestimonialSection() {
    const data = await fetch("reviews", ["*"],q=>q.eq('isaccepted',true)) as Tables<'reviews'>[];

    return <Testimonials data={data}/>
}