"use client";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-24 md:py-40 text-center relative overflow-hidden bg-(--color-background)"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1574797047918-a6b41214041e?auto=format&fit=crop&w=1600&q=80)",
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection delay={0}>
          <p className="text-lg font-semibold text-(--color-primary) mb-4 tracking-wide">
            VelloStay | Gurugram • Noida • Jaipur
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-(--color-text)">
            Your Premium Studio
            <span className="block lg:inline"> Apartment Home.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-xl text-(--color-text-muted) mb-10 max-w-3xl mx-auto">
            Experience short-term rentals designed for the modern professional.
            Luxury, comfort, and style across India&apos;s fastest-growing
            cities.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <a
            href="#locations"
            className="inline-flex items-center bg-(--color-primary) hover:bg-(--color-primary-dark) text-black font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Explore Our Cities
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
