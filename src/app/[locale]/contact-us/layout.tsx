"use client";

import { SideBar } from "@/components/pages/case-study";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={`antialiased min-h-screen`}>
        <div className="relative min-h-[400px] w-full ">
          <Image
            src="/images/pexels-fauxels-3184291.jpg"
            alt="about"
            fill
            className="w-full object-cover object-center"
          />
          <div className="bg-[#071afd] opacity-50  absolute inset-0"></div>
          <div className="absolute w-full h-full  text-white py-2  flex items-center justify-center  flex-col">
            <div className="max-w-[125rem] mx-auto px-10 flex items-center justify-center gap-6 flex-col ">
              <h1 className="text-8xl font-bold">"Contact Us"</h1>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/contact-us">
                      Contact Us
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className=" max-w-[1200px] mx-auto px-10 py-20">
          <div>{children}</div>
        </div>
      </main>
    </>
  );
}
