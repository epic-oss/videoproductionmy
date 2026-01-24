"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useQuote } from "./QuoteContext";
import { locations } from "@/lib/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);
  const { openModal } = useQuote();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">
              VideoProduction<span className="text-blue-400">MY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/companies"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Browse Companies
            </Link>

            {/* Locations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Locations
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsLocationsOpen(false)}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => openModal()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/companies"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Companies
              </Link>

              {/* Mobile Locations Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                >
                  Locations
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileLocationsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMobileLocationsOpen && (
                  <div className="pl-4 space-y-1">
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/locations/${location.slug}`}
                        className="block text-gray-400 hover:text-white transition-colors py-2"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileLocationsOpen(false);
                        }}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors w-full mt-2"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
