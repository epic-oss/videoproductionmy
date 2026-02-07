"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function DroneVideoSelangorPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "selangor" && (c.services.includes("Video Production") || c.services.includes("Corporate Video"))
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
            <span className="text-white">Drone Video Selangor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Drone Videography Services Selangor ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Licensed drone videography services in Selangor for property, construction, events, and commercial projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Selangor&apos;s diverse landscape — from Shah Alam&apos;s industrial zones and Petaling Jaya&apos;s commercial districts to Sepang&apos;s new developments — makes it one of the most in-demand areas for drone videography in Malaysia. In {currentYear}, drone video is widely used for property marketing, construction progress documentation, corporate facility overviews, and event coverage across the state. All commercial drone operations in Selangor require CAAM-licensed pilots, and many video production companies in the area now offer drone services as part of their standard packages.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Video Production Companies with Drone Services in Selangor</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Drone Videography Pricing in Selangor ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Half-Day Aerial Shoot</td><td className="px-4 py-3 text-gray-700">RM1,500 – RM3,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Full-Day Aerial Shoot</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM6,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Property / Real Estate</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Construction Progress (per visit)</td><td className="px-4 py-3 text-gray-700">RM1,500 – RM3,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Need Drone Videography in Selangor?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from CAAM-licensed drone operators and video production companies in Selangor.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/guide/drone-videography-malaysia" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Drone Video Guide</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can drones fly in Selangor&apos;s urban areas?</h3>
              <p className="text-gray-600">Yes, with proper CAAM permits. However, areas near Sultan Abdul Aziz Shah Airport (Subang) and KLIA have restricted airspace. Licensed operators know how to obtain the necessary clearances.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does drone video cost in Selangor?</h3>
              <p className="text-gray-600">Drone videography in Selangor costs RM1,500–RM6,000 in {currentYear}. Property shoots are RM2,000–RM5,000, while construction documentation runs RM1,500–RM3,000 per visit.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do I need to arrange the drone permit myself?</h3>
              <p className="text-gray-600">No. Professional drone operators handle all CAAM permits, flight permissions, and insurance. This is included in their service fee. Always verify that your operator has a valid RPL and UAOC.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/guide/drone-videography-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Video Guide</Link>
            <Link href="/services/corporate-video-selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Selangor</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
