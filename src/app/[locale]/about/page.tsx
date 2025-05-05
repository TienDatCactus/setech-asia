import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page: React.FC = () => {
  return (
    <>
      <div className="relative min-h-[400px] w-full ">
        <Image
          src="/images/pexels-fauxels-3183150.jpg"
          alt="about"
          fill
          className="w-full object-cover  "
        />
        <div className="bg-[#071afd] opacity-50  absolute inset-0"></div>
        <div className="absolute w-full h-full  text-white py-2  flex items-center justify-center  flex-col">
          <div className="max-w-[125rem] mx-auto px-10 flex items-center justify-center gap-6 flex-col ">
            <h1 className="text-8xl font-bold">About Us</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
