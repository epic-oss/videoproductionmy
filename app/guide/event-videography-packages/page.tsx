"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function EventVideographyPackagesGuide() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/event-videography-packages" className="text-white">Event Videography</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Event Videography Packages &amp; Pricing Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Compare event videography packages in Malaysia — from basic coverage to full multi-camera productions with same-day edits.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Event videography in Malaysia costs between <strong>RM2,000 and RM15,000+</strong> in {currentYear}. Basic single-camera coverage starts at RM2,000, while premium multi-camera packages with same-day edit, drone, and live streaming range from RM8,000–RM15,000+.
          </p>
        </div>

        {/* Package Tiers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Videography Package Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Basic */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 text-center">
                <h3 className="font-bold text-gray-900">Basic</h3>
                <p className="text-2xl font-bold text-blue-600 mt-1">RM2,000 – RM4,000</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> 1 videographer</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Single camera</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Up to 4 hours coverage</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> 3–5 min highlight video</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Basic color correction</li>
                  <li className="flex items-center gap-2"><span className="text-gray-300">&#10007;</span> No drone</li>
                  <li className="flex items-center gap-2"><span className="text-gray-300">&#10007;</span> No same-day edit</li>
                </ul>
              </div>
            </div>

            {/* Standard */}
            <div className="border-2 border-blue-600 rounded-lg overflow-hidden">
              <div className="bg-blue-600 p-4 text-center text-white">
                <p className="text-xs font-medium mb-1">MOST POPULAR</p>
                <h3 className="font-bold">Standard</h3>
                <p className="text-2xl font-bold mt-1">RM5,000 – RM8,000</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> 2 videographers</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Multi-camera setup</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Full day coverage (8 hrs)</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> 5–8 min highlight + full</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Color grading &amp; graphics</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Licensed music</li>
                  <li className="flex items-center gap-2"><span className="text-gray-300">&#10007;</span> No drone</li>
                </ul>
              </div>
            </div>

            {/* Premium */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-900 p-4 text-center text-white">
                <h3 className="font-bold">Premium</h3>
                <p className="text-2xl font-bold mt-1">RM8,000 – RM15,000+</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> 3+ videographers</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Multi-camera + gimbal</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Full day + overtime</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Same-day edit</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Drone footage</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Live streaming</li>
                  <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Full event + highlights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Typically Included</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Event Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Conference / Seminar</td>
                  <td className="px-4 py-3 text-gray-700">RM3,000 – RM10,000</td>
                  <td className="px-4 py-3 text-gray-600">Full recording + highlights + speaker clips</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Corporate Dinner / Gala</td>
                  <td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td>
                  <td className="px-4 py-3 text-gray-600">Highlight reel + full coverage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Product Launch</td>
                  <td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td>
                  <td className="px-4 py-3 text-gray-600">Teaser + highlight + social media cuts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Exhibition / Trade Show</td>
                  <td className="px-4 py-3 text-gray-700">RM2,500 – RM8,000</td>
                  <td className="px-4 py-3 text-gray-600">Booth coverage + interviews + recap</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Town Hall / Internal Event</td>
                  <td className="px-4 py-3 text-gray-700">RM2,000 – RM6,000</td>
                  <td className="px-4 py-3 text-gray-600">Full recording + key moments edit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Right Package</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>Consider your audience:</strong> Internal events may only need basic coverage, while client-facing events benefit from premium multi-camera production.</p>
            <p><strong>Think about deliverables:</strong> Do you need a full recording, highlight reel, social media clips, or all three? This affects crew size and editing time.</p>
            <p><strong>Same-day edit:</strong> If you need a recap video to show at the end of the event, budget for the premium tier with dedicated on-site editors.</p>
            <p><strong>Live streaming:</strong> If remote attendees need to watch live, ensure the package includes streaming equipment and a dedicated streaming operator.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Get Event Videography Quotes</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Compare packages from verified event videography companies across Malaysia. Free quotes, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Quotes
            </button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Internal Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Event Videographers Near You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Kuala Lumpur</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Selangor</Link>
            <Link href="/locations/penang" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Penang</Link>
            <Link href="/locations/johor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Johor</Link>
            <Link href="/locations/melaka" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Melaka</Link>
            <Link href="/locations/sabah" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Sabah</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does event videography cost in Malaysia?</h3>
              <p className="text-gray-600">Event videography costs RM2,000–RM15,000+ in {currentYear}. Basic single-camera coverage starts at RM2,000, while multi-camera packages with drone and same-day edit are RM8,000–RM15,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What is a same-day edit (SDE)?</h3>
              <p className="text-gray-600">A same-day edit is a highlight video edited on-site and played back at the end of the event. It typically requires a dedicated editor with a laptop workstation at the venue.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How many cameras do I need for my event?</h3>
              <p className="text-gray-600">For small events (under 100 pax), 1–2 cameras suffice. For conferences, galas, or product launches, 2–3 cameras ensure complete coverage from multiple angles.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How long does it take to receive the final video?</h3>
              <p className="text-gray-600">Most companies deliver highlight reels within 1–2 weeks and full event recordings within 2–4 weeks after the event date.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
