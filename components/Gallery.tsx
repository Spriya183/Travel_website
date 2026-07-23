"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    {
      src: "/images/hero_mountains.png",
      alt: "Majestic Himalayas Sunrise View",
      title: "Himalayan Sunrise",
    },
    {
      src: "/images/hero_pokhara.png",
      alt: "Fewa Lake colorful tourist boats, Pokhara",
      title: "Fewa Lake Pokhara",
    },
    {
      src: "/images/hero_pashupatinath.png",
      alt: "Pashupatinath Temple, Kathmandu",
      title: "Pashupatinath Temple",
    },
    {
      src: "/images/about_taxi.png",
      alt: "Tourist Taxi in Nepal mountain roads",
      title: "Our Tourist Taxi",
    },
    {
      src: "/images/service_airport.png",
      alt: "Airport Pickup Tourist Taxi Service",
      title: "Airport Transfer Setup",
    },
    {
      src: "/images/service_chitwan.png",
      alt: "Jungle scenery in Chitwan National Park",
      title: "Chitwan Wildlife Safari",
    },
    {
      src: "/images/hero_mountains.png",
      alt: "Winding Nepal hills road with snow mountains",
      title: "Scenic Road Trips",
    },
    {
      src: "/images/hero_pokhara.png",
      alt: "Tourist couple enjoying lakeside scenery",
      title: "Memorable Nepal Tour",
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-luxury-cream to-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
            Moments in Nepal
          </h2>
          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight">
            Our Travel Gallery
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative group h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white z-10">
                <ZoomIn size={32} className="text-gold mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                <span className="font-sans font-bold text-sm tracking-wider uppercase">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4 transition-all duration-500 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer"
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image Containment */}
          <div className="relative max-w-4xl max-h-[80vh] w-full h-[60vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            {/* Caption */}
            <div className="text-center mt-4">
              <h4 className="font-playfair text-xl font-bold text-gold">
                {images[lightboxIndex].title}
              </h4>
              <p className="font-sans text-sm text-zinc-300 mt-1">
                {images[lightboxIndex].alt}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
