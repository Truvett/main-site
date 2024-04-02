"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";
// import uiux from '/uiux.png'
// import webDev from '/webDev.jpg'
// import mobileDev from '/mobileDev.webp'
// import cloudComp from '/cloudComp.jpg'
// import aiChat from '/aiChat.webp'
// import maintenace from '/maintenace.jpg'


export function Services() {
  const service = [
    {
      image: '/Images/webDeve.png',
      title: "Web design and development",
      description: "Create strong web apps using the latest web tools and technology.",
    },
    {
      image: '/Images/mobileDev.jpg',
      title: "Mobile Apps design and development ",
      description: "We help you connect with lots of people by creating apps for iPhones, Android phones, and for all types of phones.",
    },
    {
      image: '/Images/uiuxDesign.png',
      title: "UI/UX Research and design",
      description: "We make your apps and websites easy to use and look great so that everyone loves using them.",
    },
    {
      image: '/Images/cloudComp.jpg',
      title: "Cloud database and backend integration",
      description: "We help you reach more people by setting up databases in the cloud and making sure everything works smoothly behind the scenes.",
    },
    {
      image: '/Images/aiChat.jpg',
      title: "AI Chatbot integration",
      description: "We help you talk to more people by adding smart chatbots to your website or app.",
    },
    {
      image: '/Images/launch.jpg',
      title: "Hosting, deployment and maintenance",
      description: "We handle everything from getting your website online to keeping it running smoothly.",
    },
  ];
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
       
       <Typography  placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}   variant="h1" color="blue-gray" className="mb-4">
        Our Services
       </Typography>
      </div>
      
          <div className="grid gap-5 grid-col-1 md:grid-cols-3 place-items-center justify-center ">
            {service.map(({ title, description, image }) => (
              <InfoCard key={title} title={title} image={image}>
                {description}
              </InfoCard>
            ))}
          </div>
    </section>
  );
}
export default Services;
