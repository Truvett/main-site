"use client";

import { Typography } from "@material-tailwind/react";
import { FaLightbulb, FaCog, FaRocket } from "react-icons/fa";

function Building() {
  return (
    <section id="building" className="py-20 px-8 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-sm text-blue-400 font-medium"
            >
              In Development
            </Typography>
          </div>
          
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            variant="h2"
            className="mb-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Building Something Extraordinary
          </Typography>
          
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We&apos;re working on innovative products that will transform digital experiences. 
            Stay tuned for what&apos;s coming next.
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Innovation Card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-950/30 to-gray-900/80 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
                <FaLightbulb className="text-3xl text-blue-400" />
              </div>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h5"
                className="mb-4 text-white font-bold"
              >
                Ideation
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-400 leading-relaxed"
              >
                Conceptualizing innovative solutions that address real-world challenges 
                and create meaningful impact.
              </Typography>
            </div>
          </div>

          {/* Development Card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-950/30 to-gray-900/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center border border-purple-500/30">
                <FaCog className="text-3xl text-purple-400 animate-spin-slow" />
              </div>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h5"
                className="mb-4 text-white font-bold"
              >
                Development
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-400 leading-relaxed"
              >
                Building robust, scalable products using cutting-edge technologies 
                and best practices.
              </Typography>
            </div>
          </div>

          {/* Launch Card */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-gray-900/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center border border-cyan-500/30">
                <FaRocket className="text-3xl text-cyan-400" />
              </div>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="h5"
                className="mb-4 text-white font-bold"
              >
                Launch
              </Typography>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-gray-400 leading-relaxed"
              >
                Bringing products to market with strategic planning and continuous 
                improvement based on user feedback.
              </Typography>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-gray-900/80 backdrop-blur-xl border border-purple-500/15">
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="h4"
              className="mb-4 text-white font-bold"
            >
              Something Amazing is Coming
            </Typography>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-400 max-w-xl mx-auto"
            >
              We&apos;re putting the finishing touches on our new products. 
              Get in touch to be among the first to know when we launch.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Building;
