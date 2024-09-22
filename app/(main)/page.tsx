import Hero from "@/app/(main)/sections/client-side/Hero";

import Departament from "@/app/(main)/sections/client-side/Departament";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";

import EventSection from "@/app/(main)/sections/server-actions/Events";

import WorkshopSection from "@/app/(main)/sections/server-actions/workshop";
import TestimonialSection from "@/app/(main)/sections/server-actions/Testimonials";



export default function Index() {
  return (

      <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-6">
          <BackgroundBeams />
          <Hero/>
          <EventSection/>
          <WorkshopSection/>
          <Departament/>
          <TestimonialSection/>
      </div>

  );
}
