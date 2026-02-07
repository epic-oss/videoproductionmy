"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function AnimationVsLiveActionPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I combine animation and live action?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — hybrid videos are increasingly popular. A common approach uses live action footage for interviews and facility shots, with animated overlays for data, processes, and UI demos. Expect to pay 20–40% more than pure live action."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a 60-second animated explainer cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom 2D animated explainer video costs RM5,000–RM15,000 for 60 seconds. Template-based animation starts from RM3,000, while premium motion graphics with custom illustration can reach RM20,000+."
        }
      },
      {
        "@type": "Question",
        "name": "Which format gets more views on social media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both perform well when optimised for the platform. Animation tends to perform better on LinkedIn and tech audiences. Live action performs better on Instagram, TikTok, and Facebook where human faces drive higher engagement."
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
      { "@type": "ListItem", "position": 3, "name": "Animation vs Live Action", "item": "https://videoproductionmy.com/guide/animation-vs-live-action" }
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
            <span className="text-white">Animation vs Live Action</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            2D Animation vs Live Action Video: Which Converts Better? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Comparing animated explainer videos with live action production — cost, timeline, engagement, and which works best for different business types.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            <strong>Animation</strong> is better for explaining complex concepts, SaaS products, and tech services (RM5,000–RM20,000). <strong>Live action</strong> is better for human stories, testimonials, and physical products (RM5,000–RM30,000+). Animation has 15% higher completion rates for explainer content; live action builds stronger emotional connection.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">2D Animation</th>
                  <th className="px-4 py-3 text-left">Live Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Cost (60-90 sec)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM20,000</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM30,000+</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Timeline</td><td className="px-4 py-3 text-gray-700">3–6 weeks</td><td className="px-4 py-3 text-gray-700">2–6 weeks</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Best For</td><td className="px-4 py-3 text-gray-700">SaaS, tech, complex processes</td><td className="px-4 py-3 text-gray-700">People, products, facilities</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Engagement</td><td className="px-4 py-3 text-gray-700">Higher completion rate for explainers</td><td className="px-4 py-3 text-gray-700">Stronger emotional connection</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Revisions</td><td className="px-4 py-3 text-gray-700">Easy — no reshoots needed</td><td className="px-4 py-3 text-gray-700">Costly — reshoots required</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Updates</td><td className="px-4 py-3 text-gray-700">Easy to modify text, screens, data</td><td className="px-4 py-3 text-gray-700">Requires new shoot for changes</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Localisation</td><td className="px-4 py-3 text-gray-700">Easy — swap voiceover and text</td><td className="px-4 py-3 text-gray-700">Harder — may need reshoot with local talent</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Trust Factor</td><td className="px-4 py-3 text-gray-700">Lower — abstract representation</td><td className="px-4 py-3 text-gray-700">Higher — real people, real places</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2D Animation: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Simplifies complex concepts visually</li>
                <li>&#x2022; No location, talent, or weather dependencies</li>
                <li>&#x2022; Easy to update and localise</li>
                <li>&#x2022; Consistent brand style across all videos</li>
                <li>&#x2022; 15% higher completion rates for explainer content</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Lacks human element and emotional depth</li>
                <li>&#x2022; Can feel generic if not custom-designed</li>
                <li>&#x2022; Not suitable for showcasing physical products</li>
                <li>&#x2022; Lower trust factor for B2B decision-makers</li>
                <li>&#x2022; Quality varies widely between studios</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Action: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Builds stronger human connection and trust</li>
                <li>&#x2022; Showcases real people, products, and facilities</li>
                <li>&#x2022; More impactful for testimonials and case studies</li>
                <li>&#x2022; Better for premium brand positioning</li>
                <li>&#x2022; Versatile — can be repurposed across platforms</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Higher cost for quality production</li>
                <li>&#x2022; Weather, location, and talent dependencies</li>
                <li>&#x2022; Expensive to update (requires reshoots)</li>
                <li>&#x2022; Harder to explain abstract or technical concepts</li>
                <li>&#x2022; Localisation requires new talent or dubbing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Animation If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You&apos;re a <strong>SaaS, fintech, or tech company</strong> explaining software features</li>
              <li>&#x2022; Your product is <strong>abstract, digital, or process-based</strong></li>
              <li>&#x2022; You need to <strong>update content frequently</strong> (pricing, features, UI changes)</li>
              <li>&#x2022; You want to <strong>localise for multiple markets</strong> (ASEAN, Middle East)</li>
              <li>&#x2022; You prefer a <strong>fun, approachable tone</strong> over corporate formality</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Live Action If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You want to <strong>showcase real people</strong> (team, customers, stakeholders)</li>
              <li>&#x2022; You have a <strong>physical product, factory, or facility</strong> to feature</li>
              <li>&#x2022; The video is for <strong>investors, board members, or corporate presentations</strong></li>
              <li>&#x2022; <strong>Trust and credibility</strong> are the primary goals</li>
              <li>&#x2022; You need <strong>testimonials, case studies, or event coverage</strong></li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Animation or Live Action?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian companies specialising in both animation and live action production.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I combine animation and live action?</h3>
              <p className="text-gray-600">Yes — hybrid videos are increasingly popular in {currentYear}. A common approach uses live action footage for interviews and facility shots, with animated overlays for data, processes, and UI demos. Expect to pay 20–40% more than pure live action.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a 60-second animated explainer cost in Malaysia?</h3>
              <p className="text-gray-600">A custom 2D animated explainer video costs RM5,000–RM15,000 for 60 seconds in {currentYear}. Template-based animation starts from RM3,000, while premium motion graphics with custom illustration can reach RM20,000+.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Which format gets more views on social media?</h3>
              <p className="text-gray-600">Both perform well when optimised for the platform. Animation tends to perform better on LinkedIn and tech audiences. Live action performs better on Instagram, TikTok, and Facebook where human faces drive higher engagement.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/production-house-vs-freelancer" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production House vs Freelancer</Link>
            <Link href="/guide/stock-footage-vs-original-shoot" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Stock vs Original Shoot</Link>
            <Link href="/guide/corporate-video-production-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video KL</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
