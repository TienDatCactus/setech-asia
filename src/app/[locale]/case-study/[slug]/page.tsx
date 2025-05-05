"use client";
import { useParams } from "next/navigation";
import React from "react";
const page: React.FC = () => {
  const { slug } = useParams();
  console.log(typeof slug == "string" && slug?.split("-").join(" "));
  return (
    <div>
      <div></div>
    </div>
  );
};

export default page;
