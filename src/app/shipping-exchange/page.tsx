"use client";

import { Footer } from "@/components";
import { Typography } from "@material-tailwind/react";

export default function ShippingExchange() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 px-8">
        <div className="container mx-auto max-w-4xl">
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            variant="h1"
            className="mb-4 text-white"
          >
            Shipping & Delivery Policy
          </Typography>
          
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            className="mb-8 text-gray-400 text-sm"
          >
            Last updated on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </Typography>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              Truvett Solutions LLP provides digital services and IT solutions. We do not currently deliver any physical products.
            </Typography>

            
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              All our services are delivered digitally through email or secure online platforms. There is no physical shipping involved in our service delivery.
            </Typography>
            
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              For any questions regarding service delivery or project timelines, please contact us through our Contact Us page.
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
