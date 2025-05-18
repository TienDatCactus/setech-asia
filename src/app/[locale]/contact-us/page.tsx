"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MailSearch, MapPinHouse } from "lucide-react";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "ceeisco@gmail.com",
          subject: `New contact from ${formData.name}`,
          ...formData,
        }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        // Reset form
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("Error sending email. Please try again later.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-10 w-full p-10">
      <div className="col-span-6 pt-4">
        <div className="border-b pb-4 border-[#d9d9d9]">
          <h1 className="text-5xl font-bold text-[#0d0e1d] leading-[3.5rem]">
            Let's partner to enhance your industrial reliability and efficiency.
          </h1>
          <p className="text-xl text-[#0d0e1d] mt-4">
            At SETECH, we are committed to exceptional customer service and
            support. If you are experiencing technical difficulties or need
            assistance with our services, please reach out to us.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div>h2]:text-2xl [&>div>h2]:font-bold [&>div>h2]:text-[#0d0e1d] [&>div>p]:text-[#0d0e1d] [&>div>p]:text-base">
          <div className="col-span-6 pl-0 pr-4 pt-6 border-r border-[#d9d9d9]">
            <MapPinHouse size={26} className="text-[#071afd]" />
            <h2>Address</h2>
            <p>
              Số nhà 2, Ngách 164/81 Đường Ỷ La, Tổ dân phố Đoàn Kết, Phường
              Dương Nội, Quận Hà Đông, Thành phố Hà Nội
            </p>
          </div>
          <div className="col-span-6 p-4">
            <MailSearch size={26} className="text-[#071afd]" />
            <h2>Contact</h2>
            <p>ceeisco@gmail.com</p>
            <p>0845619555</p>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="border border-[#d9d9d9] p-10">
          <div>
            <h1 className="text-3xl font-bold">Fill The Contact Form</h1>
            <p className="text-lg">
              Feel free to contact with us, we don&apos;t spam your email
            </p>
          </div>
          <form className="my-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-4 mb-6 justify-between">
              <div className="col-span-6 group">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  required
                  className="mt-1 block w-full border-none rounded-none shadow-none p-2"
                  value={formData.name}
                  onChange={handleChange}
                />
                <hr className="text-gray-300 transition-all duration-200 group-hover:text-[#071afd]" />
              </div>
              <div className="col-span-6 group">
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="mt-1 block w-full border-none shadow-none rounded-none p-2"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <hr className="text-gray-300 transition-all duration-200 group-hover:text-[#071afd]" />
              </div>
            </div>
            <div className="mb-4 group">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="mt-1 block w-full border-none shadow-none rounded-none p-2"
                value={formData.email}
                onChange={handleChange}
              />
              <hr className="text-gray-300 transition-all duration-200 group-hover:text-[#071afd]" />
            </div>
            <div className="mb-4 group">
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                required
                className="mt-2 block w-full border-none shadow-none rounded-none p-2 text-xl"
                value={formData.message}
                onChange={handleChange}
              />
              <hr className="text-gray-300 transition-all duration-200 group-hover:text-[#071afd]" />
            </div>
            <Button
              type="submit"
              className="text-center py-4 border border-transparent rounded-none shadow-[#071afd] font-medium text-white bg-[#071afd] hover:bg-[#071afd]/80 cursor-pointer text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              {!isSubmitting && <ArrowRight className="ml-2" />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
