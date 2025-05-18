"use client";
import { Aperture, Package, PaintBucket, ShieldPlus } from "lucide-react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useDevice from "@/hooks/useDevice";

const CarouselSection: React.FC = () => {
  const { isMobile, isSm, isMd, isLg } = useDevice();

  // Determine slides per view based on screen size
  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isSm && isMd && !isLg) return 2;
    return 4; // lg and above
  };

  const cards = [
    {
      icon: <Aperture className="text-[#1a29d2]" size={40} />,
      title: "Infrared Thermal Diagnosis & Training",
      description:
        "Expert services using thermography for condition monitoring, diagnosis, and predictive maintenance, including world-class inspections and training courses.",
    },
    {
      icon: <PaintBucket className="text-[#1a29d2]" size={40} />,
      title: "Industrial Cleaning Services",
      description:
        "Specialised online and offline cleaning for industrial furnaces and boilers to improve energy efficiency and production.",
    },
    {
      icon: <ShieldPlus className="text-[#1a29d2]" size={40} />,
      title: "Surface Protection & Performance Solutions",
      description:
        "Advanced solutions like HVTS and Cetek coating to protect assets from corrosion/erosion and enhance equipment efficiency.",
    },
    {
      icon: <Package className="text-[#1a29d2]" size={40} />,
      title: "Industrial Supply",
      description:
        "Providing essential chemicals, materials, and equipment, including Flir infrared cameras, for various industrial applications.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] min-h-[37.5rem] py-10">
      <div className="max-w-[125rem] mx-auto w-full h-full flex flex-col items-center justify-center">
        <div className="lg:w-2/3 mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold py-10">
            We provide expert solutions, services, and training for Industrial
            Reliability, Efficiency, and Asset Integrity
          </h1>
        </div>
        <div className="h-full w-[90%] mx-auto flex items-center justify-center py-4">
          <Swiper
            slidesPerView={getSlidesPerView()}
            spaceBetween={isMobile ? 15 : 30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper gap-2 min-h-[26.25rem] cursor-pointer"
          >
            {!!cards?.length &&
              [...cards, ...cards].map((card, index) => (
                <SwiperSlide
                  className="min-h-[360px] items-start justify-between gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out grid grid-rows-12"
                  key={index}
                >
                  <div className="row-span-4">{card.icon}</div>
                  <div className="row-span-8 flex flex-col items-start justify-center gap-2">
                    <h2 className="text-3xl font-semibold text-start">
                      {card.title}
                    </h2>
                    <p className="text-[18px] text-start text-gray-600">
                      {card.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
