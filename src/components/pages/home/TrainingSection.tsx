"use client";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Trophy } from "lucide-react";

const TrainingSection: React.FC = () => {
  return (
    <section className="relative h-full w-full min-h-[50rem] bg-[#f5f5f5]">
      <div className="grid grid-cols-12 max-w-[125rem] mx-auto text-[#0d0e1d] py-20 px-10">
        <article className="col-span-6 flex flex-col items-start justify-center gap-4 px-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-6xl font-bold">
              Proven Expertise in Thermal Science & Fundamentals
            </h1>
            <p className="text-xl">
              Our training provides foundational scientific knowledge in thermal
              science and IRT measurement, adhering strictly to{" "}
              <b>
                <i>ISO 18436-7 standards</i>
              </b>
              . This is an exclusive program developed and led by{" "}
              <u className="hover:text-[#071afd] cursor-pointer">
                Mr. Mikael Cronholm
              </u>
              , a world-renowned expert with decades of experience in the field,
              bringing unparalleled practical knowledge to the course.
            </p>
          </div>
          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              className="min-h-[25rem] w-full"
              defaultChecked={true}
              defaultValue="item-1"
            >
              <AccordionItem value="item-1" defaultChecked={true}>
                <AccordionTrigger className="text-xl flex items-center">
                  <Plus className="mr-2" />
                  <h1 className="text-2xl font-semibold">
                    Insightful Diagnosis & Real-world Application
                  </h1>
                </AccordionTrigger>
                <AccordionContent className="text-xl">
                  The course focuses on <b>practical applications</b> of IRT for
                  <b>condition monitoring</b> and <b>fault diagnosis</b> in
                  industrial settings. You will learn to diagnose issues in key
                  equipment like{" "}
                  <b>
                    rotating machinery, static & fluid flow systems, and
                    electrical components
                  </b>
                  . For specialized needs, we offer an{" "}
                  <b>Advanced Course for Fired Heaters</b>. Learning is enhanced
                  by <b>extensive real-life case studies</b> drawn from the
                  instructor's vast experience, enabling you to perform
                  insightful analysis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl flex items-center">
                  <Plus className="mr-2" />
                  <h1 className="text-2xl font-semibold">
                    Empowering Program Management & Dedicated Support
                  </h1>
                </AccordionTrigger>
                <AccordionContent className="text-xl">
                  Gain the expertise to{" "}
                  <b>design, implement, and effectively manage</b> your own IRT
                  program. The training equips you with skills to monitor,
                  analyze, and create actionable reports. With the expert
                  tutor's guidance and the option for onsite mentoring, you
                  receive dedicated support to{" "}
                  <b>maximize the benefits of your IRT equipment</b> and{" "}
                  <b>avoid costly mistakes</b>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </article>
        <div className="col-span-6 relative group">
          <Image
            src="/images/pexels-rezwan-1216589.jpg"
            alt="mentoring"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
            width={500}
            height={300}
          />
          <div className="absolute bottom-2 right-2 bg-white p-4 text-[#0d0e1d] group-hover:scale-105 transition-all duration-300 ease-in-out z-100 w-[140px] h-[140px]">
            <div className="bg-[#f5f5f5] w-[50px] h-[50px] rounded-full flex items-center justify-center mb-2">
              <Trophy className="text-[#071afd]" size={30} />
            </div>
            <h1>100% Customer Satisfaction</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
