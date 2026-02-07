"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function ProductVideoKLPage() {
  const { openModal } = useQuote();
  const filtered = companies.filter(
    (c) => c.locationSlug === "kuala-lumpur" && (c.services.includes("Product Video") || c.services.includes("Video Production"))
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
            <span className="text-white">Product Video KL</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Product Video Production Kuala Lumpur ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional product video production in KL for e-commerce, Shopee, Lazada, and brand marketing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Kuala Lumpur is the top destination for product video production in Malaysia, serving e-commerce sellers, brands, and agencies. In {currentYear}, product video is essential for Shopee, Lazada, TikTok Shop, and brand websites — listings with video see up to 80% higher conversion rates. KL-based studios offer everything from simple 360° product spins and unboxing videos to lifestyle shoots with models and professional styling. Whether you&apos;re a small seller looking for affordable product clips or a brand needing premium commercial-grade content, KL has the talent and facilities to deliver.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Video Companies in Kuala Lumpur</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Video Pricing in KL ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Simple Product Spin (360°)</td><td className="px-4 py-3 text-gray-700">RM500 – RM1,500</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Product Demo / Unboxing</td><td className="px-4 py-3 text-gray-700">RM1,000 – RM3,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Lifestyle Product Video</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Bulk Package (10+ products)</td><td className="px-4 py-3 text-gray-700">RM300 – RM800/product</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Get Product Video Quotes in KL</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Connect with KL studios that specialize in product videos for Shopee, Lazada, and brand marketing.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/guide/product-video-ecommerce" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Product Video Guide</Link>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a product video cost in KL?</h3>
              <p className="text-gray-600">Simple product spins start at RM500 per product. Lifestyle product videos with models cost RM2,000–RM5,000. Bulk packages (10+ products) offer significant savings at RM300–RM800 per product in {currentYear}.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use the video for Shopee, Lazada, and my website?</h3>
              <p className="text-gray-600">Yes. Most KL studios deliver files optimized for multiple platforms. You&apos;ll typically receive versions for marketplace listings (square/vertical) and website use (widescreen).</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How many products can be filmed in one session?</h3>
              <p className="text-gray-600">Most KL studios can film 5–15 simple product videos in a single day session. Complex lifestyle shoots typically cover 3–5 products per day depending on styling requirements.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/guide/product-video-ecommerce" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Product Video Guide</Link>
            <Link href="/services/corporate-video-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video KL</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
