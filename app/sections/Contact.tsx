"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-(--color-background)">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <AnimatedSection delay={0} className="mb-10">
          <h2 className="text-4xl font-extrabold text-center text-(--color-text) mb-4">
            Inquire About Your Stay
          </h2>
          <p className="text-lg text-center text-(--color-text-muted)">
            Fill out the form below or contact us directly for availability.
          </p>
        </AnimatedSection>

        {/* Form + Contact Box */}
        <AnimatedSection delay={200}>
          <div className="bg-(--color-surface) p-8 rounded-xl shadow-2xl border border-(--color-border)">

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-(--color-text-muted) mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-(--color-surface-light) border border-(--color-border) rounded-lg 
                  text-(--color-text) focus:ring-(--color-primary) focus:border-(--color-primary) transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-(--color-text-muted) mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 bg-(--color-surface-light) border border-(--color-border) rounded-lg 
                  text-(--color-text) focus:ring-(--color-primary) focus:border-(--color-primary) transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-(--color-text-muted) mb-2">
                  Preferred Location & Dates
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g., Gurugram, 15th–30th Nov"
                  className="w-full p-3 bg-(--color-surface-light) border border-(--color-border) rounded-lg 
                  text-(--color-text) focus:ring-(--color-primary) focus:border-(--color-primary) transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-(--color-primary) hover:bg-(--color-primary-dark) text-black font-bold py-3 rounded-xl 
                shadow-lg shadow-(--color-primary)/30 transition transform hover:scale-[1.02]"
              >
                Send Inquiry
              </button>
            </form>

            {/* Direct Contact Info */}
            <div className="mt-8 pt-6 border-t border-(--color-border) text-center space-y-3">
              <p className="flex items-center justify-center text-(--color-text-muted)">
                <Phone className="w-4 h-4 mr-2 text-(--color-primary)" /> +91 99968 50506
              </p>
              <p className="flex items-center justify-center text-(--color-text-muted)">
                <Mail className="w-4 h-4 mr-2 text-(--color-primary)" /> vellostay@gmail.com
              </p>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
