import Hero from "../components/features/home/Hero";
import Features from "../components/features/home/Features";
import About from "../components/features/home/About";
import Services from "../components/features/home/Services";
import Testimonials from "../components/features/home/Testimonials";
import CTA from "../components/features/home/CTA";
import Contact from "../components/features/home/Contact";
import Link from "next/link";
export default function Home() {
  return (
    <div className="space-y-0">
      {/* Full-screen Carousel Hero */}
      <Hero />

      {/* Feature badges cards */}
      <div className="py-8">
        <Features />
      </div>

      {/* About Company & Counter Stats - Links to /about */}
      <div className="py-8">
        <Link href="/about"><About /></Link>
      </div>

      {/* Services Showcase Cards - Links to /services */}
      <div className="py-8">
        <Services />
      </div>

      {/* Testimonials Auto Slider Carousel */}
      <div className="py-8">
        <Testimonials />
      </div>

      {/* Scenic Call-to-action Banner */}
      <CTA />

      {/* Contact info, google map, and custom inquiry form */}
      <div className="py-8">
        <Contact />
      </div>
    </div>
  );
}
