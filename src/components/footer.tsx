"use client";
import { Typography, IconButton } from "@material-tailwind/react";

const LINKS = [
  { title: "Home", link: "/" },
  { title: "About", link: "/#about" },
  { title: "What We're Building", link: "/#building" },
  { title: "Contact", link: "/#contactus" },
];

const LEGAL_LINKS = [
  { title: "Terms & Conditions", link: "/terms" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Cancellation & Refund", link: "/cancellation-refund" },
  { title: "Shipping & Exchange", link: "/shipping-exchange" },
  { title: "Contact Us", link: "/contact-info" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-black border-t border-gray-800 px-8 pt-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="h5"
              className="text-white font-bold mb-4 tracking-wide"
            >
              TRUVETT SOLUTIONS
            </Typography>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="text-gray-400 font-normal mb-4"
            >
              Building the future of digital experiences
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="h6"
              className="text-white mb-4 font-bold"
            >
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {LINKS.map((link, idx) => (
                <li key={idx}>
                  <Typography
                    placeholder={""}
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    as="a"
                    href={link.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <Typography
              placeholder={""}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              variant="h6"
              className="text-white mb-4 font-bold"
            >
              Legal
            </Typography>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Typography
                    placeholder={""}
                    onPointerEnterCapture={""}
                    onPointerLeaveCapture={""}
                    as="a"
                    href={link.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-800 py-7 md:justify-between">
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
            <a
              href="https://www.linkedin.com/company/truvett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                placeholder={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                variant="text"
                color="white"
              >
                <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
      
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
