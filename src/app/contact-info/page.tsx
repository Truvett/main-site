"use client";

import { Footer } from "@/components";
import { Typography } from "@material-tailwind/react";

export default function ContactInfo() {
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
            Contact Us
          </Typography>

          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            className="mb-8 text-gray-400 text-sm"
          >
            Last updated on{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Typography>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-300"
            >
              You may contact us using the information below:
            </Typography>

            <div className="space-y-4">
              <div>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  variant="h6"
                  className="text-white mb-2"
                >
                  Merchant Legal Entity Name:
                </Typography>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  className="text-gray-300"
                >
                  TRUVETT SOLUTIONS LLP
                </Typography>
              </div>

              <div>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  variant="h6"
                  className="text-white mb-2"
                >
                  Registered Address:
                </Typography>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  className="text-gray-300"
                >
                  At Dhodhadkuva Hanuman Fa, Taluka Pardi.di.valsad, Dhodhadkuva, Valsad, Kaprada, Gujarat, India, 396126
                </Typography>
              </div>

              <div>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  variant="h6"
                  className="text-white mb-2"
                >
                  Email:
                </Typography>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  className="text-gray-300"
                >
                  <a
                    href="mailto:solutions@truvett.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    solutions@truvett.com
                  </a>
                </Typography>
              </div>

              <div>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  variant="h6"
                  className="text-white mb-2"
                >
                  Phone:
                </Typography>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  className="text-gray-300"
                >
                  +91 9909089796
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
