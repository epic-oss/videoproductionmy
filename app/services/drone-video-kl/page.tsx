"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function DroneVideoKLPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "kuala-lumpur" && (c.services.includes("Video Production") || c.services.includes("Corporate Video"))
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
            <span className="text-white">Drone Videography KL</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Drone Videography Services in Kuala Lumpur ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Licensed drone operators in KL for aerial filming, property showcases, construction progress, and event coverage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Kuala Lumpur&apos;s iconic skyline — from the Petronas Twin Towers to the KL Tower and emerging TRX district — makes aerial footage particularly stunning and in-demand. In {currentYear}, drone videography in KL is used extensively for property marketing, construction progress documentation, corporate videos, and event coverage. However, KL falls within controlled airspace managed by CAAM (Civil Aviation Authority of Malaysia), meaning all commercial drone operations require proper permits and licensed operators. Professional KL drone videographers handle all permits, use DJI-certified equipment, carry insurance, and deliver cinematic 4K aerial footage that elevates any production.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Video Production Companies with Drone Services in KL</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Drone Videography Pricing in KL ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Half-day drone shoot (4 hrs)</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM4,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Full-day drone shoot</td><td className="px-4 py-3 text-gray-700">RM4,000 – RM7,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Property aerial package</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Construction progress (monthly)</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000/visit</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">CAAM permit processing</td><td className="px-4 py-3 text-gray-700">RM500 – RM1,500</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Need Drone Videography in KL?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get free quotes from licensed drone operators and aerial filming specialists in Kuala Lumpur.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/guide/drone-videography-malaysia" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Drone Guide</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do I need a permit to fly drones in KL?</h3>
              <p className="text-gray-600">Yes. Commercial drone flights in Kuala Lumpur require CAAM approval due to controlled airspace near KLIA and Subang Airport. Professional operators handle all permit applications, typically taking 5–14 working days.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does drone videography cost in KL?</h3>
              <p className="text-gray-600">Drone videography in KL costs RM2,000–RM7,000 per day in {currentYear}, depending on the scope. Property aerial packages start from RM3,000. CAAM permit fees are typically RM500–RM1,500 extra.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What areas in KL are restricted for drone flying?</h3>
              <p className="text-gray-600">Areas near airports (Subang, KLIA), military zones, government buildings, and the city centre require special permits. Professional operators know the restricted zones and obtain necessary clearances in advance.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/guide/drone-videography-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Videography Guide</Link>
            <Link href="/industries/property-video-production" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Property Video Production</Link>
            <Link href="/services/drone-video-selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Video Selangor</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
