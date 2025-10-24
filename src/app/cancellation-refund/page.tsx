"use client";

import { Footer } from "@/components";
import { Typography } from "@material-tailwind/react";

export default function CancellationRefund() {
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
            Cancellation & Refund Policy
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
              Truvett Solutions LLP believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </Typography>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              Cancellations will be considered only if the request is made within the same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
            </Typography>
            
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within the same day of receipt of the products.
            </Typography>
            
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within the same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
            </Typography>
            
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              In case of any Refunds approved by Truvett Solutions LLP, it'll take 3-5 days for the refund to be processed to the end customer.
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
