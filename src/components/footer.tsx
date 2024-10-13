"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";
import whiteLogo from "../../public/Images/whiteLogo.png";
import { title } from "process";

const LINKS = [
  { title: "Home", link: "#" },
  { title: "About Us", link: "#about" },
  { title: "Services", link: "#service" },
  { title: "Our Work", link: "#work" },
  { title: "Contact Us", link: "#contactus" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 ">
          <div className="text-center md:text-left flex justify-center items-center flex-col">
            <Image
              src={whiteLogo}
              alt={""}
              height={500}
              width={500}
              className="h-10 w-fit mb-5"
            />
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              color="white"
              className="mb-12 font-normal"
            >
              Web Design & Development
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={idx}>
                  <Typography
                    placeholder={""}
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    as="a"
                    href={link.link}
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} variant="h6" color="white" className="mb-3">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <Button placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div> */}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} TRUVETT, all right reserved
          </Typography>

          <div className="flex gap-2 items-center justify-center">
            <IconButton
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="text"
              color="white"
            >
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="text"
              color="white"
            >
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="text"
              color="white"
            >
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            {/* <IconButton placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''} variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton> */}
            {/* <IconButton  placeholder={''} onPointerEnterCapture={''} onPointerLeaveCapture={''}   variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
