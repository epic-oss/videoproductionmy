"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function EventVideoSelangorPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "selangor" && (c.services.includes("Event Coverage") || c.services.includes("Video Production"))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Event Videography Selangor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Event Videography Services in Selangor ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional event videographers in Petaling Jaya, Shah Alam, Subang, and across Selangor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Selangor is home to Malaysia&apos;s largest concentration of convention centres, hotels, and event venues outside of KL city. In {currentYear}, Petaling Jaya, Shah Alam, Subang Jaya, and Putrajaya host thousands of corporate events, annual dinners, product launches, and conferences annually. The Shah Alam Convention Centre (SACC), Setia City Convention Centre, and Sunway Resort are among the busiest event venues in the Klang Valley. Selangor-based event videographers offer the advantage of proximity to these venues, faster response times, and often lower rates than KL-based teams while delivering the same professional multi-camera coverage, same-day edits, and live streaming capabilities.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Videographers in Selangor</h2>
          <p className="text-sm text-gray-500 mb-6">Showing {filtered.length} companies</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No exact matches found. <Link href="/locations/selangor" className="text-blue-600 hover:underline">Browse all Selangor companies</Link>.</p>
            </div>
          )}
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Videography Pricing in Selangor ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Basic (1 camera, 4 hrs)</td><td className="px-4 py-3 text-gray-700">RM1,800 – RM3,500</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Standard (2 cameras, full day)</td><td className="px-4 py-3 text-gray-700">RM4,000 – RM7,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Premium (multi-cam + SDE + drone)</td><td className="px-4 py-3 text-gray-700">RM7,000 – RM13,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Live Streaming Add-on</td><td className="px-4 py-3 text-gray-700">RM2,500 – RM7,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Need an Event Videographer in Selangor?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get free quotes from experienced event videography companies in PJ, Shah Alam, Subang, and across Selangor.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/guide/event-videography-packages" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Event Packages Guide</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does event videography cost in Selangor?</h3>
              <p className="text-gray-600">Event videography in Selangor ranges from RM1,800 for basic half-day coverage to RM13,000+ for premium multi-camera productions with same-day edits and drone footage in {currentYear}.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Which areas in Selangor do videographers cover?</h3>
              <p className="text-gray-600">Most Selangor videographers cover Petaling Jaya, Shah Alam, Subang Jaya, Cyberjaya, Putrajaya, Klang, Damansara, and surrounding areas without additional travel fees.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I get same-day edit for my corporate event?</h3>
              <p className="text-gray-600">Yes. Same-day edits (SDE) are available for RM3,000–RM5,000 extra. A dedicated editor works on-site with portable equipment to deliver a highlight reel before your event ends.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/guide/event-videography-packages" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Event Packages Guide</Link>
            <Link href="/guide/agm-live-streaming" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">AGM Live Streaming</Link>
            <Link href="/services/event-video-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Event Videography KL</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
