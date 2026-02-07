"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function InHouseVsOutsourcePage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I do a hybrid approach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many Malaysian companies hire one in-house videographer for day-to-day social media content and outsource larger projects (corporate films, commercials, events) to agencies. This is often the most cost-effective model."
        }
      },
      {
        "@type": "Question",
        "name": "What salary should I expect for an in-house videographer in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A junior videographer/editor earns RM3,000-RM5,000/month, mid-level RM5,000-RM8,000, and senior/lead RM8,000-RM12,000. Add 15-20% for EPF, SOCSO, and benefits."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build an in-house team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 2-3 months to hire, purchase equipment, set up workflows, and reach consistent output. Many companies start with one hire and a freelancer backup before fully committing."
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
      { "@type": "ListItem", "position": 3, "name": "In-House vs Outsource Video", "item": "https://videoproductionmy.com/guide/in-house-vs-outsource-video" }
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
            <span className="text-white">In-House vs Outsource Video</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            In-House Video Team vs Outsourcing: Cost Comparison ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Should your company build an in-house video team or outsource to agencies? A detailed cost and capability comparison for Malaysian businesses.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            An in-house video team costs <strong>RM15,000–RM35,000/month</strong> in salaries and equipment. Outsourcing costs <strong>RM5,000–RM20,000 per project</strong>. In-house makes sense if you produce <strong>4+ videos per month</strong>; outsourcing is more cost-effective for <strong>1–3 videos per month</strong>.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">In-House Team</th>
                  <th className="px-4 py-3 text-left">Outsource to Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Monthly Cost</td><td className="px-4 py-3 text-gray-700">RM15,000 – RM35,000 (fixed)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM20,000 (per project)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Equipment</td><td className="px-4 py-3 text-gray-700">RM50,000 – RM150,000 upfront</td><td className="px-4 py-3 text-gray-700">Included in project fee</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Expertise</td><td className="px-4 py-3 text-gray-700">1–2 generalists</td><td className="px-4 py-3 text-gray-700">Specialists for each role</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Flexibility</td><td className="px-4 py-3 text-gray-700">Available on demand, same-day shoots</td><td className="px-4 py-3 text-gray-700">Requires booking, 1–2 week lead time</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Brand Knowledge</td><td className="px-4 py-3 text-gray-700">Deep — embedded in company culture</td><td className="px-4 py-3 text-gray-700">Needs briefing each project</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Creative Range</td><td className="px-4 py-3 text-gray-700">Can become repetitive</td><td className="px-4 py-3 text-gray-700">Fresh perspectives each project</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Scalability</td><td className="px-4 py-3 text-gray-700">Limited by headcount</td><td className="px-4 py-3 text-gray-700">Scale up/down per project</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Breakdown: In-House Team</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Monthly Recurring Costs</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="py-2 text-gray-700">Videographer / Editor (1 person)</td><td className="py-2 text-gray-700 text-right">RM4,000 – RM8,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Content Producer / Director</td><td className="py-2 text-gray-700 text-right">RM5,000 – RM10,000</td></tr>
                  <tr><td className="py-2 text-gray-700">EPF, SOCSO, EIS contributions</td><td className="py-2 text-gray-700 text-right">RM2,000 – RM4,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Software licenses (Adobe, DaVinci)</td><td className="py-2 text-gray-700 text-right">RM500 – RM1,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Storage, stock music, assets</td><td className="py-2 text-gray-700 text-right">RM500 – RM1,000</td></tr>
                  <tr className="font-bold"><td className="py-2 text-gray-900">Total Monthly</td><td className="py-2 text-gray-900 text-right">RM12,000 – RM24,000</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-semibold text-gray-900 mt-6 mb-3">One-Time Equipment Costs</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="py-2 text-gray-700">Camera body + lenses</td><td className="py-2 text-gray-700 text-right">RM15,000 – RM40,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Lighting kit</td><td className="py-2 text-gray-700 text-right">RM3,000 – RM10,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Audio equipment</td><td className="py-2 text-gray-700 text-right">RM2,000 – RM8,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Editing workstation</td><td className="py-2 text-gray-700 text-right">RM8,000 – RM20,000</td></tr>
                  <tr><td className="py-2 text-gray-700">Gimbal, tripod, accessories</td><td className="py-2 text-gray-700 text-right">RM3,000 – RM8,000</td></tr>
                  <tr className="font-bold"><td className="py-2 text-gray-900">Total One-Time</td><td className="py-2 text-gray-900 text-right">RM31,000 – RM86,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ROI Break-Even Analysis</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your average outsourced video costs <strong>RM8,000</strong> and your in-house team costs <strong>RM20,000/month</strong> (all-in), the break-even point is approximately <strong>2.5 videos per month</strong>. At 4+ videos per month, in-house becomes more cost-effective. Below 2 videos per month, outsourcing clearly wins on cost.
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold text-red-600">1–2</p>
                <p className="text-sm text-gray-600 mt-1">videos/month</p>
                <p className="text-sm font-medium text-gray-900 mt-2">Outsource wins</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-yellow-600">2–3</p>
                <p className="text-sm text-gray-600 mt-1">videos/month</p>
                <p className="text-sm font-medium text-gray-900 mt-2">Break-even zone</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-green-600">4+</p>
                <p className="text-sm text-gray-600 mt-1">videos/month</p>
                <p className="text-sm font-medium text-gray-900 mt-2">In-house wins</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">In-House Team: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Available instantly for urgent shoots</li>
                <li>&#x2022; Deep understanding of brand, products, and culture</li>
                <li>&#x2022; Lower per-video cost at high volume</li>
                <li>&#x2022; Full creative control and IP ownership</li>
                <li>&#x2022; Can attend internal meetings and events easily</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; High fixed monthly cost regardless of output</li>
                <li>&#x2022; Significant upfront equipment investment</li>
                <li>&#x2022; Limited expertise (1–2 generalists vs specialist team)</li>
                <li>&#x2022; Creative stagnation over time</li>
                <li>&#x2022; HR overhead (hiring, training, retention)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Outsourcing: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Pay only when you need video</li>
                <li>&#x2022; Access to specialists (director, DP, colourist, animator)</li>
                <li>&#x2022; No equipment investment or maintenance</li>
                <li>&#x2022; Fresh creative perspectives each project</li>
                <li>&#x2022; Easy to scale up or down</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Higher per-video cost at high volume</li>
                <li>&#x2022; Requires briefing and onboarding each time</li>
                <li>&#x2022; Less availability for last-minute requests</li>
                <li>&#x2022; Brand consistency requires clear guidelines</li>
                <li>&#x2022; Communication overhead with external team</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose In-House If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You produce <strong>4+ videos per month</strong> consistently</li>
              <li>&#x2022; You need <strong>same-day or next-day</strong> video turnaround</li>
              <li>&#x2022; Your content is <strong>social media-driven</strong> and needs daily/weekly output</li>
              <li>&#x2022; You have <strong>RM50,000+</strong> for initial setup and ongoing monthly costs</li>
              <li>&#x2022; Video is a <strong>core part of your marketing strategy</strong></li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Outsourcing If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You need <strong>1–3 videos per month</strong> or less</li>
              <li>&#x2022; You want <strong>broadcast/cinema quality</strong> for key projects</li>
              <li>&#x2022; You don&apos;t want to <strong>manage equipment and staff</strong></li>
              <li>&#x2022; You need <strong>different styles</strong> for different campaigns</li>
              <li>&#x2022; You&apos;re a <strong>startup or SME</strong> with limited fixed budget</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Ready to Outsource?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysia&apos;s top video production companies and compare costs for your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I do a hybrid approach?</h3>
              <p className="text-gray-600">Yes. Many Malaysian companies hire one in-house videographer for day-to-day social media content and outsource larger projects (corporate films, commercials, events) to agencies. This is often the most cost-effective model.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What salary should I expect for an in-house videographer in Malaysia?</h3>
              <p className="text-gray-600">In {currentYear}, a junior videographer/editor earns RM3,000–RM5,000/month, mid-level RM5,000–RM8,000, and senior/lead RM8,000–RM12,000. Add 15–20% for EPF, SOCSO, and benefits.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How long does it take to build an in-house team?</h3>
              <p className="text-gray-600">Expect 2–3 months to hire, purchase equipment, set up workflows, and reach consistent output. Many companies start with one hire and a freelancer backup before fully committing.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/production-house-vs-freelancer" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production House vs Freelancer</Link>
            <Link href="/guide/ugc-vs-professional-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">UGC vs Professional</Link>
            <Link href="/guide/how-to-choose-video-production-company" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">How to Choose</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
