import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
const SideBar: React.FC = () => {
  const [viewMore, setViewMore] = useState(false);
  const tags = [
    "Infrared Thermography",
    "Fired Heaters",
    "Furnaces",
    "Boilers",
    "Rotating Equipment",
    "Static Equipment",
    "Piping",
    "Electrical Systems",
    "MCC",
    "Low Voltage Components",
    "Predictive Maintenance",
    "Troubleshooting",
    "Diagnosis",
    "Energy Efficiency",
    "Fuel Saving",
    "Asset Integrity",
    "Operational Reliability",
  ];
  const originalCategories = useMemo(
    () => [
      "Fired Heaters / Furnaces / Boilers",
      "Rotating Equipment",
      "Static Equipment & Piping",
      "Electrical Systems",
      "MCC & Low Voltage Components",
      "Predictive Maintenance Applications",
      "Diagnosis & Troubleshooting",
      "Energy Efficiency / Fuel Saving",
      "Asset Integrity & Operational Reliability",
      "Safety Applications",
      "Refining & Petrochemicals Industry",
      "Power Generation Industry",
      "Oil & Gas Industry",
      "Fertilizer / Agrichem Industry",
      "Other Industrial Applications",
    ],
    []
  );
  const [categories, setCategories] = useState(originalCategories);
  useEffect(() => {
    if (viewMore) {
      setCategories(originalCategories);
    } else {
      setCategories(originalCategories.slice(0, 6));
    }
  }, [viewMore, originalCategories]);
  console.log(viewMore);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <aside className="col-span-4 flex flex-col gap-4 sticky top-0">
      {/* Search */}
      <div className="bg-[#f5f5f5] p-4">
        <label className="text-2xl font-bold">Search</label>
        <div className="flex items-center justify-center gap-2 mt-4 bg-white p-2 focus-within:border-[#071afd] border border-[#ccc] transition-colors duration-500">
          <Search />
          <Input
            type="search"
            className="bg-white border-none shadow-none rounded-none "
            placeholder="Type to search..."
          />
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#f5f5f5] p-4">
        <label className="text-2xl font-bold">Categories</label>
        <AnimatePresence mode="wait">
          <motion.ul
            initial={{ height: 300 }}
            animate={{ height: "auto" }}
            exit={{ height: 300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={viewMore ? "expanded" : "collapsed"}
            id="categories"
            className="flex flex-col gap-2 mt-4 [&>li]:text-[#0d0e1d] [&>li]:text-lg  [&>li]:flex [&>li]:items-center [&>li]:justify-between "
          >
            {!!categories?.length &&
              categories?.map((item, index) => (
                <li key={index}>
                  <Link
                    href=""
                    className="hover:text-[#071afd] transition-colors duration-200 my-1"
                  >
                    {item}
                  </Link>
                  <span>(18)</span>
                </li>
              ))}
            <Button
              className="cursor-pointer rounded-none"
              onClick={handleViewMore}
            >
              {viewMore ? "Collapse" : "Expand"}
            </Button>
          </motion.ul>
        </AnimatePresence>
      </div>
      {/* Recent posts */}
      <div className="bg-[#f5f5f5] p-4">
        <h1 className="text-2xl font-bold">Recent Posts</h1>
        <dl className="">
          <div className="grid grid-cols-12 gap-2 justify-between mt-4">
            <div className="col-span-3 flex items-center justify-center ">
              <Image
                src="/images/Picture2.svg"
                alt="Description of image"
                className="w-full h-full object-cover rounded-none"
                width={2000}
                height={300}
              />
            </div>
            <div className="col-span-9 flex flex-col items-start justify-center">
              <dt className="text-xl font-bold line-clamp-2">
                Recent Post Title
              </dt>
              <dl className="text-sm">02/26/2023</dl>
            </div>
          </div>
        </dl>
      </div>
      {/* Tags */}
      <div className="bg-[#f5f5f5] p-4">
        <h1 className="text-2xl font-bold">Tags</h1>
        <ul className="flex flex-wrap gap-2 mt-4">
          {!!tags?.length &&
            tags?.map((item, index) => (
              <li
                key={index}
                className="bg-white cursor-pointer hover:bg-[#071afd] hover:text-white hover:shadow-lg p-2 shadow transition-all duration-200 ease-in-out "
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
