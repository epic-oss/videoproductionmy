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
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-10 h-10 bg-white text-gray-600 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 hover:text-gray-900 hover:shadow-lg transition-all duration-200 cursor-pointer ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <span className="flex items-center gap-1.5 text-gray-700 font-medium">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          4.8 avg
        </span>
        <span className="w-px h-3.5 bg-gray-200" />
        <span className="text-gray-500">159+ companies</span>
      </div>

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
