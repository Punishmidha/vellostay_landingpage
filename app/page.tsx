import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Locations from "./sections/Locations";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import { V0Badge } from "./components/v0-badge"; // ✅ Correct import

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* ---- V0 Badge at Top (Proof of v0 usage) ---- */}
      <div className="w-full flex justify-center py-4">
        <V0Badge />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Locations */}
      <Locations />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-10 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} VelloStay. All rights reserved.
        </p>

        {/* ---- V0 Badge at Bottom ---- */}
        <div className="mt-4 flex justify-center">
          <V0Badge />
        </div>
      </footer>
    </main>
  );
}
