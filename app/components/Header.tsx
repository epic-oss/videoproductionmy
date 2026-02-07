"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useQuote } from "./QuoteContext";
import { locations } from "@/lib/data";

const industries = [
  { href: "/industries/property-video-production", label: "Property & Real Estate" },
  { href: "/industries/manufacturing-video-production", label: "Manufacturing & Factory" },
  { href: "/industries/healthcare-video-production", label: "Healthcare & Medical" },
  { href: "/industries/fnb-restaurant-video", label: "F&B & Restaurant" },
  { href: "/industries/education-video-production", label: "Education & University" },
];

const guides = [
  { href: "/guide/video-production-pricing-malaysia", label: "Pricing Guide" },
  { href: "/guide/corporate-video-production-kl", label: "Corporate Video KL" },
  { href: "/guide/product-video-ecommerce", label: "Product Video Guide" },
  { href: "/guide/event-videography-packages", label: "Event Packages" },
  { href: "/guide/agm-live-streaming", label: "AGM Live Streaming" },
  { href: "/guide/drone-videography-malaysia", label: "Drone Videography" },
  { href: "/guide/how-to-choose-video-production-company", label: "How to Choose" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);
  const [isMobileGuidesOpen, setIsMobileGuidesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const { openModal } = useQuote();
  const locationsRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setIsLocationsOpen(false);
      }
      if (guidesRef.current && !guidesRef.current.contains(event.target as Node)) {
        setIsGuidesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/vpmy-logo.png"
              alt="VideoProductionMY"
              width={36}
              height={36}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-white">
              VideoProduction<span className="text-blue-400">MY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/companies" className="text-gray-300 hover:text-white transition-colors">
              Browse Companies
            </Link>

            {/* Locations Dropdown */}
            <div className="relative" ref={locationsRef}>
              <button
                onClick={() => { setIsLocationsOpen(!isLocationsOpen); setIsGuidesOpen(false); setIsIndustriesOpen(false); }}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Locations
                <svg className={`w-4 h-4 ml-1 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

            {/* Guides Dropdown */}
            <div className="relative" ref={guidesRef}>
              <button
                onClick={() => { setIsGuidesOpen(!isGuidesOpen); setIsLocationsOpen(false); setIsIndustriesOpen(false); }}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Guides
                <svg className={`w-4 h-4 ml-1 transition-transform ${isGuidesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGuidesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsGuidesOpen(false)}
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" ref={industriesRef}>
              <button
                onClick={() => { setIsIndustriesOpen(!isIndustriesOpen); setIsLocationsOpen(false); setIsGuidesOpen(false); }}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Industries
                <svg className={`w-4 h-4 ml-1 transition-transform ${isIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {industries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
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
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
              <Link href="/" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/companies" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Browse Companies
              </Link>

              {/* Mobile Locations Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                >
                  Locations
                  <svg className={`w-4 h-4 transition-transform ${isMobileLocationsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileLocationsOpen && (
                  <div className="pl-4 space-y-1">
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/locations/${location.slug}`}
                        className="block text-gray-400 hover:text-white transition-colors py-2"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileLocationsOpen(false); }}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Guides Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileGuidesOpen(!isMobileGuidesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                >
                  Guides
                  <svg className={`w-4 h-4 transition-transform ${isMobileGuidesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileGuidesOpen && (
                  <div className="pl-4 space-y-1">
                    {guides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="block text-gray-400 hover:text-white transition-colors py-2"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileGuidesOpen(false); }}
                      >
                        {guide.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                >
                  Industries
                  <svg className={`w-4 h-4 transition-transform ${isMobileIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileIndustriesOpen && (
                  <div className="pl-4 space-y-1">
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-400 hover:text-white transition-colors py-2"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileIndustriesOpen(false); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openModal(); }}
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
