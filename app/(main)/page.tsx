
import React from "react";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/app/(main)/sections/client-side/Hero"));
const DynamicDepartament = dynamic(() => import("@/app/(main)/sections/client-side/Departament"));
const DynamicBackgroundBeams = dynamic(() => import("@/components/ui/BackgroundBeams"));
const DynamicEventSection = dynamic(() => import("@/app/(main)/sections/server-actions/Events"));
const DynamicWorkshopSection = dynamic(() => import("@/app/(main)/sections/server-actions/workshop"));
const DynamicFormations = dynamic(() => import("@/app/(main)/sections/server-actions/Formations"));
const DynamicTestimonialSection = dynamic(() => import("@/app/(main)/sections/server-actions/Testimonials"));
const DynamicNewLetter = dynamic(() => import("@/app/(main)/sections/client-side/NewLetter"));
export default function Index() {

  return (

      <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-6 ">
          <DynamicBackgroundBeams />
          <DynamicHero/>
          <DynamicEventSection/>
          <DynamicWorkshopSection/>
          <DynamicFormations/>
          <DynamicDepartament/>
          <DynamicNewLetter/>
          <DynamicTestimonialSection/>
      </div>

  );
}
