import {BackgroundBeams} from "@/components/ui/BackgroundBeams";
import Hero from "@/app/(main)/sections/Hero";
import Event from "@/app/(main)/sections/Event-section";


export default async function Index() {
  return (

      <div className="flex-1 flex w-full items-center  overflow-x-hidden flex-col gap-6">
          <Hero/>
          <Event/>
      </div>

  );
}
