"use client";

import { Footer } from "@/components";
import { Typography } from "@material-tailwind/react";

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                1. Information We Collect
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                We collect information that you provide directly to us, including but not limited to:
              </Typography>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 ml-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Project requirements and preferences</li>
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
                2. How We Use Your Information
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                We use the information we collect to:
              </Typography>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Develop new products and services</li>
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
                3. Information Sharing
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </Typography>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
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
                4. Data Security
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
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
                5. Your Rights
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                You have the right to:
              </Typography>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
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
                6. Cookies
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
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
                7. Changes to This Policy
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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
                8. Contact Us
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-300"
              >
                If you have any questions about this Privacy Policy, please contact us through our Contact Us page.
              </Typography>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
