'use client'
import Hero from "@/app/(main)/sections/Hero";
import Event from "@/app/(main)/sections/Events";
import Workshop from "@/app/(main)/sections/workshop";
import Departament from "@/app/(main)/sections/Departament";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import Testimonials from "@/app/(main)/sections/Testimonials";


export default function Index() {
  return (

      <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-6">
          <BackgroundBeams />
          <Hero/>
          <Event/>
          <Workshop/>
          <Departament/>
          <Testimonials/>
      </div>

  );
}
