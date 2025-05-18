"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MailSearch, MapPinHouse, Menu, Phone, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HeaderExternal: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <motion.header
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full z-50"
    >
      <motion.div
        key="header"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 60, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden bg-[#f5f5f5] px-4 md:px-10 *:text-[#0d0e1d] flex flex-col lg:flex-row items-center justify-around"
      >
        <div className="flex items-center gap-2">
          <MapPinHouse size={20} className="text-[#071afd]" />
          <span className="truncate w-[300px] md:w-full text-ellipsis wrap-normal">
            Số nhà 2, Ngách 164/81 Đường Ỷ La, Tổ dân phố Đoàn Kết, Phường Dương
            Nội, Quận Hà Đông, Thành phố Hà Nội
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-[#071afd]" />
            <span>
              <a
                href="tel:0845619555"
                className="cursor-pointer hover:underline"
              >
                0845619555
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MailSearch size={20} className="text-[#071afd]" />
            <span>
              <a
                href="mailto:ceeisco@gmail.com"
                className="cursor-pointer hover:underline"
              >
                ceeisco@gmail.com
              </a>
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div className="flex items-center justify-between h-[6.25rem] *:text-white bg-white w-full shadow-md px-4 md:px-10">
        <Link href={"/home"} className="flex items-center gap-2">
          <Image
            src={"/images/Picture1.png"}
            alt="setech"
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <span className="md:block hidden font-bold text-2xl lg:text-3xl text-[#0d0e1d]">
            SETECH SERVICE CO., LTD
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-8 *:text-[#0d0e1d] text-lg lg:text-[1.25rem]">
            <li>
              <nav>
                <Link href={"/case-study"}>Case Study</Link>
              </nav>
            </li>
            <li>
              <nav>
                <Link href={"/contact-us"}>Contact Us</Link>
              </nav>
            </li>
          </ul>
          <a
            className="cursor-pointer"
            role="button"
            onClick={() => setOpenSidebar(true)}
          >
            <Menu className="text-2xl hover:scale-110 duration-100 ease-in-out text-[#0d0e1d]" />
          </a>
          {openSidebar && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
                onClick={() => setOpenSidebar(false)} // optional: click to close
              />

              <ScrollArea>
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  exit={{ x: 400 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-0 right-0 w-full sm:w-[25rem] h-full bg-white shadow-lg p-4 z-50 overflow-auto *:text-[#0d0e1d]"
                >
                  <div className="flex items-center justify-end">
                    <Button
                      variant="outline"
                      className="border-none hover:bg-[#071afd] hover:text-white cursor-pointer"
                      size={"icon"}
                      onClick={() => setOpenSidebar(false)}
                    >
                      <X />
                    </Button>
                  </div>
                  <article>
                    <h1 className="font-bold text-xl md:text-[1.875rem]">
                      SETECH SERVICE CO., LTD
                    </h1>
                    <p className="text-base md:text-[1.25rem] leading-relaxed md:leading-[1.75rem] my-4">
                      Our goal is to help customers minimize operating and
                      maintenance costs, avoid the risk of operational
                      incidents, protect equipment, save energy, and increase
                      production efficiency through the application of leading
                      technologies and methods.
                    </p>
                    <Image
                      src={"/images/Picture2.jpg"}
                      alt="setech"
                      width={1000}
                      height={10}
                      className="w-full h-auto object-contain my-4"
                    />
                  </article>
                  <dl>
                    <div className="my-6 md:my-8">
                      <MapPinHouse size={30} className="text-[#071afd]" />
                      <dt className="font-bold text-xl md:text-[1.875rem]">
                        Address
                      </dt>
                      <dd className="text-base md:text-[1.25rem] leading-relaxed md:leading-[1.75rem]">
                        Số nhà 2, Ngách 164/81 Đường Ỷ La, Tổ dân phố Đoàn Kết,
                        Phường Dương Nội, Quận Hà Đông, Thành phố Hà Nội
                      </dd>
                    </div>
                    <div className="my-6 md:my-8">
                      <MailSearch size={30} className="text-[#071afd]" />
                      <dt className="font-bold text-xl md:text-[1.875rem]">
                        Contact
                      </dt>
                      <dd className="text-base md:text-[1.25rem] leading-relaxed md:leading-[1.75rem]">
                        ceeisco@gmail.com
                      </dd>
                      <dd className="text-base md:text-[1.25rem] leading-relaxed md:leading-[1.75rem]">
                        0845619555
                      </dd>
                    </div>
                  </dl>
                  <ul className="md:hidden flex flex-col space-y-4 mt-6 border-t pt-6">
                    <li className="text-lg">
                      <Link href={"/case-study"}>Case Study</Link>
                    </li>
                    <li className="text-lg">Services</li>
                    <li className="text-lg">
                      <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                  </ul>
                </motion.div>
              </ScrollArea>
            </>
          )}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default HeaderExternal;
