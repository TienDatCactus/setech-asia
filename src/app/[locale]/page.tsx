import { redirect } from "next/navigation";
import React from "react";
const page: React.FC = () => {
  redirect("/en/home");
};

export default page;
