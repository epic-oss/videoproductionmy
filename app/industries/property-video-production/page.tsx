"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function PropertyVideoPage() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Property Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Property &amp; Real Estate Video Production Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional property video services for developers, agents, and real estate companies across Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Property video production in Malaysia costs between <strong>RM3,000 and RM15,000</strong> per project in {currentYear}. Listings with video receive 403% more enquiries than those without, making video an essential marketing tool for property developers and agents.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Property Video Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malaysia&apos;s property market is intensely competitive in {currentYear}, with developers in KL, Selangor, Penang, and Johor vying for buyer attention. Property video has become the most effective way to showcase developments, from luxury condominiums and landed homes to commercial spaces and mixed-use projects. Buyers — especially overseas investors and younger demographics — expect immersive video content before visiting a showroom. Drone footage captures the surrounding amenities and neighbourhood context, while interior walkthroughs let buyers experience the space virtually. For property agents, a professional video portfolio builds credibility and generates significantly more leads compared to photo-only listings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Property Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Condo &amp; Unit Walkthrough</h3>
              <p className="text-gray-600 text-sm">Cinematic interior tours showcasing layout, finishes, views, and unit features. Often paired with drone exterior shots.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Aerial / Drone Property Video</h3>
              <p className="text-gray-600 text-sm">Stunning aerial footage of the property, surrounding amenities, transport links, and neighbourhood. Essential for new developments.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Virtual Tour / 360° Video</h3>
              <p className="text-gray-600 text-sm">Interactive walkthrough allowing viewers to explore the property at their own pace. Popular with overseas buyers.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Developer Brand Video</h3>
              <p className="text-gray-600 text-sm">Company profile highlighting the developer&apos;s track record, projects, and vision. Used for investor presentations and corporate websites.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Construction Progress</h3>
              <p className="text-gray-600 text-sm">Monthly or quarterly drone documentation of construction milestones. Used for buyer updates, investor reports, and marketing.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Unit Walkthrough Video</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Aerial / Drone Property Shoot</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Full Development Video</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM15,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Construction Progress (per visit)</td><td className="px-4 py-3 text-gray-700">RM1,500 – RM3,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Virtual Tour / 360°</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM10,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Property Video Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Connect with video production companies experienced in property and real estate across Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a property video cost in Malaysia?</h3>
              <p className="text-gray-600">Property video production costs RM3,000–RM15,000 in {currentYear}. A basic unit walkthrough starts at RM3,000, while full development videos with drone footage, interiors, and amenity coverage cost RM8,000–RM15,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do property videos really generate more leads?</h3>
              <p className="text-gray-600">Yes. Property listings with video receive up to 403% more enquiries. Video builds trust and lets potential buyers experience the property virtually before scheduling a physical viewing.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use drone footage for my property listing?</h3>
              <p className="text-gray-600">Yes, but the drone operator must have CAAM certification. Professional video companies handle all permits. Drone footage is especially valuable for showing location context, surrounding amenities, and development scale.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/guide/drone-videography-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Videography Guide</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
