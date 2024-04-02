"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";


export function Faqs() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value:any) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>

        <Accordion placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How long does it take to build a website or app?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        The time it takes to build a website or app can vary depending on the complexity and features required. Simple websites may take a few weeks, while more complex projects could take several months. We&apos;ll work closely with you to establish a timeline that fits your needs.
        </AccordionBody>
      </Accordion>
      <Accordion placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Do I need to provide content for my website or app?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        While it&apos;s helpful if you have content ready, we also offer content creation services if needed. We&apos;ll work with you to develop engaging content that aligns with your brand and goals.
        </AccordionBody>
      </Accordion>
      <Accordion placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What happens after my website or app is launched?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        After launch, we provide ongoing support, hosting, and maintenance services to ensure your website or app continues to run smoothly. We&apos;ll also monitor performance and make updates as needed to keep your digital presence up-to-date.
        </AccordionBody>
      </Accordion>
      <Accordion placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} open={open === 4} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How do you ensure my website or app is user-friendly?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        We prioritize user experience (UX) design throughout the development process to ensure your website or app is intuitive and easy to navigate. We conduct user testing and gather feedback to make improvements and optimize usability.
        </AccordionBody>
      </Accordion>
      </div>
    </section>
  );
}

export default Faqs;
