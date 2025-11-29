"use client";

import React from "react";
import FeatureCard from "../components/FeatureCard";
import AnimatedSection from "../components/AnimatedSection";
import { Key, Wifi, Sun, Home } from "lucide-react";

interface FeatureItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const featuresData: FeatureItem[] = [
  {
    icon: Key,
    title: "Keyless Entry",
    description:
      "Seamless, secure digital check-in and access via our app. No more lost keys.",
  },
  {
    icon: Wifi,
    title: "Fiber-Optic WiFi",
    description:
      "Dedicated high-speed internet in every unit, perfect for remote work and streaming.",
  },
  {
    icon: Sun,
    title: "Natural Light Focus",
    description:
      "Every studio is designed for maximum daylight and fresh air for well-being.",
  },
  {
    icon: Home,
    title: "Fully Equipped",
    description:
      "Enjoy a full kitchenette, premium linens, and daily cleaning service included.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-(--color-section) text-(--color-text)"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection delay={0} className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-(--color-text) mb-4">
            Elevated Stays. Effortless Living.
          </h2>
          <p className="text-lg text-center text-(--color-text-muted)">
            Every VelloStay studio is curated for comfort and productivity.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedSection key={index} delay={150 + index * 150}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
