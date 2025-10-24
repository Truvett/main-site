"use client";

import React from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { FaPaperPlane } from "react-icons/fa";
import { FormEvent } from "react";

function ContactUs() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );
    
    // Open email client
    window.location.href = `mailto:solutions@truvett.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contactus" className="px-8 py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            className="text-sm text-blue-400 font-medium"
          >
            Get in Touch
          </Typography>
        </div>
        
        <Typography
          placeholder={""}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          variant="h2"
          className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        >
          Contact Us
        </Typography>
        <Typography
          placeholder={""}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          className="mx-auto w-full text-gray-400 text-lg lg:w-5/12"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and our team will get back to you as soon as possible.
        </Typography>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto max-w-2xl">
          <div className="rounded-2xl bg-gradient-to-br from-blue-950/25 via-purple-950/20 to-gray-900/80 backdrop-blur-xl border border-blue-500/15 p-8 md:p-12 shadow-2xl shadow-blue-500/10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography
                    placeholder={""}
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    variant="small"
                    className="mb-2 text-left font-medium text-gray-300"
                  >
                    First Name
                  </Typography>
                  <Input
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    size="lg"
                    placeholder="First Name"
                    name="first-name"
                    className="!border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-500 focus:!border-blue-500"
                    containerProps={{
                      className: "min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                    crossOrigin={""}
                  />
                </div>
                <div>
                  <Typography
                    placeholder={""}
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    variant="small"
                    className="mb-2 text-left font-medium text-gray-300"
                  >
                    Last Name
                  </Typography>
                  <Input
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    size="lg"
                    placeholder="Last Name"
                    name="last-name"
                    className="!border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-500 focus:!border-blue-500"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                    crossOrigin={""}
                  />
                </div>
              </div>
              <div>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  variant="small"
                  className="mb-2 text-left font-medium text-gray-300"
                >
                  Your Email
                </Typography>
                <Input
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="!border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-500 focus:!border-blue-500"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  crossOrigin={""}
                />
              </div>
              <div>
                <Typography
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  variant="small"
                  className="mb-2 text-left font-medium text-gray-300"
                >
                  Your Message
                </Typography>
                <Textarea
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  rows={6}
                  placeholder="Message"
                  name="message"
                  className="!border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-500 focus:!border-blue-500"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button
                type="submit"
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-blue-500/70"
                size="lg"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
