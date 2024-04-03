"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaAward } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: FaAward,
    title: "Quality",
    children:
      "We make sure you keep coming back to us by always giving you great service. We pay close attention to every little thing we do to make sure your brand looks amazing.",
  },
  {
    icon: FaLightbulb,
    title: "Innovative",
    children:
      "Social media is always changing, and if we don't keep up, we can fall behind. Staying creative and coming up with new ideas is how we stay ahead of others in our field.",
  },
  {
    icon: MdDevices,
    title: "Responsiveness",
    children:
      "We value your time and believe in clear and quick communication. We make sure to respond to your requests as soon as we can, so you don't have to wait around.",
  },
  {
    icon: FaRegHandshake,
    title: "Collaboration",
    children:
      "We're all about being open and working together as a team. We really want to know your thoughts and use them to make our marketing plan even better for you!",
  },
];

export function Vision() {
  return (
    <section className="py-10 md:py-28 px-4">
      <div className="container mx-auto mb-20  md:text-center">
       
        <Typography  placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}   variant="h1" color="blue-gray" className="mb-4">
        Our  Vision
        </Typography>
        <Typography  placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}  
          variant="lead"
          className="mx-auto w-full md:px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
         &ldquo;Our vision at Truvett Web Design & Development Company is to make the internet a better place, one website at a time. We aim to create beautiful and user-friendly websites that help businesses thrive online. Our goal is to be a trusted partner for companies of all sizes, providing them with the tools they need to succeed in the digital world.&ldquo;
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Vision;
