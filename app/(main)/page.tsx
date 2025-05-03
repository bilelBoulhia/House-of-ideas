
import React from "react";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/app/(main)/sections/renders/hero"));
const DynamicDepartament = dynamic(() => import("@/app/(main)/sections/renders/departament"));
const DynamicBackgroundBeams = dynamic(() => import("@/components/ui/BackgroundBeams"));
const DynamicEventSection = dynamic(() => import("@/app/(main)/sections/actions/events"));
const DynamicWorkshopSection = dynamic(() => import("@/app/(main)/sections/actions/workshop"));
const DynamicFormations = dynamic(() => import("@/app/(main)/sections/actions/formations"));
const DynamicTestimonialSection = dynamic(() => import("@/app/(main)/sections/actions/testimonials"));
const DynamicNewLetter = dynamic(() => import("@/app/(main)/sections/renders/news-letter"));
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
