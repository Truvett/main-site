"use client";

import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export function ContactUs() {
  return (
    <section id="contactus" className="px-8 py-8 lg:py-16">
      <div className="container mx-auto md:text-center">
        <Typography
          placeholder={""}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          variant="h1"
          color="blue-gray"
          className="!text-3xl lg:!text-5xl"
        >
          Contact Us
        </Typography>
        <Typography
          placeholder={""}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500"
        >
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 md:gap-x-12 gap-y-6 lg:grid-cols-2 items-center md:px-20">
          <Image
            width={500}
            height={500}
            src="/Images/contact.jpg"
            alt="contact"
            className="w-full h-full lg:max-h-[510px] hidden md:block"
          />
          <div className="flex justify-start flex-col gap-5 items-start">
            <div className="flex justify-start gap-5 items-center">
              <div className="grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
                <BiLogoGmail className="h-6 w-6" />
              </div>

              <Link
                href="mailto:contact@truvett.com"
                target="_blank"
                className="text-lg font-medium"
              >
                contact@truvett.com
              </Link>
            </div>
            <div className="flex justify-start gap-5 items-center">
              <div className="grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
                <IoCall className="h-6 w-6" />
              </div>
              <Link
                href="tel:9909089796"
                target="_blank"
                className="text-lg font-medium"
              >
                +91 9909089796
              </Link>
            </div>
            <div className="flex justify-start gap-5 items-center">
              <div className="grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
                <IoLogoWhatsapp className="h-6 w-6" />
              </div>
              <Link
                href="https://wa.me/9909089796"
                target="_blank"
                className="text-lg font-medium"
              >
                +91 9909089796
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
