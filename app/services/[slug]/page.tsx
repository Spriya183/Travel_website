import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Car, ShieldCheck, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import CTA from "../../../components/features/home/CTA";
import { notFound } from "next/navigation";

// Mock data for the services
const serviceDetails: Record<string, any> = {
  "airport-pickup": {
    title: "Premium Airport Pickup",
    subtitle: "Hassle-free arrival at Tribhuvan International Airport.",
    image: "/images/service_airport.png",
    description: "Start your journey in Nepal with zero stress. Our professional driver will be waiting for you at the arrivals terminal holding a placard with your name. We monitor flight statuses in real-time, so even if your flight is delayed or arrives early, your comfortable taxi will be ready and waiting.",
    duration: "1 - 2 Hours (Depending on hotel location)",
    vehicle: "Air-Conditioned Premium Sedan / SUV",
    included: ["Meet & Greet at Arrivals", "Luggage Assistance", "Flight Tracking", "Bottled Water", "Toll/Parking Fees"],
    faqs: [
      { q: "What happens if my flight is delayed?", a: "We track your flight number in real-time. Our driver will adjust the pickup time automatically at no extra cost." },
      { q: "Where will the driver meet me?", a: "The driver will be waiting just outside the main arrival gate holding a sign with your name on it." }
    ]
  },
  "pokhara-tour": {
    title: "Pokhara Road Trip",
    subtitle: "Scenic and comfortable journey to the city of lakes.",
    image: "/images/hero_pokhara.png",
    description: "Travel from Kathmandu to Pokhara in ultimate comfort. Avoid the crowded tourist buses and enjoy a private, air-conditioned ride through the winding hills and alongside the Trishuli River. Stop wherever you want for photos or meals.",
    duration: "6 - 7 Hours (Scenic Drive)",
    vehicle: "Spacious SUV / Premium Tourist Sedan",
    included: ["Door-to-door pickup & drop", "Flexible stops for food/photos", "Experienced hill-driver", "Air-conditioning", "Fuel & Tolls"],
    faqs: [
      { q: "Can we stop for lunch on the way?", a: "Absolutely! The vehicle is yours. You can ask the driver to stop at any hygienic restaurant along the highway." },
      { q: "Is the road safe?", a: "Yes, our drivers are highly experienced with the Prithvi Highway and prioritize safe, smooth driving over speed." }
    ]
  },
  // Default fallback for other services
  "default": {
    title: "Premium Transport Service",
    subtitle: "Comfortable, safe, and reliable travel across Nepal.",
    image: "/images/hero_mountains.png",
    description: "Experience the best of Nepal with our premium tourist transport service. Whether you are traveling for business, leisure, or pilgrimage, our professional drivers and well-maintained vehicles guarantee a seamless journey.",
    duration: "Flexible (As per itinerary)",
    vehicle: "Premium Tourist Vehicle",
    included: ["Professional English-speaking Driver", "Clean & Sanitized Vehicle", "Air Conditioning", "Fuel & Taxes", "24/7 Support"],
    faqs: [
      { q: "How do I book this service?", a: "You can send us an inquiry via WhatsApp or Email, and we will confirm the booking within minutes." },
      { q: "Are the prices fixed?", a: "Yes, we provide upfront transparent pricing with no hidden charges." }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug] || serviceDetails["default"];
  return {
    title: `${service.title} | Clasic Journey Nepal`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug: serviceSlug } = await params;
  const service = serviceDetails[serviceSlug] || { ...serviceDetails["default"], title: serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) };

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-4 sm:left-8 z-20">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Back to Services</span>
          </Link>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20">
          <h1 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-zinc-200 font-light">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-primary mb-6">Service Overview</h2>
                <p className="font-sans text-zinc-600 leading-relaxed text-lg font-light">
                  {service.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <h3 className="font-sans font-bold text-xl text-primary mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-gold" /> What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.included.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-zinc-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="font-playfair text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100">
                      <h4 className="font-sans font-semibold text-lg text-zinc-900 mb-2 flex items-start gap-3">
                        <HelpCircle className="text-gold flex-shrink-0 mt-0.5" size={20} />
                        {faq.q}
                      </h4>
                      <p className="font-sans text-zinc-600 pl-8">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                
                {/* Trip Info Card */}
                <div className="bg-primary text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="font-playfair font-bold text-2xl mb-6 text-gold">Trip Details</h3>
                  <ul className="space-y-6 font-sans">
                    <li className="flex items-start gap-4">
                      <Clock className="text-gold flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-sm text-zinc-300 uppercase tracking-wider">Duration</p>
                        <p className="font-light mt-1">{service.duration}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Car className="text-gold flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-sm text-zinc-300 uppercase tracking-wider">Vehicle Details</p>
                        <p className="font-light mt-1">{service.vehicle}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <MapPin className="text-gold flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-sm text-zinc-300 uppercase tracking-wider">Route Info</p>
                        <p className="font-light mt-1">Flexible & Customizable</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <a 
                      href="https://wa.me/9779851005029" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gold hover:bg-white text-primary text-center font-sans font-bold py-4 rounded-xl transition-colors duration-300 shadow-md"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Related CTA */}
                <div className="bg-zinc-100 p-6 rounded-2xl border border-zinc-200 text-center">
                  <h4 className="font-sans font-bold text-lg text-primary mb-2">Need a custom route?</h4>
                  <p className="font-sans text-sm text-zinc-600 mb-4">We can tailor any journey across Nepal just for you.</p>
                  <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:text-gold transition-colors">
                    Contact Us <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
