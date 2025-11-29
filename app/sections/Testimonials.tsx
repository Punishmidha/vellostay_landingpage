"use client";

import React from "react";
import { Quote } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    name: "Anjali R.",
    role: "Tech Consultant",
    quote:
      "VelloStay Gurugram made my month-long project feel like a relaxing home base. The WiFi never failed.",
  },
  {
    name: "Sanjay D.",
    role: "Creative Director",
    quote:
      "The aesthetic of the Jaipur studio was incredible. Peaceful, stylish, and perfectly situated.",
  },
  {
    name: "Priya K.",
    role: "Startup Founder",
    quote:
      "Stayed in Noida. The location and security were top-notch. It felt more premium than a typical Airbnb.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-(--color-background)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection delay={0} className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-(--color-text) mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-center text-(--color-text-muted)">
            Trusted reviews from professionals who choose VelloStay.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonialsData.map((item, index) => (
            <AnimatedSection key={index} delay={200 + index * 200}>
              <div className="p-8 rounded-xl bg-(--color-surface) border border-(--color-border) shadow-lg hover:shadow-(--color-primary)/30 transition hover:-translate-y-1">

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-(--color-primary) mb-4" />

                {/* Quote Text */}
                <p className="italic text-(--color-text-muted) text-lg mb-6">
                  {item.quote}
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-(--color-primary) rounded-full flex items-center justify-center text-black font-bold mr-3">
                    {item.name[0]}
                  </div>

                  <div>
                    <p className="font-semibold text-(--color-text)">{item.name}</p>
                    <p className="text-sm text-(--color-text-muted)">{item.role}</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
