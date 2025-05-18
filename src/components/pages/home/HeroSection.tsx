import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px]  lg:min-h-[800px] flex flex-col items-center justify-center text-white text-center bg-[#1a29d2]">
      <Image
        src="/images/pexels-pixabay-221047.jpg"
        alt="hero"
        placeholder="blur"
        blurDataURL="/images/pexels-pixabay-221047.jpg"
        className="w-full  min-h-[500px] md:min-h-[600px] lg:max-h-[800px] object-cover  mask-b-from-60% mask-b-to-90% brightness-60 bg-scroll"
        width={2000}
        height={600}
      />
      <article className="absolute flex flex-col items-center lg:items-start  top-54 lg:top-70 h-full gap-4 md:gap-6  px-6 lg:px-22 w-full lg:max-w-[2000px] text-white bg-opacity-50">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center w-full lg:w-2/3  lg:text-start">
          Optimizing Industrial Performance, Protecting Assets, Building a
          Better Future.
        </h1>
        <p className="lg:text-[26px] md:text-2xl  font-semibold lg:leading-8 lg:w-1/2  text-center lg:text-start">
          SETECH SERVICE: Your Expert Partner in Reliability and Efficiency with
          World-Class Technologies.
        </p>
        <Link href="/case-study">
          <Button className="bg-[#071afd] hover:bg-[#071cfdc3] text-white border-none rounded-none px-14 py-8 text-lg font-semibold group cursor-pointer ">
            Learn More{" "}
            <MoveUpRight className="group-hover:rotate-45 duration-200 transition-all" />
          </Button>
        </Link>
      </article>
    </section>
  );
};

export default HeroSection;
