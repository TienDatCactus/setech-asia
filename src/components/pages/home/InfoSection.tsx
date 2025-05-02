import { Button } from "@/components/ui/button";
import { Check, MoveUpRight, Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";
const InfoSection: React.FC = () => {
  const detailList = [
    {
      title:
        "World-Class Infrared Thermal Inspection & Diagnosis Service and Training",
    },
    {
      title: "Hotspot/Online and Offline Industrial Cleaning Services",
    },
    {
      title: "Surface Protection & Enhancing Asset Performance Solutions",
    },
    {
      title: "Providing Industrial Chemical, Material, and Equipment",
    },
  ];
  return (
    <section className="w-full min-h-[37.5rem] bg-white flex items-center justify-center">
      <div className="grid grid-cols-12 h-full  max-w-[1200px] mx-auto py-20">
        <div className="col-span-6 relative  group">
          <Image
            src="/images/info1.jpg"
            loading="lazy"
            alt="setech"
            width={1000}
            height={300}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute bottom-2 left-2 bg-white p-4 text-[#0d0e1d] group-hover:scale-105 transition-all duration-300 ease-in-out z-100 w-[140px] h-[140px]">
            <div className="bg-[#f5f5f5] w-[50px] h-[50px] rounded-full flex items-center justify-center mb-2">
              <Trophy className="text-[#071afd]" size={30} />
            </div>
            <h1>100% Customer Satisfaction</h1>
          </div>
        </div>
        <article className="col-span-6 flex flex-col items-start justify-center gap-4 p-10">
          <h1 className="text-4xl font-bold leading-tight hover:text-[#071afd]">
            Easily Enhance Your Operations With Our Core Expertise
          </h1>
          <p className="text-xl">
            Keep the plant running in a profitable mode, with as few
            interruptions as possible and at the lowest cost, while maintaining
            a safe operation
          </p>
          <dl>
            {detailList.map((item, index) => (
              <div className="flex items-center gap-4 my-4" key={index}>
                <dt>
                  <Check className="text-[#071afd]" size={30} />
                </dt>
                <dd className="text-xl font-semibold">{item?.title}</dd>
              </div>
            ))}
          </dl>
          <Button className="rounded-none px-10 py-8 text-xl bg-[#071afd] text-white border-none hover:bg-[#071cfdc3] group cursor-pointer flex items-center gap-2">
            Learn More <MoveUpRight />
          </Button>
        </article>
      </div>
    </section>
  );
};

export default InfoSection;
