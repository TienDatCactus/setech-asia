import Image from "next/image";
import React from "react";
const ServiceSection: React.FC = () => {
  const trainingData = [
    {
      icon: "/icons/science-book-library-svgrepo-com.svg",
      title: "Thermal Science & IRT Fundamentals",
      description:
        "Acquire the foundational knowledge of thermal science and infrared thermography principles, interpretation, and analysis based on ISO 18436-7 standards.",
    },
    {
      icon: "/icons/industry-worker-with-cap-protection-and-a-laptop-svgrepo-com.svg",
      title: "Industrial Application & Diagnosis",
      description:
        "Learn to apply IRT techniques for condition monitoring and fault diagnosis across various industrial equipment, supported by real-life case studies and practical analysis skills.",
    },
    {
      icon: "/icons/industrial-graphics-svgrepo-com.svg",
      title: "Program Implementation & Expertise",
      description:
        "Gain expertise in designing, implementing, and effectively managing IRT maintenance programs, supported by expert guidance and mentoring.",
    },
  ];
  return (
    <section className="relative w-full min-h-[1600px]   md:min-h-[800px] lg:min-h-[37.5rem] bg-[#0d0e1d]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#ffffff33_1px,#0d0e1d_1px)] bg-[size:20px_20px] "></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 max-w-[1600px] mx-auto text-white py-20">
        <h1 className="text-4xl font-bold text-center">
          At SETECH SERVICE, we partner with you through a structured approach
          to optimize your operational reliability, enhance asset integrity, and
          achieve significant cost savings.
        </h1>
        <div>
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
            {trainingData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 text-center"
              >
                <div className="flex items-center justify-center  h-30 w-30 rounded-full  border-2 bg-white">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                  />
                </div>
                <dt className="text-3xl font-bold my-2">{item.title}</dt>
                <dd className="text-lg">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
