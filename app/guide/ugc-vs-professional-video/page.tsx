"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function UGCVsProfessionalPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use both UGC and professional video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely — and most successful brands do. Use professional video for your website, YouTube, and brand campaigns. Use UGC for paid social ads, product reviews, and TikTok content. The two complement each other."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find UGC creators in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Platforms like TikTok Creator Marketplace, Instagram DMs, and local UGC agencies connect brands with creators. Expect to pay RM500–RM3,000 per video depending on the creator's following and deliverables."
        }
      },
      {
        "@type": "Question",
        "name": "Which has better ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UGC typically delivers better short-term ROI for performance marketing (direct sales, app installs). Professional video delivers better long-term ROI for brand building, investor relations, and corporate trust. Measure each against its specific goals."
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
      { "@type": "ListItem", "position": 3, "name": "UGC vs Professional Video", "item": "https://videoproductionmy.com/guide/ugc-vs-professional-video" }
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
            <span className="text-white">UGC vs Professional Video</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            UGC vs Professional Brand Video: What Works Better? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Comparing user-generated content and professional brand videos — authenticity, cost, conversion rates, and when to use each.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            <strong>UGC</strong> works best for social media ads, product reviews, and building trust (RM500–RM3,000). <strong>Professional video</strong> works best for brand films, corporate content, and hero campaigns (RM5,000–RM30,000+). The best strategy in {currentYear} uses both in a content mix.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">UGC</th>
                  <th className="px-4 py-3 text-left">Professional Video</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Cost</td><td className="px-4 py-3 text-gray-700">RM500 – RM3,000 per video</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM30,000+</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Authenticity</td><td className="px-4 py-3 text-gray-700">Very high — feels real and relatable</td><td className="px-4 py-3 text-gray-700">Lower — clearly produced content</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Production Quality</td><td className="px-4 py-3 text-gray-700">Phone-quality, raw, natural</td><td className="px-4 py-3 text-gray-700">Cinema-grade, polished, branded</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Conversion Rate</td><td className="px-4 py-3 text-gray-700">Higher for social ads (20–30% more clicks)</td><td className="px-4 py-3 text-gray-700">Higher for website, investor, B2B</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Turnaround</td><td className="px-4 py-3 text-gray-700">3–7 days</td><td className="px-4 py-3 text-gray-700">2–6 weeks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Brand Control</td><td className="px-4 py-3 text-gray-700">Limited — creator&apos;s style</td><td className="px-4 py-3 text-gray-700">Full — every frame controlled</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Best Platform</td><td className="px-4 py-3 text-gray-700">TikTok, Instagram Reels, FB Ads</td><td className="px-4 py-3 text-gray-700">Website, YouTube, LinkedIn, TV</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Shelf Life</td><td className="px-4 py-3 text-gray-700">Short (1–3 months before refresh)</td><td className="px-4 py-3 text-gray-700">Long (1–3 years for evergreen)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">UGC: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; 20–30% higher click-through rate on social ads</li>
                <li>&#x2022; Feels authentic and trustworthy to audiences</li>
                <li>&#x2022; Very affordable (RM500–RM3,000 per video)</li>
                <li>&#x2022; Fast turnaround (days, not weeks)</li>
                <li>&#x2022; Easy to test multiple angles and messages</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Limited brand control over final output</li>
                <li>&#x2022; Lower production quality (phone-shot)</li>
                <li>&#x2022; Short shelf life — trends change quickly</li>
                <li>&#x2022; Not suitable for corporate or investor audiences</li>
                <li>&#x2022; Quality varies between creators</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Video: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Premium look builds brand credibility</li>
                <li>&#x2022; Full creative and brand control</li>
                <li>&#x2022; Long shelf life (1–3 years for evergreen content)</li>
                <li>&#x2022; Effective for B2B, corporate, and investor use</li>
                <li>&#x2022; Multi-platform repurposing (TV, web, events)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; 5–10x more expensive than UGC</li>
                <li>&#x2022; Longer production timeline (weeks)</li>
                <li>&#x2022; Can feel &quot;salesy&quot; on social platforms</li>
                <li>&#x2022; Harder to A/B test and iterate quickly</li>
                <li>&#x2022; Requires detailed briefing and planning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose UGC If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You&apos;re running <strong>paid social media ads</strong> on TikTok, Instagram, or Facebook</li>
              <li>&#x2022; You sell <strong>consumer products</strong> (skincare, fashion, F&amp;B, gadgets)</li>
              <li>&#x2022; You need <strong>volume</strong> — multiple ad creatives for A/B testing</li>
              <li>&#x2022; Your budget is <strong>under RM5,000</strong> per campaign</li>
              <li>&#x2022; You want <strong>testimonials and reviews</strong> that feel genuine</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Professional Video If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You need a <strong>company profile, brand film, or corporate video</strong></li>
              <li>&#x2022; The audience is <strong>investors, board members, or B2B clients</strong></li>
              <li>&#x2022; The video will be on your <strong>website homepage or YouTube channel</strong></li>
              <li>&#x2022; You need <strong>long-lasting content</strong> (1+ year lifespan)</li>
              <li>&#x2022; <strong>Brand consistency and polish</strong> are non-negotiable</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Professional Video Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian video production companies for your brand film, corporate video, or content campaign.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use both UGC and professional video?</h3>
              <p className="text-gray-600">Absolutely — and most successful brands do. Use professional video for your website, YouTube, and brand campaigns. Use UGC for paid social ads, product reviews, and TikTok content. The two complement each other.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How do I find UGC creators in Malaysia?</h3>
              <p className="text-gray-600">Platforms like TikTok Creator Marketplace, Instagram DMs, and local UGC agencies connect brands with creators. Expect to pay RM500–RM3,000 per video depending on the creator&apos;s following and deliverables.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Which has better ROI?</h3>
              <p className="text-gray-600">UGC typically delivers better short-term ROI for performance marketing (direct sales, app installs). Professional video delivers better long-term ROI for brand building, investor relations, and corporate trust. Measure each against its specific goals.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/production-house-vs-freelancer" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production House vs Freelancer</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/stock-footage-vs-original-shoot" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Stock vs Original Shoot</Link>
            <Link href="/industries/fnb-restaurant-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">F&amp;B Video Production</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
