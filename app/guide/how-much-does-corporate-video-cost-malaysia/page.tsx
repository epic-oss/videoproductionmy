"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function CorporateVideoCostPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much should a small business budget for video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malaysian SMEs typically spend RM5,000–RM15,000 on their first corporate video. Start with a company profile or testimonial video in the RM5,000–RM8,000 range, then invest more as you see ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Why do some companies charge RM5,000 and others RM50,000 for the same video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The difference is in crew size, equipment quality, creative process, and production value. A RM5,000 video uses a small crew with basic equipment. A RM50,000 video involves cinema cameras, professional talent, extensive pre-production, and premium post-production."
        }
      },
      {
        "@type": "Question",
        "name": "Are there hidden costs I should know about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watch for: additional revision rounds (most include 2), location permit fees, talent fees, stock music licensing, travel costs for out-of-KL shoots, and rush delivery charges. Always clarify what's included in the quoted price."
        }
      },
      {
        "@type": "Question",
        "name": "Can I negotiate video production prices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but focus on scope rather than slashing rates. Reduce shoot days, locations, or video length to lower costs. Many companies offer bundle pricing if you commit to multiple videos. Retainer agreements (monthly content) also offer better per-video rates."
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
      { "@type": "ListItem", "position": 3, "name": "Corporate Video Cost", "item": "https://videoproductionmy.com/guide/how-much-does-corporate-video-cost-malaysia" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/video-production-pricing-malaysia" className="hover:text-white">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Corporate Video Cost</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Much Does a Corporate Video Cost in Malaysia? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A detailed breakdown of corporate video production pricing by type, duration, complexity, and crew size.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            A corporate video in Malaysia costs <strong>RM5,000 to RM30,000</strong> in {currentYear}. A basic company profile video starts from RM5,000, mid-range productions run RM10,000–RM20,000, and high-end corporate films with actors, multiple locations, and animation can exceed RM30,000. The main cost factors are video duration, crew size, equipment, number of shoot days, and post-production complexity.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing by Video Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Company Profile Video</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td><td className="px-4 py-3 text-gray-700">2–4 minutes</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Testimonial / Case Study</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM10,000</td><td className="px-4 py-3 text-gray-700">1–3 minutes</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Training Video</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM25,000</td><td className="px-4 py-3 text-gray-700">5–15 minutes</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Brand Film / Documentary</td><td className="px-4 py-3 text-gray-700">RM15,000 – RM50,000</td><td className="px-4 py-3 text-gray-700">3–8 minutes</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">TV Commercial (TVC)</td><td className="px-4 py-3 text-gray-700">RM20,000 – RM100,000+</td><td className="px-4 py-3 text-gray-700">15–60 seconds</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Social Media Video</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM8,000</td><td className="px-4 py-3 text-gray-700">15–60 seconds</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Factors That Affect Cost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Video Duration</h3>
              <p className="text-gray-600 text-sm">Longer videos require more filming, editing, and audio work. A 2-minute video costs roughly 40–50% less than a 5-minute video with the same production quality.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Crew Size</h3>
              <p className="text-gray-600 text-sm">A 2-person crew (camera + director) costs RM2,000–RM4,000/day. A full production crew (5–10 people with DP, sound, gaffer, makeup) costs RM8,000–RM15,000/day.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Level</h3>
              <p className="text-gray-600 text-sm">DSLR/mirrorless setups cost less than cinema cameras (RED, ARRI). Add RM2,000–RM5,000 for drone, RM1,000–RM3,000 for professional lighting rigs.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Number of Locations</h3>
              <p className="text-gray-600 text-sm">Each additional location adds setup/teardown time. Multi-location shoots (office, factory, outdoor) can add RM2,000–RM5,000 per additional location.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Post-Production Complexity</h3>
              <p className="text-gray-600 text-sm">Basic editing (cuts, music, titles) is RM1,000–RM3,000. Adding motion graphics, animation, colour grading, and voiceover adds RM3,000–RM10,000.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Talent &amp; Voiceover</h3>
              <p className="text-gray-600 text-sm">Using your own staff is free. Professional actors cost RM500–RM5,000/day. Professional voiceover artists charge RM500–RM2,000 per recording session.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget Tiers Explained</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-5 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Budget: RM5,000 – RM10,000</h3>
              <p className="text-gray-600 text-sm">Small crew (2–3 people), DSLR/mirrorless camera, 1 shoot day, 1 location, basic editing with music and titles. Good for simple company profiles, testimonials, and social media content.</p>
            </div>
            <div className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Mid-Range: RM10,000 – RM20,000</h3>
              <p className="text-gray-600 text-sm">Full production crew (4–6 people), professional camera, 1–2 shoot days, 2–3 locations, scripted content, professional editing with colour grading, motion graphics, and voiceover. Standard for quality corporate videos.</p>
            </div>
            <div className="border-l-4 border-purple-500 bg-purple-50 p-5 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Premium: RM20,000 – RM50,000+</h3>
              <p className="text-gray-600 text-sm">Large crew (8+ people), cinema cameras, drone, 2–3 shoot days, multiple locations, professional talent, extensive post-production with animation and visual effects. For brand films, documentaries, and high-stakes investor content.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Get an Exact Quote for Your Project</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Tell us about your corporate video needs and receive free quotes from Malaysian production companies matched to your budget.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much should a small business budget for video?</h3>
              <p className="text-gray-600">Malaysian SMEs typically spend RM5,000–RM15,000 on their first corporate video. Start with a company profile or testimonial video in the RM5,000–RM8,000 range, then invest more as you see ROI.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Why do some companies charge RM5,000 and others RM50,000 for the same video?</h3>
              <p className="text-gray-600">The difference is in crew size, equipment quality, creative process, and production value. A RM5,000 video uses a small crew with basic equipment. A RM50,000 video involves cinema cameras, professional talent, extensive pre-production, and premium post-production.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Are there hidden costs I should know about?</h3>
              <p className="text-gray-600">Watch for: additional revision rounds (most include 2), location permit fees, talent fees, stock music licensing, travel costs for out-of-KL shoots, and rush delivery charges. Always clarify what&apos;s included in the quoted price.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I negotiate video production prices?</h3>
              <p className="text-gray-600">Yes, but focus on scope rather than slashing rates. Reduce shoot days, locations, or video length to lower costs. Many companies offer bundle pricing if you commit to multiple videos. Retainer agreements (monthly content) also offer better per-video rates.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Full Pricing Guide</Link>
            <Link href="/guide/videographer-day-rate-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Videographer Day Rates</Link>
            <Link href="/guide/production-house-vs-freelancer" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production House vs Freelancer</Link>
            <Link href="/guide/video-production-timeline" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production Timeline</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
