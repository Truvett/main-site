"use client";

import { Footer } from "@/components";
import { Typography } from "@material-tailwind/react";

export default function TermsAndConditions() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 px-8">
        <div className="container mx-auto max-w-4xl">
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            variant="h1"
            className="mb-8 text-white"
          >
            Terms and Conditions
          </Typography>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                1. Introduction
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                Welcome to Truvett Solutions LLP. These terms and conditions outline the rules and regulations for the use of our services and website.
              </Typography>
            </section>

            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                2. Acceptance of Terms
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </Typography>
            </section>

            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                3. Use License
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </Typography>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our platform</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                4. Service Terms
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                Truvett Solutions LLP reserves the right to modify or discontinue services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </Typography>
            </section>

            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                5. Limitation of Liability
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                In no event shall Truvett Solutions LLP or its suppliers be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damage.
              </Typography>
            </section>

            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                6. Governing Law
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </Typography>
            </section>

            <section>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h4"
                className="mb-4 text-white"
              >
                7. Contact Information
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                If you have any questions about these Terms and Conditions, please contact us through our Contact Us page.
              </Typography>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
