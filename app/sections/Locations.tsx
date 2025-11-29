"use client";

import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import LocationGallery from "../components/LocationGallery";

const locationData = [
  {
    city: "Gurugram",
    headline: "The Corporate Hub: Studios Designed for Focus.",
    description:
      "Our Gurugram studios offer high-speed connectivity, ergonomic workspaces, and easy access to major business parks.",
    images: [
      {
        url: "/gurugram2.jpg",
        alt: "Gurugram Workspace",
      },
      {
        url: "/gurugram1.jpg",
        alt: "Gurugram High-rise View",
      },  
    ],
  },
  {
    city: "Noida",
    headline: "Seamless Connectivity & Urban Convenience.",
    description:
      "Stay close to shopping centers and entertainment. Modern design meets optimal functionality in every Noida apartment.",
    images: [
      {
        url: "/noida1.jpg",
        alt: "/noida2.jpg",
      },
      {
        url: "noida2.jpg",
        alt: "Noida Balcony View",
      },
    ],
  },
  {
    city: "Jaipur",
    headline: "Gateway to Culture: Heritage Meets Modern Comfort.",
    description:
      "Experience the Pink City with VelloStay. Enjoy stylish, peaceful retreats after a day of exploration.",
    images: [
      {
        url: "/jaipur1.jpg",
        alt: "Jaipur Decor",
      },
      {
        url: "/jaipur2.jpg",
        alt: "Jaipur Lounge",
      },
    ],
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-(--color-background)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection delay={0} className="mb-16">
          <h2 className="text-5xl font-extrabold text-center text-(--color-text) mb-4">
            Our Premium Locations
          </h2>
          <p className="text-xl text-center text-(--color-text-muted)">
            Choose your ideal base in Gurugram, Noida or Jaipur.
          </p>
        </AnimatedSection>

        {/* City Galleries */}
        <div className="space-y-16">
          {locationData.map((city, index) => (
            <AnimatedSection key={index} delay={200 + index * 200}>
              <LocationGallery cityData={city} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-(--color-primary) hover:bg-(--color-primary-dark) text-black font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Ready to Book? Contact Us Today!
          </a>
        </div>

      </div>
    </section>
  );
}
