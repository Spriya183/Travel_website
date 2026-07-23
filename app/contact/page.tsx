import Contact from "@/components/home/Contact";

export const metadata = {
  title: "Contact – Classic Journey Nepal",
  description: "Get in touch with Classic Journey Nepal for inquiries, bookings, and support."
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-playfair text-gold text-center mb-8">Contact Us</h1>
        <Contact />
      </div>
    </section>
  );
}
