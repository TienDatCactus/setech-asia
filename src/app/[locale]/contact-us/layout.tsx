"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative min-h-[260px] lg:min-h-[400px] w-full ">
        <Image
          src="/images/pexels-fauxels-3184291.jpg"
          alt="about"
          fill
          className="w-full object-cover object-center"
        />
        <div className="bg-[#071afd] opacity-50  absolute inset-0"></div>
        <div className="absolute w-full h-full  text-white py-2  flex items-center justify-center  flex-col">
          <div className="max-w-[125rem] mx-auto px-10 flex items-center justify-center gap-6 flex-col ">
            <h1 className="text-6xl lg:text-8xl font-bold">Contact Us</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/contact-us">Contact Us</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[1200px] lg:mx-auto px-10 p-10 lg:py-20">
        {children}
      </div>
    </>
  );
}
