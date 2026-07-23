"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.message) {
      alert("Please fill in all the required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email to info@clasicjourneynepal.com
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-zinc-50 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Get in Touch
          </h2>
          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
            Send Us an Inquiry
          </h3>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Form & Info Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Contact Information & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white border border-zinc-200/50 rounded-3xl p-8 shadow-md">
              <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-6">
                Contact Information
              </h4>

              <div className="space-y-6">
                {/* Phone & WhatsApp */}
                <a
                  href="https://wa.me/97798XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-soft-sky text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                      Phone & WhatsApp
                    </span>
                    <span className="font-sans font-bold text-base text-zinc-800 group-hover:text-primary transition-colors">
                      +977-9824962065
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@clasicjourneynepal.com?subject=Inquiry from Website"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-soft-sky text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                      Email Address
                    </span>
                    <span className="font-sans font-bold text-base text-zinc-800 group-hover:text-primary transition-colors">
                      adhikarispriya4@gmail.com
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-soft-sky text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                      Office Address
                    </span>
                    <span className="font-sans font-bold text-base text-zinc-800">
                      Kathmandu, Nepal
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/50 rounded-3xl p-8 sm:p-10 shadow-md">
            <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-6">
              Inquiry Form
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. +1 555-0199"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Australia"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trip: dates, passengers, preferred destinations..."
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-55 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center flex flex-col items-center border border-zinc-100">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} className="animate-bounce" />
            </div>

            <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-2">
              Inquiry Sent!
            </h4>

            <p className="font-sans text-sm text-zinc-600 leading-relaxed font-light mb-8">
              Thank you! Your inquiry has been sent successfully. Our team will review the details and get back to you via email or WhatsApp within a few hours.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3 rounded-xl transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
