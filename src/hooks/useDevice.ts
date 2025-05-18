"use client";

import { useEffect, useState } from "react";

type DeviceType = "mobile" | "sm" | "md" | "lg" | "xl" | "2xl";

interface DeviceInfo {
  isMobile: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  device: DeviceType;
}

const useDevice = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
    device: "mobile",
  });

  useEffect(() => {
    // Function to update the device state based on window width
    const updateDeviceInfo = () => {
      const width = window.innerWidth;

      // Default to mobile
      let device: DeviceType = "mobile";

      // Check breakpoints according to Tailwind's default breakpoints
      const isMobile = width < 640;
      const isSm = width >= 640;
      const isMd = width >= 768;
      const isLg = width >= 1024;
      const isXl = width >= 1280;
      const is2Xl = width >= 1536;

      // Set the most specific device type
      if (is2Xl) device = "2xl";
      else if (isXl) device = "xl";
      else if (isLg) device = "lg";
      else if (isMd) device = "md";
      else if (isSm) device = "sm";
      else device = "mobile";

      setDeviceInfo({
        isMobile,
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
        device,
      });
    };

    // Update on mount
    updateDeviceInfo();

    // Add resize event listener
    window.addEventListener("resize", updateDeviceInfo);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
};

export default useDevice;
