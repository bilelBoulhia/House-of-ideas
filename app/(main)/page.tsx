import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import Hero from "@/app/(main)/sections/Hero";
import Event from "@/app/(main)/sections/Events";
import Workshop from "@/app/(main)/sections/workshop";


export default async function Index() {
  return (

      <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-6">
          <Hero/>
          <Event/>
          <Workshop/>
      </div>

  );
}
