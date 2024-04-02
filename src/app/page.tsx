import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Vision from "./vision";
import Services from "./services";
import Work from "./work";
import Framworks from "./framworks";
// import Testimonials from "./testimonials";
import ContactUs from "./contactus";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Framworks />
      <Services />
      <Work />
      {/* <Testimonials /> */}
      {/* <Faqs /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
