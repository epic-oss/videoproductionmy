"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function CorporateVideoKLPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "kuala-lumpur" && c.services.includes("Corporate Video")
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
            <span className="text-white">Corporate Video KL</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Corporate Video Production in Kuala Lumpur ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Find the best corporate video production companies in KL. Compare services, portfolios, and get free quotes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Kuala Lumpur is home to Malaysia&apos;s top corporate video production houses. Whether you need a company profile video, internal training content, investor presentations, or brand documentaries, KL offers the largest selection of experienced production companies in the country. In {currentYear}, corporate video remains one of the most effective ways to communicate your brand story, train employees, and engage stakeholders. Most KL-based companies offer end-to-end services from scripting and storyboarding to filming and post-production.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Corporate Video Companies in Kuala Lumpur
          </h2>
          <p className="text-sm text-gray-500 mb-6">Showing {filtered.length} companies</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No exact matches found. <Link href="/locations/kuala-lumpur" className="text-blue-600 hover:underline">Browse all KL companies</Link>.</p>
            </div>
          )}
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Corporate Video Pricing in KL ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Company Profile Video</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Training Video</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM25,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Testimonial Video</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM10,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">TVC / Commercial</td><td className="px-4 py-3 text-gray-700">RM20,000 – RM100,000+</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Get Corporate Video Quotes in KL</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Tell us about your project and receive free quotes from top-rated KL video production companies.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/locations/kuala-lumpur" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">All KL Companies</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a corporate video cost in KL?</h3>
              <p className="text-gray-600">A company profile video in Kuala Lumpur typically costs RM5,000–RM15,000 in {currentYear}. High-end productions like TVCs can exceed RM50,000 depending on scope and talent involved.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How long does it take to produce a corporate video?</h3>
              <p className="text-gray-600">Most corporate videos take 2–6 weeks from brief to delivery. This includes 1–2 weeks pre-production, 1–2 days filming, and 1–3 weeks post-production and revisions.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What&apos;s included in a corporate video package?</h3>
              <p className="text-gray-600">Typical packages include scriptwriting, filming crew, equipment, editing, color grading, music licensing, and 1–2 revision rounds. Some companies also include motion graphics and voiceover.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/guide/corporate-video-production-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Guide KL</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/services/event-video-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Event Videography KL</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
