import { Button } from "@/components/ui/button";
import { Dot, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const page: React.FC = () => {
  const cases = [
    {
      title: "Advanced Thermal Diagnosis for Fired Heaters",
      date: "26 June 2023",
      technology: "Infrared Thermography",
      summary:
        "Drawing from extensive real-life experience, Setechsasia's case studies demonstrate how Infrared Thermography is critically applied for advanced diagnosis and troubleshooting of fired heaters, furnaces, and boilers. Examples cover identifying conditions like coke build-up, scale, burner problems, imbalanced heating, dry zones, and defects in components such as hangers and tube guides. These cases illustrate optimizing operations, increasing safety, and preventing costly premature shutdowns.",
    },
    {
      title: "IRT Applications in Industrial Equipment Maintenance",
      date: "26 June 2023",
      technology: "Infrared Thermography",
      summary:
        "Setechsasia utilizes case studies within its training and services to showcase the practical application of Infrared Thermography for maintenance and error diagnosis across various industrial equipment. This includes rotating mechanical equipment (fans, motors, compressors), static equipment and piping (valves, heat exchangers, vessels), and electrical systems (motors, transformers, MCCs, low voltage components). The cases highlight IRT as a fundamental tool in predictive maintenance programs.",
    },
    {
      title: "Leveraging IRT for Enhanced Reliability and Efficiency",
      date: "26 June 2023",
      technology: "Infrared Thermography",
      summary:
        "Case studies from Setechsasia illustrate the broader benefits of applying Infrared Thermography in industrial settings. These examples show how identifying thermal anomalies helps improve operational reliability, contribute to energy efficiency and fuel savings, and enhance safety by detecting potential hazards. The case studies are drawn from diverse industries like Refining & Petrochemicals, Power Generation, Oil & Gas, and others, showcasing real-world problem-solving.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-6">
        {!!cases.length &&
          cases?.map((item, index) => (
            <article
              key={index}
              className="border border-[#e0e0e0] hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div>
                <Image
                  src="/images/Picture2.svg"
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  width={2000}
                  height={300}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 *:text-gray-600 *:text-sm">
                  <p>{item.technology}</p>
                  <Dot size={30} />
                  <p>{item.date}</p>
                </div>
                <h1 className="text-5xl my-2 font-bold">{item.title}</h1>
                <p className="text-md line-clamp-3 my-4">{item?.summary}</p>
                <Link
                  href={`/case-study/${item?.title
                    ?.toLowerCase()
                    .split(" ")
                    .join("-")}`}
                >
                  <Button className="rounded-none cursor-pointer">
                    <span>Read More</span>
                    <MoveRight size={20} />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default page;
