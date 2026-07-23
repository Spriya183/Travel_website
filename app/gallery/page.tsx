import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery – Classic Journey Nepal",
  description: "Explore our breathtaking photo gallery showcasing the beauty of Nepal and our travel experiences."
};

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-playfair text-gold text-center mb-8">Photo Gallery</h1>
        <Gallery />
      </div>
    </section>
  );
}
