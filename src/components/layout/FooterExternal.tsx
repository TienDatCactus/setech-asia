"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";
const FooterExternal: React.FC = () => {
  return (
    <footer className="relative w-full min-h-[18.75rem] flex flex-col items-center justify-center *:text-white text-center bg-[#0d0e1d] py-10">
      <div className="max-w-[62.5rem] grid grid-cols-12 gap-6 [&_ul]:text-white [&_ul]:flex [&_ul]:flex-col p-10  [&_ul>h1]:text-2xl  [&_ul>h1]:font-bold [&_ul]:items-start [&_li]:text-start  [&_ul]:gap-2  items-start">
        <ul className="col-span-6 lg:col-span-2">
          <h1>About Us</h1>
          <li>Our team</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <ul className="col-span-6 lg:col-span-3">
          <h1>Services</h1>
          <li>Infrared Thermal Diagnosis / Inspection</li>
          <li>Online & Offline Industrial Cleaning</li>
          <li>Surface Protection / Asset Performance Solutions</li>
          <li>Providing Chemicals, Materials, Equipment</li>
          <li>Consulting</li>
        </ul>
        <ul className="col-span-6 lg:col-span-3">
          <h1>Training</h1>
          <li>Infrared Thermography for Industrial Maintenance Training</li>
          <li>Advanced IR Thermography for Fired Heater Training</li>
          <li>
            Other Training (e.g., Risk Assessment, Asset Integrity Management)
          </li>
          <li className="text-gray-500 text-sm">
            Instructor: Mr. Mikael Cronholm
          </li>
          <li className="text-gray-500 text-sm">Course Duration: 5 days</li>
        </ul>
        <div className="col-span-6 lg:col-span-4 flex flex-col items-start gap-4">
          <h1 className="font-bold text-2xl text-white">Contact Us</h1>
          <p className="text-white text-start">
            Get ready to work together for the better solution for your business
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Enter your email address"
              className="bg-[#f2f2f2] text-[#0d0e1d] border-none rounded-none px-4 py-2 w-full"
              style={{ width: "100%" }}
            />
            <Button
              size="icon"
              type="submit"
              className="bg-[#071afd] rounded-none hover:bg-[#071cfdc0] cursor-pointer"
            >
              <Send />
            </Button>
          </div>
        </div>
      </div>
      <div className="border-b border-[#ccc] w-full"></div>
      <p className="text-[#0d0e1d] text-sm mt-6">
        © Copyright 2025 | SETECH SERVICE COMPANY LIMITED
      </p>
    </footer>
  );
};

export default FooterExternal;
