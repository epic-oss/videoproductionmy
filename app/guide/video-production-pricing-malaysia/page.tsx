"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function VideoProductionPricingGuide() {
  const { openModal } = useQuote();

  const faqData = [
    {
      question: "How much does video production cost in Malaysia?",
      answer: "Video production in Malaysia costs between RM3,000 and RM50,000 or more per project. A basic corporate video starts around RM3,000 to RM8,000, event coverage ranges from RM2,500 to RM10,000, and high-end TV commercials can exceed RM50,000. Pricing depends on video length, production complexity, crew size, and post-production requirements."
    },
    {
      question: "What is the cheapest type of video production in Malaysia?",
      answer: "Social media content videos are typically the most affordable, starting from RM1,500 to RM5,000. Testimonial videos (RM2,000 to RM6,000) and product videos (RM2,000 to RM8,000) are also budget-friendly options for businesses looking to get started with video content."
    },
    {
      question: "Why does video production pricing vary so much in Malaysia?",
      answer: "Pricing varies based on several factors including pre-production complexity (scripting, storyboarding, location scouting), crew size and equipment quality, shooting duration and number of locations, and post-production work such as editing, colour grading, motion graphics, and sound design. Post-production alone can add 30 to 50 percent to production costs."
    },
    {
      question: "Is video production cheaper outside of Kuala Lumpur?",
      answer: "Yes, video production is generally cheaper outside KL. Kuala Lumpur rates average RM5,000 to RM20,000 for a corporate video, while other states like Penang (RM3,500 to RM12,000) and Johor (RM3,000 to RM10,000) offer more competitive pricing. However, companies outside major cities may include travel surcharges."
    },
    {
      question: "How can I get the best value for video production in Malaysia?",
      answer: "To get the best value, compare quotes from at least 3 production companies, define your project scope clearly in a written brief, confirm what is included in the quote (scripting, revisions, music licensing, delivery formats), review portfolios before deciding, and consider bundled packages if you need multiple videos."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://videoproductionmy.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://videoproductionmy.com/guide/video-production-pricing-malaysia" },
      { "@type": "ListItem", "position": 3, "name": "Video Production Pricing Malaysia", "item": "https://videoproductionmy.com/guide/video-production-pricing-malaysia" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/guide/video-production-pricing-malaysia" className="text-white">
              Pricing Guide
            </Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">
            Updated: January {currentYear}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Video Production Pricing in Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            How much does video production cost in Malaysia? Here&apos;s the
            complete pricing breakdown for corporate videos, event coverage,
            commercials, and more.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Direct Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">
            Quick Answer
          </p>
          <p className="text-gray-700">
            Video production in Malaysia costs between <strong>RM3,000 and RM50,000+</strong> per project in {currentYear}. A basic corporate video starts around RM3,000–RM8,000, while high-end commercials and TVCs can exceed RM50,000. Pricing depends on video length, production complexity, crew size, and post-production requirements.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Video Production Cost Breakdown by Type
        </h2>
        <p className="text-gray-700 mb-6">
          Video production pricing varies significantly based on the type of content you need. Below is a realistic breakdown of what Malaysian businesses can expect to pay in {currentYear}.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Video Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Price Range</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Typical Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Corporate Video", "RM3,000 – RM15,000", "2–5 minutes"],
                ["Event Coverage", "RM2,500 – RM10,000", "Half day to full day"],
                ["Product Video", "RM2,000 – RM8,000", "30–90 seconds"],
                ["TVC / Commercial", "RM15,000 – RM80,000+", "15–60 seconds"],
                ["Social Media Content", "RM1,500 – RM5,000", "15–60 seconds"],
                ["Animation / Motion Graphics", "RM5,000 – RM25,000", "1–3 minutes"],
                ["Testimonial Video", "RM2,000 – RM6,000", "2–4 minutes"],
                ["Training / E-Learning Video", "RM4,000 – RM12,000", "5–15 minutes"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{row[0]}</td>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{row[1]}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Affects Video Production Pricing?
        </h2>
        <p className="text-gray-700 mb-4">
          Several factors influence how much you&apos;ll pay for video production in Malaysia. Understanding these helps you budget accurately and negotiate with production companies.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Pre-Production Complexity", desc: "Scriptwriting, storyboarding, location scouting, and talent casting all add to costs. A simple talking-head video requires minimal pre-production, while a narrative commercial needs weeks of planning." },
            { title: "Crew Size & Equipment", desc: "A one-person crew with basic gear costs far less than a full team with director, cinematographer, sound engineer, and lighting technician. 4K cinema cameras and professional lighting setups add to the budget." },
            { title: "Shooting Duration & Location", desc: "A half-day shoot is cheaper than multi-day productions. Studio shoots may require rental fees (RM500–RM3,000/day), while outdoor locations may need permits." },
            { title: "Post-Production", desc: "Editing, colour grading, motion graphics, sound design, and voiceover add 30–50% to production costs. Complex visual effects or animation can double the post-production budget." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Pricing by Location
        </h2>
        <p className="text-gray-700 mb-4">
          Production costs vary across Malaysia. Kuala Lumpur and Selangor command the highest rates due to the concentration of talent and studios, while East Malaysia and smaller cities offer more competitive pricing.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Location</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Avg. Corporate Video</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Kuala Lumpur", "RM5,000 – RM20,000", "Highest rates, most options"],
                ["Selangor", "RM4,000 – RM15,000", "Close to KL, similar quality"],
                ["Penang", "RM3,500 – RM12,000", "Growing creative scene"],
                ["Johor", "RM3,000 – RM10,000", "Singapore-adjacent talent pool"],
                ["Other States", "RM2,500 – RM8,000", "May include travel surcharges"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{row[0]}</td>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{row[1]}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Get the Best Value
        </h2>
        <ol className="space-y-3 mb-8">
          {[
            { title: "Get multiple quotes", desc: "Compare at least 3 production companies. Prices for similar work can differ by 50% or more." },
            { title: "Define your scope clearly", desc: "The more specific your brief, the more accurate quotes you'll receive. Include desired length, style references, and delivery timeline." },
            { title: "Ask what's included", desc: "Confirm whether quotes cover scripting, revisions, music licensing, and final delivery formats. Hidden costs are common." },
            { title: "Check portfolios first", desc: "A lower price means nothing if the quality doesn't match your brand standards. Always review past work." },
            { title: "Consider packages", desc: "Many companies offer bundled rates for multiple videos. If you need ongoing content, negotiate a retainer." },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <strong className="text-gray-900">{item.title}</strong>
                <span className="text-gray-600"> — {item.desc}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">
            Get Free Video Production Quotes
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Compare pricing from verified Malaysian video production companies. Tell us your project requirements and receive up to 5 quotes.
          </p>
          <button
            onClick={() => openModal()}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>

        {/* Internal Links */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/guide/corporate-video-production-guide" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Corporate Video Production Guide</span>
              <span className="block text-sm text-gray-500 mt-1">Everything you need to know</span>
            </Link>
            <Link href="/guide/how-to-choose-video-production-company" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">How to Choose a Video Production Company</span>
              <span className="block text-sm text-gray-500 mt-1">Step-by-step selection guide</span>
            </Link>
            <Link href="/companies" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Browse All Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Compare video production companies</span>
            </Link>
            <Link href="/locations/kuala-lumpur" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">KL Video Production Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Top companies in Kuala Lumpur</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
