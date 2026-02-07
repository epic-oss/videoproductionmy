"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useQuote } from "./QuoteContext";

export default function FloatingCTA() {
  const { openModal, isModalOpen } = useQuote();
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/contact" || isModalOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-10 h-10 bg-white text-gray-600 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 hover:text-gray-900 hover:shadow-lg transition-all duration-200 cursor-pointer ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <p className="text-xs text-gray-400 font-medium text-right mr-1">159+ companies compared</p>

      <button
        onClick={() => openModal()}
        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold"
      >
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Get Quote
      </button>
    </div>
  );
}
