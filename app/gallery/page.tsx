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
        { src: "/images/gallarypicture/pasupati.png", alt: "Pashupatinath Temple", description: "Sacred Hindu temple complex on the Bagmati River" },
        { src: "/images/gallarypicture/syambu.png", alt: "Swayambhunath Stupa", description: "Ancient religious complex atop a hill, also known as the Monkey Temple" },
        { src: "/images/gallarypicture/download.jpg", alt: "Kathmandu Durbar Square", description: "Historic plaza featuring ancient palaces and temples" },
        { src: "/images/gallarypicture/baudhnath.jpg", alt: "Boudhanath Stupa", description: "One of the largest spherical stupas in Nepal" },
        { src: "/images/gallarypicture/bhaktapurds.jpg", alt: "Bhaktapur Durbar Square", description: "Well-preserved ancient city known for its rich Newari culture" },
        { src: "/images/gallarypicture/patands.jpg", alt: "Patan Durbar Square", description: "Center of traditional arts and exquisite Newar architecture" },
        { src: "/images/gallarypicture/changunarayanjpg.jpg", alt: "Changu Narayan Temple", description: "Oldest Hindu temple in Nepal, dedicated to Lord Vishnu" },
        { src: "/images/gallarypicture/Chandragiricablecar.jpg", alt: "Chandragiri Hills", description: "Scenic hill station offering panoramic views of the Himalayas via cable car" },
      ]
    },
    {
      title: "Pokhara Tour",
      images: [
        { src: "/images/gallarypicture/lake.jpg", alt: "Fewa Lake Pokhara", description: "Peaceful waters surrounded by stunning Himalayan landscapes, perfect for boating and relaxing" },
        { src: "/images/gallarypicture/begnas.jpg", alt: "Begnas Lake", description: "A tranquil lake surrounded by green hills, offering a peaceful escape from the city" },
        { src: "/images/gallarypicture/sarangkot.jpg", alt: "Sarangkot Sunrise", description: "Famous hilltop destination offering breathtaking sunrise views over the Annapurna and Dhaulagiri ranges" },
        { src: "/images/gallarypicture/santistupa.jpg", alt: "World Peace Pagoda", description: "A beautiful hilltop Buddhist stupa offering panoramic views of Pokhara, Phewa Lake, and the Himalayas" },
        { src: "/images/gallarypicture/statue.jpg", alt: "Pumdikot Shiva Statue", description: "A magnificent Shiva statue on Pumdikot Hill with spectacular views of Pokhara and the surrounding mountains" },
        { src: "/images/gallarypicture/devisfall.jpg", alt: "Devis Fall", description: "A fascinating natural waterfall where water flows dramatically into an underground passage" },
        { src: "/images/gallarypicture/cave.jpg", alt: "Gupteshwor Mahadev Cave", description: "A sacred and naturally formed limestone cave featuring impressive rock formations and a spiritual atmosphere" },
        { src: "/images/gallarypicture/museum.jpg", alt: "International Mountain Museum", description: "A fascinating museum showcasing the history, culture, people, and achievements of the Himalayas and mountaineering" },
      ]
    },
    {
      title: "Chitwan Safari",
      images: [
        { src: "/images/gallarypicture/safari.jpg", alt: "Jungle Safari", description: "First national park of Nepal and a renowned World Heritage Site" },
        { src: "/images/gallarypicture/canoe.jpg", alt: "Canoe Ride", description: "Exciting jeep or elephant rides through the dense tropical forest" },
        { src: "/images/gallarypicture/ghariyal.jpg", alt: "Ghariyal center", description: "Spot the rare and majestic Greater One-horned Rhinoceros in its habitat" },
        { src: "/images/gallarypicture/rapti.jpg", alt: "Rapti sunset", description: "Experience the vibrant traditional dances of the indigenous Tharu people" },
        { src: "/images/gallarypicture/tharudance.jpg", alt: "Tharu Dance", description: "First national park of Nepal and a renowned World Heritage Site" },
        { src: "/images/gallarypicture/devghat.jpg", alt: "Devghat Dham", description: "Exciting jeep or elephant rides through the dense tropical forest" },
        { src: "/images/gallarypicture/elephant.jpg", alt: "Elephant Breeding Center", description: "Spot the rare and majestic Greater One-horned Rhinoceros in its habitat" },
        { src: "/images/gallarypicture/narayani.jpg", alt: "Narayani River", description: "Experience the vibrant traditional dances of the indigenous Tharu people" },
      ]

    },
    {
      title: "Lumbini Tour",
      images: [
        { src: "/images/gallarypicture/mayadevi.jpg", alt: "Maya Devi Temple", description: "Breathtaking first light illuminating the snow-capped peaks" },
        { src: "/images/gallarypicture/ashoka.jpg", alt: "Ashoka Pillar", description: "Famous hill station for sweeping Himalayan panoramas near Kathmandu" },
        { src: "/images/gallarypicture/garden.jpg", alt: "Lumbini Sacred Garden", description: "Scenic drives through rugged mountainous terrain and winding roads" },
        { src: "/images/gallarypicture/peace.jpg", alt: "World Peace Pagoda", description: "Magnificent views of the awe-inspiring Annapurna massif" },
        { src: "/images/gallarypicture/myanmar.jpg", alt: "Myanmar Golden Temple", description: "Breathtaking first light illuminating the snow-capped peaks" },
        { src: "/images/gallarypicture/chinatemple.jpg", alt: "China Temple (Zhong Hua Chinese Buddhist Monaster", description: "Famous hill station for sweeping Himalayan panoramas near Kathmandu" },
        { src: "/images/gallarypicture/thai.jpg", alt: "Thai Monastery", description: "Scenic drives through rugged mountainous terrain and winding roads" },
        { src: "/images/gallarypicture/monasticzone.jpg", alt: "Lumbini Monastic Zone", description: "Magnificent views of the awe-inspiring Annapurna massif" },
      ]
    },
    {
      title: "Mountain View",
      images: [
        { src: "/images/gallarypicture/nagarkot.jpg", alt: "Nagarkot", description: "Prompt and reliable meet-and-greet service at the airport" },
        { src: "/images/gallarypicture/chandragiri-cover.png", alt: "Chandragiri", description: "Comfortable and well-maintained vehicles for local sightseeing" },
        { src: "/images/gallarypicture/dhulikhel.jpg", alt: "Dhulikhel", description: "Hassle-free transfers to your hotel or destination" },
        { src: "/images/gallarypicture/shivapuri-hiking.jpeg", alt: "Shivapuri Peak", description: "Premium transport options ensuring VIP comfort and style" },
        { src: "/images/gallarypicture/lakuri.jpg", alt: "Lakuri Bhanjyang", description: "Premium transport options ensuring VIP comfort and style" },
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 text-white z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ZoomIn size={24} className="text-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                        <h4 className="font-playfair text-xl font-bold text-white mb-2">{img.alt}</h4>
                        <p className="text-sm text-zinc-300 line-clamp-2">{img.description}</p>
                      </div>
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
              <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-2">
                {allImages[lightboxIndex].category}
              </p>
              <h4 className="font-playfair text-2xl font-bold text-white mb-2">
                {allImages[lightboxIndex].alt}
              </h4>
              <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
                {allImages[lightboxIndex].description}
              </p>
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
