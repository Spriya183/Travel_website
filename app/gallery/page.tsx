"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Kathmandu City Tour",
      images: [
        { src: "/images/hero_pashupatinath.png", alt: "Pashupatinath Temple" },
        { src: "/images/hero_pashupatinath.png", alt: "Swayambhunath Stupa" },
        { src: "/images/hero_pashupatinath.png", alt: "Kathmandu Durbar Square" },
        { src: "/images/hero_pashupatinath.png", alt: "Boudhanath Stupa" },
      ]
    },
    {
      title: "Pokhara Tour",
      images: [
        { src: "/images/hero_pokhara.png", alt: "Fewa Lake Pokhara" },
        { src: "/images/hero_pokhara.png", alt: "Sarangkot Sunrise" },
        { src: "/images/hero_pokhara.png", alt: "Davis Falls" },
        { src: "/images/hero_pokhara.png", alt: "World Peace Pagoda" },
      ]
    },
    {
      title: "Chitwan Safari",
      images: [
        { src: "/images/service_chitwan.png", alt: "Chitwan National Park" },
        { src: "/images/service_chitwan.png", alt: "Jungle Safari" },
        { src: "/images/service_chitwan.png", alt: "One-horned Rhino" },
        { src: "/images/service_chitwan.png", alt: "Tharu Cultural Show" },
      ]
    },
    {
      title: "Mountain Views",
      images: [
        { src: "/images/hero_mountains.png", alt: "Himalayan Sunrise" },
        { src: "/images/hero_mountains.png", alt: "Nagarkot View" },
        { src: "/images/hero_mountains.png", alt: "Mountain Highway" },
        { src: "/images/hero_mountains.png", alt: "Annapurna Range" },
      ]
    },
    {
      title: "Airport Services",
      images: [
        { src: "/images/service_airport.png", alt: "Airport Pickup Service" },
        { src: "/images/about_taxi.png", alt: "Tourist Taxi" },
        { src: "/images/service_airport.png", alt: "Airport Transfer" },
        { src: "/images/about_taxi.png", alt: "Luxury Vehicle" },
      ]
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxCategory, setLightboxCategory] = useState<number>(0);

  const allImages = galleryCategories.flatMap((cat, catIdx) => 
    cat.images.map((img, imgIdx) => ({ ...img, category: cat.title, catIdx, imgIdx }))
  );

  const openLightbox = (catIdx: number, imgIdx: number) => {
    const globalIndex = galleryCategories
      .slice(0, catIdx)
      .reduce((sum, cat) => sum + cat.images.length, 0) + imgIdx;
    setLightboxIndex(globalIndex);
    setLightboxCategory(catIdx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allImages.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_mountains.png"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-primary/70 to-luxury-dark/90" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-gold mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-shadow-premium">
            Travel Gallery
          </h1>
          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            Explore the Beauty of Nepal Through Our Lens
          </p>
        </motion.div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-gradient-to-b from-white to-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-20 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
                  Service Category
                </h2>
                <h3 className="font-playfair text-3xl sm:text-4xl font-extrabold text-luxury-dark">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((img, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: imgIdx * 0.05 }}
                    onClick={() => openLightbox(catIdx, imgIdx)}
                    className="group relative h-72 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 cursor-zoom-in"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white z-10">
                      <ZoomIn size={32} className="text-gold mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                      <span className="font-sans font-bold text-sm tracking-wider uppercase">{img.alt}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-all duration-500 animate-fade-in"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer z-10"
          >
            <X size={28} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-10"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] w-full h-[70vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={allImages[lightboxIndex].src}
                alt={allImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-gold uppercase tracking-wider font-semibold">
                {allImages[lightboxIndex].category}
              </p>
              <h4 className="font-playfair text-xl font-bold text-white mt-1">
                {allImages[lightboxIndex].alt}
              </h4>
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-10"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
