import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[800px] flex flex-col items-center justify-center text-white text-center bg-[#1a29d2]">
      <Image
        src="/images/pexels-pixabay-221047.jpg"
        alt=""
        width={1000}
        height={100}
        className="w-full min-h-60 max-h-[800px] object-cover  mask-b-from-60% mask-b-to-90% brightness-60"
      />
      <article className="absolute flex flex-col items-start top-70 w-full h-full gap-6 px-10 text-white bg-opacity-50">
        <h1 className="text-[3.75rem] font-bold leading-tight w-2/3 text-start">
          Optimizing Industrial Performance, Protecting Assets, Building a
          Better Future.
        </h1>
        <p className="text-[26px] font-semibold leading-8 w-1/2 text-start">
          SETECH SERVICE: Your Expert Partner in Reliability and Efficiency with
          World-Class Technologies.
        </p>
        <Button className="bg-[#071afd] hover:bg-[#071cfdc3] text-white border-none rounded-none px-14 py-8 text-lg font-semibold group cursor-pointer">
          Learn More <MoveUpRight className="group-hover:animate-spin" />
        </Button>
      </article>
    </section>
  );
};

export default HeroSection;
