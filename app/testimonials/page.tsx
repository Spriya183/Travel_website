import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Testimonials – Classic Journey Nepal",
  description: "Read what our satisfied travelers say about their experiences with Classic Journey Nepal."
};

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-playfair text-gold text-center mb-8">Customer Testimonials</h1>
        <Testimonials />
      </div>
    </section>
  );
}
