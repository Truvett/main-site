"use client";

import { Button, Typography } from "@material-tailwind/react";
import { FaRocket, FaCode, FaMobile } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            variant="h5"
            className="text-white font-bold tracking-wide"
          >
            TRUVETT SOLUTIONS
          </Typography>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#building" className="text-gray-300 hover:text-white transition-colors duration-300">What We're Building</a>
            <a href="#contactus" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <header className="relative grid !min-h-screen px-8 pt-32">
        <div className="container mx-auto grid h-full w-full grid-cols-1 place-items-center">
          <div className="text-center max-w-4xl">
            {/* Futuristic badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <Typography
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className="text-sm text-blue-400 font-medium"
              >
                Building the Future
              </Typography>
            </div>

            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="h1"
              className="mb-6 text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            >
              Truvett Solutions
            </Typography>
            
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="h3"
              className="mb-8 text-2xl md:text-3xl text-gray-400 font-light"
            >
              Innovation in Progress
            </Typography>

            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="mb-12 text-lg md:text-xl !text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              We&apos;re crafting next-generation digital experiences. 
              Something extraordinary is on the horizon.
            </Typography>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="#building">
                <Button
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  size="lg"
                  className="flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-blue-500/70 hover:scale-105"
                >
                  <FaRocket className="text-lg" />
                  Discover More
                </Button>
              </a>
              <a href="#contactus">
                <Button
                  placeholder={""}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                  size="lg"
                  variant="outlined"
                  className="flex justify-center items-center gap-3 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* About Section - Dark themed */}
      <div
        id="about"
        className="relative md:mx-8 lg:mx-16 mb-20 rounded-xl bg-gradient-to-br from-blue-950/20 via-gray-900/80 to-purple-950/20 backdrop-blur-xl border border-blue-500/10 p-8 md:p-14 shadow-2xl shadow-blue-500/10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Typography
              variant="h3"
              className="mb-6 text-white font-bold"
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
            >
              About Truvett Solutions LLP
            </Typography>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="font-normal text-gray-300 leading-relaxed text-lg"
            >
              We are a forward-thinking technology company dedicated to creating 
              innovative digital solutions. From IT services to cutting-edge product 
              development, we&apos;re constantly pushing boundaries and exploring new 
              possibilities in the digital landscape.
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20">
              <FaCode className="text-3xl text-blue-400 mt-1" />
              <div>
                <Typography className="text-white font-semibold mb-1" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>IT Services</Typography>
                <Typography className="text-gray-400 text-sm" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>Professional development and consulting</Typography>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
              <FaMobile className="text-3xl text-purple-400 mt-1" />
              <div>
                <Typography className="text-white font-semibold mb-1" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>Product Innovation</Typography>
                <Typography className="text-gray-400 text-sm" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>Building tomorrow&apos;s digital experiences</Typography>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
              <FaRocket className="text-3xl text-cyan-400 mt-1" />
              <div>
                <Typography className="text-white font-semibold mb-1" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>Future Ready</Typography>
                <Typography className="text-gray-400 text-sm" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>Embracing next-gen technologies</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
