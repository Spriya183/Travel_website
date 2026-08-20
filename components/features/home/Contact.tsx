"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSuccessModal, setShowSuccessModal] =
    useState(false);

  const [showErrorModal, setShowErrorModal] =
    useState(false);

  const [errorMessage, setErrorMessage] = useState(
    "Failed to send inquiry. Please try again."
  );

  // ============================================
  // HANDLE INPUT CHANGE
  // ============================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================
  // HANDLE FORM SUBMISSION
  // ============================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // Close previous messages
    setShowSuccessModal(false);
    setShowErrorModal(false);

    // Basic validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage(
        "Please fill in all the required fields."
      );

      setShowErrorModal(true);

      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      let result: any = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      // ============================================
      // FAILED
      // ============================================

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
          "Failed to send inquiry. Please try again."
        );
      }

      // ============================================
      // SUCCESS
      // ============================================

      setShowSuccessModal(true);

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: "",
      });
    } catch (error: any) {
      console.error(
        "Error sending inquiry:",
        error
      );

      setErrorMessage(
        "Failed to send inquiry. Please try again."
      );

      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-zinc-50 z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================
            HEADER
        ============================================ */}

        <div className="text-center mb-16">
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Get in Touch
          </h2>

          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
            Send Us an Inquiry
          </h3>

          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* ============================================
            FORM & INFORMATION
        ============================================ */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* ============================================
              LEFT SIDE
          ============================================ */}

          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">

            <div className="bg-white border border-zinc-200/50 rounded-3xl p-8 shadow-md">

              <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-6">
                Contact Information
              </h4>

              <div className="space-y-6">

                {/* PHONE / WHATSAPP */}

                <a
                  href="https://wa.me/9779851005029"
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

                    <span className="font-sans font-bold text-base text-zinc-800 group-hover:text-primary transition-colors block">
                      +977 9851005029
                    </span>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:classicjourneynepal2007@gmail.com?subject=Inquiry from Website"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-soft-sky text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                      Email Address
                    </span>

                    <span className="font-sans font-bold text-base text-zinc-800 group-hover:text-primary transition-colors break-all">
                      classicjourneynepal2007@gmail.com
                    </span>
                  </div>
                </a>

                {/* ADDRESS */}

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

          {/* ============================================
              RIGHT SIDE FORM
          ============================================ */}

          <div className="lg:col-span-7 bg-white border border-zinc-200/50 rounded-3xl p-8 sm:p-10 shadow-md">

            <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-6">
              Inquiry Form
            </h4>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* FULL NAME */}

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2"
                  >
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

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2"
                  >
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

              {/* PHONE + COUNTRY */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2"
                  >
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. +977 9851005029"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* COUNTRY */}

                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2"
                  >
                    Country
                  </label>

                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Nepal"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none transition-all duration-300"
                  />
                </div>

              </div>


              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2"
                >
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

              {/* SUBMIT BUTTON */}

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

      {/* ============================================
          SUCCESS MODAL
      ============================================ */}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] flex items-center justify-center p-4 animate-fade-in">

          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center flex flex-col items-center border border-zinc-100">

            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2
                size={40}
                className="animate-bounce"
              />
            </div>

            <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-2">
              Inquiry Sent!
            </h4>

            <p className="font-sans text-sm text-zinc-600 leading-relaxed font-light mb-8">
              Thank you! Your inquiry has been sent successfully. Our team will review the details and get back to you via email or WhatsApp within a few hours.
            </p>

            <button
              onClick={() =>
                setShowSuccessModal(false)
              }
              className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3 rounded-xl transition-all cursor-pointer"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* ============================================
          ERROR MODAL
      ============================================ */}

      {showErrorModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] flex items-center justify-center p-4 animate-fade-in">

          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center flex flex-col items-center border border-zinc-100">

            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
              <XCircle size={40} />
            </div>

            <h4 className="font-playfair text-2xl font-bold text-zinc-950 mb-2">
              Failed to Send
            </h4>

            <p className="font-sans text-sm text-zinc-600 leading-relaxed font-light mb-8">
              {errorMessage}
            </p>

            <button
              onClick={() =>
                setShowErrorModal(false)
              }
              className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3 rounded-xl transition-all cursor-pointer"
            >
              Try Again
            </button>

          </div>
        </div>
      )}

    </section>
  );
}