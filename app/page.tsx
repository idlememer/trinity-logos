import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ContactTeaser />
    </>
  );
}
