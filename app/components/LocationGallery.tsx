"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface LocationGalleryProps {
  cityData: {
    city: string;
    headline: string;
    description: string;
    images: { url: string; alt: string }[];
  };
}

export default function LocationGallery({ cityData }: LocationGalleryProps) {
  return (
    <div className="bg-(--color-surface) p-6 rounded-3xl shadow-xl border border-(--color-border) transition hover:border-(--color-primary)/40 group">

      {/* City Title */}
      <h3 className="text-3xl font-bold text-(--color-primary) mb-2 flex items-center">
        <MapPin className="w-6 h-6 mr-2 text-(--color-primary)" />
        {cityData.city}
      </h3>

      <p className="text-xl text-(--color-text) mb-6 italic">
        {cityData.headline}
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cityData.images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-(--color-primary)/30 transition"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-auto object-cover rounded-lg aspect-video transition duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/400x300/444/fff?text=Image+Unavailable";
              }}
            />
          </div>
        ))}
      </div>

      <p className="text-(--color-text-muted) mt-4">
        {cityData.description}
      </p>

      <a
        href="#contact"
        className="mt-4 inline-flex items-center text-(--color-primary) font-semibold transition hover:text-(--color-primary-dark)"
      >
        View Availability in {cityData.city}
      </a>

    </div>
  );
}
