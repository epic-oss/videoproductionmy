"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function TikTokVideoProductionPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a TikTok video cost to produce in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A single professionally produced TikTok video costs RM1,000–RM3,000. Batch filming (5–10 videos in one session) brings the per-video cost down to RM500–RM1,200. Monthly retainers for ongoing content start from RM3,000."
        }
      },
      {
        "@type": "Question",
        "name": "Should I hire an agency or create content in-house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For consistent, trend-aware content, an agency is usually better — they understand platform algorithms, trending formats, and batch filming efficiency. In-house works well if you have a dedicated social media person who stays current with trends."
        }
      },
      {
        "@type": "Question",
        "name": "Can TikTok content be repurposed for Instagram Reels and YouTube Shorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and it should be. Most agencies produce platform-agnostic vertical content that works across TikTok, Reels, and Shorts. Minor adjustments (removing watermarks, adjusting captions) are needed for cross-posting."
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
      { "@type": "ListItem", "position": 3, "name": "TikTok Video Production", "item": "https://videoproductionmy.com/guide/tiktok-video-production" }
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
            <span className="text-white">TikTok Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            TikTok &amp; Reels Video Production for Malaysian Brands ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Everything Malaysian businesses need to know about producing short-form vertical video for TikTok, Instagram Reels, and YouTube Shorts.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Professional TikTok/Reels production in Malaysia costs <strong>RM1,000–RM5,000 per video</strong> or <strong>RM3,000–RM10,000/month</strong> for content retainers. Short-form vertical video is now the highest-ROI content format for consumer brands, with TikTok Shop driving direct sales for Malaysian businesses.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Trend Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malaysia has over 15 million TikTok users in {currentYear}, making it one of Southeast Asia&apos;s most active markets. Instagram Reels and YouTube Shorts have followed, creating an ecosystem where short-form vertical video dominates consumer attention. For Malaysian brands — from F&amp;B chains in Bukit Bintang to fashion labels in Bangsar — TikTok is no longer optional. It&apos;s where Gen Z and millennials discover products, compare brands, and make purchasing decisions. With TikTok Shop now integrated directly into the platform, video content drives both brand awareness and direct sales simultaneously.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Production Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Strategy &amp; Trend Research</h3>
                <p className="text-gray-600 text-sm">Agency researches trending sounds, formats, and hashtags relevant to your niche in Malaysia. Develops a content calendar (8–20 videos/month).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Scripting &amp; Hook Development</h3>
                <p className="text-gray-600 text-sm">Each video starts with a strong hook (first 1–3 seconds). Scripts are written for 15–60 second formats with clear call-to-action.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Filming (Vertical 9:16)</h3>
                <p className="text-gray-600 text-sm">Shot on phone or mirrorless camera in vertical format. Batch filming (5–10 videos in one session) reduces per-video cost significantly.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Editing &amp; Optimisation</h3>
                <p className="text-gray-600 text-sm">Fast-paced editing, captions, trending audio, text overlays, and platform-specific optimisation. Each video tailored for TikTok, Reels, and Shorts.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold text-gray-900">Publishing &amp; TikTok Shop Integration</h3>
                <p className="text-gray-600 text-sm">Videos tagged with products for TikTok Shop, published at optimal times, with hashtag strategy and creator collaboration when applicable.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Single Video</td><td className="px-4 py-3 text-gray-700">RM1,000 – RM3,000</td><td className="px-4 py-3 text-gray-700">1 video, scripted, edited, captioned</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Batch Package (10 videos)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM12,000</td><td className="px-4 py-3 text-gray-700">10 videos, 1–2 shoot days, edited</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Monthly Retainer (8 videos)</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000/month</td><td className="px-4 py-3 text-gray-700">Strategy, filming, editing, posting</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Premium Retainer (20 videos)</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM15,000/month</td><td className="px-4 py-3 text-gray-700">Full content management, analytics</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">TikTok vs Traditional Video: When to Use Each</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Use TikTok/Reels For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Consumer brand awareness and discovery</li>
                <li>&#x2022; Product launches and promotions</li>
                <li>&#x2022; TikTok Shop sales integration</li>
                <li>&#x2022; Behind-the-scenes and authentic content</li>
                <li>&#x2022; Reaching Gen Z and millennial Malaysians</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Use Traditional Video For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Corporate profiles and investor content</li>
                <li>&#x2022; Website homepage hero videos</li>
                <li>&#x2022; B2B and enterprise marketing</li>
                <li>&#x2022; TV commercials and broadcast</li>
                <li>&#x2022; Formal brand storytelling</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need TikTok &amp; Reels Content?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian agencies specialising in short-form video production and TikTok Shop content.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a TikTok video cost to produce in Malaysia?</h3>
              <p className="text-gray-600">A single professionally produced TikTok video costs RM1,000–RM3,000 in {currentYear}. Batch filming (5–10 videos in one session) brings the per-video cost down to RM500–RM1,200. Monthly retainers for ongoing content start from RM3,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Should I hire an agency or create content in-house?</h3>
              <p className="text-gray-600">For consistent, trend-aware content, an agency is usually better — they understand platform algorithms, trending formats, and batch filming efficiency. In-house works well if you have a dedicated social media person who stays current with trends.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can TikTok content be repurposed for Instagram Reels and YouTube Shorts?</h3>
              <p className="text-gray-600">Yes, and it should be. Most agencies produce platform-agnostic vertical content that works across TikTok, Reels, and Shorts. Minor adjustments (removing watermarks, adjusting captions) are needed for cross-posting.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/ugc-vs-professional-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">UGC vs Professional</Link>
            <Link href="/guide/vertical-video-corporate" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Vertical Video for B2B</Link>
            <Link href="/guide/ai-video-production-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">AI Video Production</Link>
            <Link href="/industries/fnb-restaurant-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">F&amp;B Video Production</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
