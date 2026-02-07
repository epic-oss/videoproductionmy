"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function ManufacturingVideoPage() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Manufacturing Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Manufacturing &amp; Factory Video Production Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional video production for manufacturers, factories, and industrial companies across Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Manufacturing video production in Malaysia costs between <strong>RM8,000 and RM30,000</strong> per project in {currentYear}. Factory tours, process documentation, and corporate profiles help manufacturers win contracts, train staff, and comply with international certifications.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Manufacturing Companies Need Video</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malaysia&apos;s manufacturing sector — spanning electronics, automotive, rubber, palm oil, and halal food — is a cornerstone of the economy. In {currentYear}, video has become essential for manufacturers seeking to demonstrate their capabilities to international buyers who cannot always visit the factory in person. A professional factory tour video showcases production lines, quality control processes, and facility standards in a way that photos and brochures simply cannot. Video content is also critical for ISO audits, safety training documentation, investor presentations, and trade show marketing. With Malaysia&apos;s role as a regional manufacturing hub, companies that invest in video stand out from competitors when bidding for contracts.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Manufacturing Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Factory Tour Video</h3>
              <p className="text-gray-600 text-sm">Comprehensive walkthrough of production facilities showing equipment, processes, and capacity. Essential for overseas buyers and trade partners.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Safety Training Video</h3>
              <p className="text-gray-600 text-sm">Standardized safety procedures, PPE usage, emergency protocols, and machine operation training for factory workers.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Process Documentation</h3>
              <p className="text-gray-600 text-sm">Detailed recording of manufacturing processes for quality assurance, ISO compliance, and SOPs documentation.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Profile Video</h3>
              <p className="text-gray-600 text-sm">Brand story combining facility footage, leadership interviews, and achievements. Used for websites, trade shows, and investor presentations.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Aerial Factory Overview</h3>
              <p className="text-gray-600 text-sm">Drone footage showing factory scale, compound layout, logistics infrastructure, and surrounding area. Impressive for investors and partners.</p>
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
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Factory Tour Video</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM20,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Safety Training Video</td><td className="px-4 py-3 text-gray-700">RM10,000 – RM25,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Corporate Profile</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM18,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Process Documentation</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Aerial Factory Overview</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Manufacturing Video Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from video companies experienced with factories, plants, and industrial facilities in Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a factory video cost in Malaysia?</h3>
              <p className="text-gray-600">A factory tour video costs RM8,000–RM20,000 in {currentYear}. This includes pre-production planning, filming crew, equipment, and post-production editing with graphics and voiceover.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Are there special requirements for filming in factories?</h3>
              <p className="text-gray-600">Yes. Factory shoots require safety briefings, PPE for crew, and sometimes NDA agreements. Professional video companies are experienced with industrial environments and carry proper insurance.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can the video be produced in multiple languages?</h3>
              <p className="text-gray-600">Yes. Most companies offer multilingual production including English, Bahasa Malaysia, Mandarin, and Japanese — important for manufacturers with international clients and partners.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/locations/johor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Johor</Link>
            <Link href="/guide/drone-videography-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Videography Guide</Link>
            <Link href="/guide/corporate-video-production-guide" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
