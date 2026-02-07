"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function CorporateVideoJohorPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "johor" && (c.services.includes("Corporate Video") || c.services.includes("Video Production"))
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
            <span className="text-white">Corporate Video Johor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Corporate Video Production in Johor Bahru ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional corporate video production companies in Johor Bahru and Iskandar Malaysia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Johor Bahru is Malaysia&apos;s second-largest economic hub, home to Iskandar Malaysia&apos;s growing business district, manufacturing zones, and multinational corporations. In {currentYear}, JB&apos;s corporate video production market serves companies in manufacturing, logistics, property development, and technology across Iskandar Puteri, Nusajaya, Pasir Gudang, and the JB city centre. Many JB businesses also serve the Singapore market, requiring bilingual video content. Whether you need a factory tour video, company profile, investor presentation, or training series, Johor-based production companies offer competitive pricing compared to KL while maintaining professional quality.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Corporate Video Companies in Johor</h2>
          <p className="text-sm text-gray-500 mb-6">Showing {filtered.length} companies</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No exact matches found. <Link href="/locations/johor" className="text-blue-600 hover:underline">Browse all Johor companies</Link>.</p>
            </div>
          )}
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Corporate Video Pricing in Johor ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Company Profile Video</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM12,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Factory / Facility Tour</td><td className="px-4 py-3 text-gray-700">RM6,000 – RM15,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Training Video</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM18,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Testimonial / Case Study</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Get Corporate Video Quotes in Johor</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Tell us about your project and receive free quotes from Johor-based video production companies.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/locations/johor" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">All Johor Companies</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a corporate video cost in Johor Bahru?</h3>
              <p className="text-gray-600">A company profile video in JB typically costs RM5,000–RM12,000 in {currentYear}. Factory tour videos with drone footage can go up to RM15,000 depending on the facility size and complexity.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can JB video companies produce bilingual content?</h3>
              <p className="text-gray-600">Yes. Many Johor production houses create content in English, Bahasa Malaysia, and Mandarin. This is especially common for companies targeting both Malaysian and Singaporean audiences.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is it cheaper to hire a video company in JB compared to KL?</h3>
              <p className="text-gray-600">Generally yes. JB production companies offer 10–20% lower rates than KL equivalents for similar quality, making it a cost-effective option for southern Peninsular Malaysia businesses.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/johor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Johor</Link>
            <Link href="/guide/corporate-video-production-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Guide</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/industries/manufacturing-video-production" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Manufacturing Video</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
