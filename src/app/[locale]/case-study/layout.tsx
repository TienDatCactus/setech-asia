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
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <main className={`antialiased min-h-screen`}>
        <div className="relative min-h-[400px] w-full ">
          <Image
            src="/images/pexels-fauxels-3183150.jpg"
            alt="about"
            fill
            className="w-full object-cover"
          />
          <div className="bg-[#071afd] opacity-50  absolute inset-0"></div>
          <div className="absolute w-full h-full  text-white py-2  flex items-center justify-center  flex-col">
            <div className="max-w-[125rem] mx-auto px-10 flex items-center justify-center gap-6 flex-col ">
              <h1 className="text-8xl font-bold">Case Study</h1>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Case Study</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 max-w-[1200px] mx-auto px-10 py-20 relative">
          <div className="col-span-8 min-h-screen">
            <Breadcrumb className="mb-4">
              <BreadcrumbList className="text-[#0d0e1d]">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/case-study">Case Study</BreadcrumbLink>
                </BreadcrumbItem>
                {segment && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#0d0e1d]">
                        {segment
                          .split("-")
                          .map((item, index) =>
                            index === 0
                              ? item.replace(/^\w/, (c) => c.toUpperCase())
                              : item
                          )
                          .join(" ")}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
            {children}
          </div>
          <SideBar />
        </div>
      </main>
    </>
  );
}
