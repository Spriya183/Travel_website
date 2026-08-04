"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Star, Calendar, Globe, Shield, Award, 
  Phone, Mail, CheckCircle, Car, Clock
} from "lucide-react";

export default function RamanathUpadhyayaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      
      <section className="relative h-96 bg-gradient-to-br from-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <Link href="/about" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to About Us</span>
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                {/* Full Pokhara image for Ramanath Upadhyaya */}
                <Image 
                  src="/images/ramanath.jpg" 
                  alt="Ramanath Upadhyaya"
                  fill
                  className="object-cover"
                />
                {/* Subtle dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="text-white text-center md:text-left">
                
                <h1 className="font-playfair text-4xl md:text-5xl font-black mb-2">Ramanath Upadhyaya</h1>
                <p className="text-xl text-zinc-200 mb-4">Travel Guide & Professional Driver</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Same structure as Ram's page but with Suresh's info */}
      <section className="py-16 bg-gradient-to-b from-white to-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury">
                <h3 className="font-sans font-bold text-lg text-luxury-dark mb-4">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">Experience</p>
                      <p className="font-semibold text-luxury-dark">20+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">Languages</p>
                      <p className="font-semibold text-luxury-dark">English, Japanese, Nepali</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">License</p>
                      <p className="font-semibold text-luxury-dark">Professional A-Grade</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Car size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">Vehicle</p>
                      <p className="font-semibold text-luxury-dark">Tourist Taxi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold-light/10 rounded-2xl p-6 border border-gold/20">
                <h3 className="font-sans font-bold text-lg text-luxury-dark mb-4">Contact Ramanath</h3>
                <div className="space-y-3">
                  <a href="tel:+9779824962065"
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-lg transition-all">
                    <Phone size={18} className="text-gold" />
                    <div>
                      <p className="text-xs text-zinc-500">Call Now</p>
                      <p className="font-semibold text-luxury-dark text-sm">+977 9824962065</p>
                    </div>
                  </a>
                  <a href="https://wa.me/9779824962065" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-lg transition-all">
                    <Mail size={18} className="text-gold" />
                    <div>
                      <p className="text-xs text-zinc-500">WhatsApp</p>
                      <p className="font-semibold text-luxury-dark text-sm">+977 9824962065</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury">
                <h3 className="font-sans font-bold text-lg text-luxury-dark mb-4">Availability</h3>
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={18} className="text-gold" />
                  <p className="text-zinc-700">Available for bookings year-round</p>
                </div>
                <Link href="/contact"
                  className="mt-4 w-full bg-gradient-to-r from-gold to-gold-light text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all block">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-luxury">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-4">Professional Introduction</h2>
                <div className="space-y-4 text-zinc-700 leading-relaxed">
                  <p>
                    Namaste! I&apos;m Ramanath Upadhyaya, a senior professional travel guide and driver with over 20 years of 
                    experience specializing in adventure tours and trekking route transfers across Nepal.
                  </p>
                  <p>
                    Born in the foothills of the Himalayas, I have a natural affinity for mountain driving and a 
                    deep understanding of Nepal&apos;s diverse landscapes. My expertise lies in providing safe,
                    comfortable transportation for adventure enthusiasts and trekkers.
                  </p>
                  <p>
                    I pride myself on maintaining a perfect safety record while ensuring every journey is filled with 
                    insights about Nepali culture, traditions, and the stunning natural beauty that surrounds us. 
                    Your adventure starts the moment you step into my vehicle.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-luxury">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-6">Areas of Specialization</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Adventure & Trekking Transfers",
                    "Pokhara & Annapurna Region",
                    "Everest Base Camp Routes",
                    "Mountain Highway Expertise",
                    "Multi-Day Nepal Tours",
                    "Cultural & Heritage Tours",
                    "Photography Tour Support",
                    "Japanese Tourist Services"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-gold flex-shrink-0" />
                      <span className="text-zinc-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-luxury">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-6">Safety & Customer Service</h2>
                <div className="space-y-4 text-zinc-700">
                  <div className="flex gap-4">
                    <Shield className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-luxury-dark mb-1">Perfect Safety Record</h4>
                      <p>20 years of accident-free driving with specialized training in mountain and adventure route navigation.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Globe className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-luxury-dark mb-1">Adventure Specialist</h4>
                      <p>Expert in adventure tourism with knowledge of trekking routes, mountain safety, and altitude considerations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-gold/10">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-6">Why Travelers Choose Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Adventure Expert", desc: "Specialized in trekking & adventure routes" },
                    { title: "Mountain Driving Pro", desc: "9+ years navigating Nepal's mountain roads" },
                    { title: "Multilingual Guide", desc: "Fluent in English, Japanese, and Nepali" },
                    { title: "Culturally Knowledgeable", desc: "Deep understanding of Nepali traditions" },
                    { title: "Flexible & Friendly", desc: "Adaptable to your travel needs" },
                    { title: "Photography Friendly", desc: "Happy to stop for perfect photo opportunities" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Award size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-luxury-dark text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
