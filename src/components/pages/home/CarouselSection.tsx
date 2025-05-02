"use client";
import { Aperture, Package, PaintBucket, ShieldPlus } from "lucide-react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CarouselSection: React.FC = () => {
  const cards = [
    {
      icon: <Aperture className="text-[#1a29d2]" size={40} />,
      title: "Infrared Thermal Diagnosis & Training", // Dựa trên [1-7]
      description:
        "Expert services using thermography for condition monitoring, diagnosis, and predictive maintenance, including world-class inspections and training courses.", // Dựa trên [2, 4-9]
    },
    {
      icon: <PaintBucket className="text-[#1a29d2]" size={40} />,
      title: "Industrial Cleaning Services", // Dựa trên [1, 2, 7]
      description:
        "Specialised online and offline cleaning for industrial furnaces and boilers to improve energy efficiency and production.", // Dựa trên [1, 2, 7, 10]
    },
    {
      icon: <ShieldPlus className="text-[#1a29d2]" size={40} />,
      title: "Surface Protection & Performance Solutions", // Dựa trên [1, 2, 7]
      description:
        "Advanced solutions like HVTS and Cetek coating to protect assets from corrosion/erosion and enhance equipment efficiency.", // Dựa trên [1, 7]
    },
    {
      icon: <Package className="text-[#1a29d2]" size={40} />,
      title: "Industrial Supply", // Dựa trên [2, 7]
      description:
        "Providing essential chemicals, materials, and equipment, including Flir infrared cameras, for various industrial applications.", // Dựa trên [2, 7]
    },
  ];
  return (
    <section className="bg-[#f5f5f5] min-h-[600px] py-10 ">
      <div className="w-2/3 mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl text-center font-bold py-10">
          We provide expert solutions, services, and training for Industrial
          Reliability, Efficiency, and Asset Integrity
        </h1>
      </div>
      <div className="h-full w-[90%] mx-auto flex items-center justify-center">
        <Swiper
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper gap-2 min-h-[400px] cursor-pointer"
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
    </section>
  );
};

export default CarouselSection;
