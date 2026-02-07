"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function CorporateVideoKLGuide() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a corporate video cost in KL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A corporate video in Kuala Lumpur costs RM5,000–RM50,000+ in ${currentYear}. A standard company profile video is RM5,000–RM15,000, while high-end TVCs can exceed RM100,000.`
        }
      },
      {
        "@type": "Question",
        "name": "How long does corporate video production take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 2–6 weeks from briefing to final delivery. Pre-production takes 1–2 weeks, filming 1–2 days, and post-production 1–3 weeks depending on complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do KL companies serve clients outside KL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most KL-based video production companies serve clients nationwide and can travel to any location in Malaysia. Some charge additional travel fees for outstation shoots."
        }
      },
      {
        "@type": "Question",
        "name": "What should I prepare before hiring a video production company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Have a clear objective, target audience, key messages, budget range, and timeline. A brief document helps companies provide accurate quotes."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://videoproductionmy.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://videoproductionmy.com/guide/video-production-pricing-malaysia" },
      { "@type": "ListItem", "position": 3, "name": "Corporate Video Production in Kuala Lumpur", "item": "https://videoproductionmy.com/guide/corporate-video-production-kl" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/corporate-video-production-kl" className="text-white">Corporate Video KL</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Corporate Video Production in Kuala Lumpur ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Everything you need to know about hiring a corporate video production company in KL — pricing, what to expect, and top-rated companies.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Corporate video production in Kuala Lumpur costs between <strong>RM5,000 and RM50,000+</strong> in {currentYear}. KL has the highest concentration of professional video production companies in Malaysia, offering everything from company profiles to training videos and investor presentations.
          </p>
        </div>

        {/* What to Expect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect from KL Video Production Companies</h2>
          <p className="text-gray-700 mb-4">
            Kuala Lumpur is Malaysia&apos;s media hub, home to the majority of the country&apos;s top-tier video production houses. In {currentYear}, KL companies offer:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Pre-production planning</strong> — Script writing, storyboarding, location scouting, talent casting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Professional crew</strong> — Director, DoP, sound engineer, lighting technician, production assistants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Cinema-grade equipment</strong> — 4K/6K cameras, professional lighting rigs, drone capability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Post-production</strong> — Editing, color grading, motion graphics, sound design, music licensing</span>
            </li>
          </ul>
        </section>

        {/* Pricing Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Corporate Video Pricing in KL ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Company Profile Video</td>
                  <td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td>
                  <td className="px-4 py-3 text-gray-600">2–5 minutes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Corporate Training Video</td>
                  <td className="px-4 py-3 text-gray-700">RM8,000 – RM25,000</td>
                  <td className="px-4 py-3 text-gray-600">5–15 minutes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Testimonial / Case Study</td>
                  <td className="px-4 py-3 text-gray-700">RM3,000 – RM10,000</td>
                  <td className="px-4 py-3 text-gray-600">1–3 minutes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Investor / AGM Presentation</td>
                  <td className="px-4 py-3 text-gray-700">RM10,000 – RM30,000</td>
                  <td className="px-4 py-3 text-gray-600">5–20 minutes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Social Media Content Package</td>
                  <td className="px-4 py-3 text-gray-700">RM3,000 – RM12,000</td>
                  <td className="px-4 py-3 text-gray-600">Multiple short videos</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">TVC / Commercial</td>
                  <td className="px-4 py-3 text-gray-700">RM20,000 – RM100,000+</td>
                  <td className="px-4 py-3 text-gray-600">15–60 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why KL */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Kuala Lumpur for Video Production</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Talent Pool</h3>
              <p className="text-gray-600 text-sm">KL has the largest concentration of experienced directors, cinematographers, editors, and voice talent in Malaysia.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Studio Facilities</h3>
              <p className="text-gray-600 text-sm">Multiple professional studios with green screen, sound stages, and equipment rental available throughout KL and PJ.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Diverse Locations</h3>
              <p className="text-gray-600 text-sm">From modern skyscrapers to heritage buildings, KL offers versatile filming locations for any corporate video concept.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">Despite being world-class, KL video production costs 50–70% less than Singapore, Hong Kong, or Australia.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Find Corporate Video Companies in KL</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Browse our directory of verified video production companies in Kuala Lumpur and get free quotes for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Quotes
            </button>
            <Link href="/locations/kuala-lumpur" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              KL Companies
            </Link>
          </div>
        </div>

        {/* Internal Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Locations</h2>
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
              <h3 className="font-semibold text-gray-900 mb-2">How much does a corporate video cost in KL?</h3>
              <p className="text-gray-600">A corporate video in Kuala Lumpur costs RM5,000–RM50,000+ in {currentYear}. A standard company profile video is RM5,000–RM15,000, while high-end TVCs can exceed RM100,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How long does corporate video production take?</h3>
              <p className="text-gray-600">Typically 2–6 weeks from briefing to final delivery. Pre-production takes 1–2 weeks, filming 1–2 days, and post-production 1–3 weeks depending on complexity.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do KL companies serve clients outside KL?</h3>
              <p className="text-gray-600">Yes. Most KL-based video production companies serve clients nationwide and can travel to any location in Malaysia. Some charge additional travel fees for outstation shoots.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What should I prepare before hiring a video production company?</h3>
              <p className="text-gray-600">Have a clear objective, target audience, key messages, budget range, and timeline. A brief document helps companies provide accurate quotes. Check our <Link href="/guide/how-to-choose-video-production-company" className="text-blue-600 hover:underline">how to choose guide</Link> for more tips.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
