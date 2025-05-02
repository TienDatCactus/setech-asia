import { CarouselSection, HeroSection } from "@/components/pages/home";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const page: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
    </main>
  );
};

export default page;
