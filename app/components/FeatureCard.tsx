"use client";

import React from "react";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        p-6 rounded-xl
        bg-(--color-surface)
        border-(--color-border)
        shadow-lg
        transition duration-300
        hover:bg-(--color-surface-light)
        hover:shadow-[0_0_15px_var(--color-primary)]
      "
    >
      <Icon className="w-8 h-8 mb-4 text-(--color-primary)" />

      <h3 className="text-xl font-bold text-(--color-text) mb-2">{title}</h3>

      <p className="text-(--color-text-muted)">{description}</p>
    </div>
  );
}
