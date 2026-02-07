"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function CorporateVideoSelangorPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "selangor" && c.services.includes("Corporate Video")
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
            <span className="text-white">Corporate Video Selangor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Corporate Video Production in Selangor ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Top corporate video production companies in Selangor — Petaling Jaya, Shah Alam, Subang Jaya, and surrounding areas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Selangor is a major hub for corporate video production in Malaysia, with many production houses based in Petaling Jaya, Shah Alam, Subang Jaya, and Cyberjaya. In {currentYear}, Selangor-based companies serve businesses across the Klang Valley and beyond, offering competitive pricing compared to KL city center while maintaining the same level of professional quality. From company profiles and HR training videos to brand documentaries and social media content, Selangor&apos;s video production companies bring years of experience working with both local SMEs and multinational corporations.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Corporate Video Companies in Selangor</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Corporate Video Pricing in Selangor ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Company Profile Video</td><td className="px-4 py-3 text-gray-700">RM4,000 – RM12,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Training / Internal Video</td><td className="px-4 py-3 text-gray-700">RM6,000 – RM20,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Brand Documentary</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM30,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Social Media Content</td><td className="px-4 py-3 text-gray-700">RM2,500 – RM10,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Get Corporate Video Quotes in Selangor</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Compare quotes from verified Selangor video production companies. Free and no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/locations/selangor" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">All Selangor Companies</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is corporate video production cheaper in Selangor than KL?</h3>
              <p className="text-gray-600">Generally yes — Selangor companies often have lower overhead costs. Expect 10–20% savings compared to KL city center for similar quality. Many companies in PJ and Shah Alam serve the entire Klang Valley.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Where are most video production companies in Selangor?</h3>
              <p className="text-gray-600">The majority are in Petaling Jaya, Shah Alam, Subang Jaya, and Cyberjaya. These areas have excellent studio facilities and easy access via highways to the rest of the Klang Valley.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can Selangor companies film at my KL office?</h3>
              <p className="text-gray-600">Absolutely. Selangor-based companies regularly film on location throughout the Klang Valley, including KL, Putrajaya, and Cyberjaya. Most don&apos;t charge extra for travel within the Klang Valley area.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/services/corporate-video-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video KL</Link>
            <Link href="/guide/corporate-video-production-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Guide</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
