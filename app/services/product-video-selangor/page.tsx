"use client";

import Link from "next/link";
import { companies } from "@/lib/data";
import { useQuote } from "@/app/components/QuoteContext";
import CompanyCard from "@/app/components/CompanyCard";

const currentYear = new Date().getFullYear();

export default function ProductVideoSelangorPage() {
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
            <span className="text-white">Product Video Selangor</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Product Video Production in Selangor ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional product video production in Shah Alam, PJ, Subang, and across Selangor for ecommerce and brands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="max-w-4xl mb-10">
          <p className="text-gray-700 leading-relaxed">
            Selangor is the heart of Malaysia&apos;s ecommerce and manufacturing ecosystem. In {currentYear}, Shah Alam&apos;s industrial zones, PJ&apos;s commercial hubs, and Subang&apos;s tech-savvy businesses all fuel demand for high-quality product videos. Whether you&apos;re selling on Shopee, Lazada, TikTok Shop, or your own website, product videos dramatically boost conversion rates — listings with video see 20–40% higher sales. Selangor-based studios offer everything from simple white-background product spins to lifestyle shoots, unboxing videos, and social media ads. Proximity to warehouses and manufacturing facilities means faster turnaround and the ability to film at your premises or in professional studios across the Klang Valley.
          </p>
        </div>

        {/* Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Video Companies in Selangor</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Video Pricing in Selangor ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-3xl">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Simple product video (per product)</td><td className="px-4 py-3 text-gray-700">RM500 – RM1,500</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Lifestyle product shoot (5-10 products)</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Ecommerce video package (20+ SKUs)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Social media ad / TikTok content</td><td className="px-4 py-3 text-gray-700">RM1,000 – RM3,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-3">Need Product Videos in Selangor?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get free quotes from product video specialists in Shah Alam, PJ, Subang, and across Selangor.</p>
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
              <h3 className="font-semibold text-gray-900 mb-2">How much does a product video cost in Selangor?</h3>
              <p className="text-gray-600">Simple product videos start from RM500 per product in {currentYear}. Bulk ecommerce packages for 20+ SKUs cost RM5,000–RM15,000, offering significant per-unit savings.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can the video team shoot at my warehouse or factory?</h3>
              <p className="text-gray-600">Yes. Most Selangor product video companies offer on-location shoots at your warehouse, factory, or office. This is especially popular for large or heavy products that are difficult to transport to a studio.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What format works best for Shopee and Lazada?</h3>
              <p className="text-gray-600">Shopee and Lazada recommend 1:1 (square) or 9:16 (vertical) videos under 60 seconds. Professional studios deliver platform-optimized formats with captions, branding, and call-to-action overlays.</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/guide/product-video-ecommerce" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Product Video Guide</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/services/product-video-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Product Video KL</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
