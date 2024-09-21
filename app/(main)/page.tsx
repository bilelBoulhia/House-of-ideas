import Hero from "@/app/(main)/sections/client-side/Hero";

import Departament from "@/app/(main)/sections/client-side/Departament";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import Testimonials from "@/app/(main)/sections/client-side/Testimonials";
import EventSection from "@/app/(main)/sections/server-side/Events";

import WorkshopSection from "@/app/(main)/sections/server-side/workshop";

/*
create policy "public can read notes"
on public.notes
for select to anon
using (true);
*
* */

export default function Index() {
  return (

      <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-6">
          <BackgroundBeams />
          <Hero/>
          <EventSection/>
          <WorkshopSection/>
          <Departament/>
          <Testimonials/>
      </div>

  );
}
