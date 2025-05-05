"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MailSearch, MapPinHouse, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Header: React.FC = () => {
  const [yAxis, setYAxis] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {
    const handleScroll = () => setYAxis(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, height: 200, y: -100 }}
      animate={{ opacity: 1, height: 100, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute w-full z-50"
    >
      <AnimatePresence initial={false}>
        {yAxis <= 1 && (
          <motion.div
            key="header"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 60, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden bg-[#071afd] px-10 *:text-white flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <MapPinHouse size={20} />
              <span>
                Số nhà 2, Ngách 164/81 Đường Ỷ La, Tổ dân phố Đoàn Kết, Phường
                Dương Nội, Quận Hà Đông, Thành phố Hà Nội
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={20} />
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
                <MailSearch size={20} />
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
        )}
      </AnimatePresence>

      <motion.div className="flex items-center justify-between h-[6.25rem] *:text-white w-full border-b border-[#b5b5b5] px-10">
        <div className="flex items-center gap-2">
          <Image
            src={"/images/Picture1.png"}
            alt="setech"
            width={60}
            height={60}
          />
          <span className="font-bold text-[1.875rem]">
            SETECH SERVICE CO., LTD
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-8 text-[1.25rem]">
            <li>
              <nav><Link href={"/about"}>About Us</Link></nav>
            </li>
            <li>
              <nav>Services</nav>
            </li>
            <li>
              <nav>Contact Us</nav>
            </li>
          </ul>
          <a
            className="cursor-pointer"
            role="button"
            onClick={() => setOpenSidebar(true)}
          >
            <Menu className="text-2xl hover:scale-110 duration-100 ease-in-out" />
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
                  className="fixed top-0 right-0 w-[25rem] h-full bg-white shadow-lg p-4 z-50 overflow-auto *:text-[#0d0e1d]"
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
                    <h1 className="font-bold text-[1.875rem]">
                      SETECH SERVICE CO., LTD
                    </h1>
                    <p className="text-[1.25rem] leading-[1.75rem] my-4">
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
                    <div className="my-8">
                      <MapPinHouse size={30} className="text-[#071afd]" />
                      <dt className="font-bold text-[1.875rem]">Address</dt>
                      <dd className="text-[1.25rem] leading-[1.75rem] ">
                        Số nhà 2, Ngách 164/81 Đường Ỷ La, Tổ dân phố Đoàn Kết,
                        Phường Dương Nội, Quận Hà Đông, Thành phố Hà Nội
                      </dd>
                    </div>
                    <div className="my-8">
                      <MailSearch size={30} className="text-[#071afd]" />
                      <dt className="font-bold text-[1.875rem]">Contact</dt>
                      <dd className="text-[1.25rem] leading-[1.75rem]">
                        ceeisco@gmail.com
                      </dd>
                      <dd className="text-[1.25rem] leading-[1.75rem]">
                        0845619555
                      </dd>
                    </div>
                  </dl>
                  <ul></ul>
                </motion.div>
              </ScrollArea>
            </>
          )}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
