import {
  CarouselSection,
  HeroSection,
  InfoSection,
  ServiceSection,
  TrainingSection,
} from "@/components/pages/home";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";
import React from "react";
const page: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <InfoSection />
      <ServiceSection />
      <TrainingSection />
      <section className="relative min-h-[400px] w-full bg-[#071afd]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] "></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial-[at_50%_10%] from-[rgba(99,102,241,0.3)] from-40% to-[#0f172a] to-100%"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 max-w-[125rem] mx-auto text-white py-20 px-10 flex items-center justify-center gap-6 flex-col ">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Let&apos;s work together.
          </h1>
          <p className="text-xl lg:text-2xl font-semibold text-center max-w-[50rem]">
            We are the architects of your operational excellence, bringing
            world-class diagnostic and maintenance solutions to partner in your
            success and build a better future.
          </p>
          <Button className="bg-white text-[#0f172a] hover:bg-white hover:scale-110 border-none rounded-none px-14 py-8 text-lg font-semibold group cursor-pointer flex items-center gap-2">
            Start a Project <Power />
          </Button>
        </div>
      </section>
    </>
  );
};

export default page;
