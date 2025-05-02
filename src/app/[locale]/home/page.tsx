import {
  CarouselSection,
  HeroSection,
  InfoSection,
  ServiceSection,
  TrainingSection,
} from "@/components/pages/home";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";
import Image from "next/image";
import React from "react";
const page: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <InfoSection />
      <ServiceSection />
      <TrainingSection />
      <div className="relative min-h-[400px] w-full bg-[#071afd]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] "></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial-[at_50%_10%] from-[rgba(99,102,241,0.3)] from-40% to-[rgba(15,23,42,1)] to-100%"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 max-w-[125rem] mx-auto text-white py-20 px-10">
          <h1>Let's work together.</h1>
          <p>
            We are the architects of your operational excellence, bringing
            world-class diagnostic and maintenance solutions to partner in your
            success and build a better future.
          </p>
          <Button>
            Start a Project <Power />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;
