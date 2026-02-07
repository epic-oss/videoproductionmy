"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function HowToChooseVideoProductionCompany() {
  const { openModal } = useQuote();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://videoproductionmy.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://videoproductionmy.com/guide/video-production-pricing-malaysia" },
      { "@type": "ListItem", "position": 3, "name": "How to Choose a Video Production Company in Malaysia", "item": "https://videoproductionmy.com/guide/how-to-choose-video-production-company" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/how-to-choose-video-production-company" className="text-white">How to Choose</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How to Choose a Video Production Company in Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A practical guide to evaluating, comparing, and selecting the right video production partner for your business.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            To choose the right video production company in Malaysia: <strong>1)</strong> Review their portfolio for relevant work, <strong>2)</strong> Check Google reviews and client references, <strong>3)</strong> Get at least 3 quotes to compare pricing and scope, <strong>4)</strong> Ensure they understand your industry, <strong>5)</strong> Confirm deliverables, timeline, and revision policy before signing.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choosing the Right Partner Matters</h2>
        <p className="text-gray-700 mb-4">
          Your corporate video represents your brand. A well-produced video builds credibility and drives results. A poorly executed one wastes budget and can damage your professional image. Malaysia has hundreds of video production companies ranging from freelance operators to full-service agencies — choosing the right fit requires due diligence.
        </p>
        <p className="text-gray-700 mb-8">
          This guide walks you through a systematic process to evaluate potential partners and make a confident decision.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Define Your Requirements First</h2>
        <p className="text-gray-700 mb-4">
          Before contacting any company, document your project needs clearly. This helps you get accurate quotes and filter companies efficiently.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Your Brief Should Include:</h3>
          <ul className="space-y-2">
            {[
              "Video type (corporate profile, product demo, testimonial, event, etc.)",
              "Approximate desired length",
              "Target audience and where the video will be used",
              "Budget range (even approximate helps filter companies)",
              "Timeline and deadline",
              "Whether you need scripting, talent, or voiceover",
              "Reference videos or style examples you admire",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Evaluate Portfolios</h2>
        <p className="text-gray-700 mb-4">
          A company&apos;s showreel tells you about their technical ability, but their project portfolio tells you about their relevance to your needs. Look for:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Industry Experience", desc: "Have they worked with businesses similar to yours? A company that has produced for your industry understands the nuances and messaging." },
            { title: "Production Quality", desc: "Assess cinematography, sound, colour grading, and editing. Watch with sound on — audio quality is often the differentiator." },
            { title: "Storytelling Ability", desc: "Technical skill matters, but so does narrative structure. Do their videos engage you or feel generic?" },
            { title: "Range of Styles", desc: "Can they adapt to different tones — formal corporate, energetic event coverage, polished product showcases? Versatility indicates capability." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Check Reviews and References</h2>
        <p className="text-gray-700 mb-4">
          Online reviews provide insight into the client experience beyond the final product. Check Google Business profiles for overall ratings and specific feedback. Pay attention to comments about communication, professionalism, timeliness, and willingness to accommodate changes.
        </p>
        <p className="text-gray-700 mb-8">
          Don&apos;t hesitate to ask the company for 2–3 client references you can contact directly. Reputable companies will provide these without issue.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Compare Quotes Properly</h2>
        <p className="text-gray-700 mb-4">
          Request detailed quotations from at least three companies. A good quote breaks down costs line by line rather than giving a single lump sum.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">What to Compare</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pre-production included?", "Some charge extra for scripting and storyboarding"],
                ["Crew size and equipment", "More crew = better quality but higher cost"],
                ["Number of shoot days", "Ensure adequate time for thorough coverage"],
                ["Revision rounds", "2–3 rounds is standard; confirm limits"],
                ["Music licensing", "Stock music vs custom music affects cost"],
                ["Delivery formats", "Web, social, presentation — each may need different specs"],
                ["Timeline", "Rush jobs typically cost 20–50% more"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Assess Communication</h2>
        <p className="text-gray-700 mb-4">
          How a company communicates during the quoting process indicates how they&apos;ll work with you on the project. Reliable partners respond promptly, ask clarifying questions, and demonstrate genuine interest in understanding your objectives rather than just closing a sale.
        </p>
        <p className="text-gray-700 mb-8">
          Avoid companies that provide vague quotes without asking about your goals, or who pressure you into decisions before you&apos;re ready.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h2>
        <div className="bg-red-50 rounded-lg p-6 mb-8">
          <ul className="space-y-2">
            {[
              "No portfolio or outdated work samples",
              "Unable to provide client references",
              "Vague pricing with no line-item breakdown",
              "Unusually low quotes (may indicate corner-cutting or hidden fees)",
              "No contract or unclear terms on revisions and ownership",
              "Poor responsiveness during the enquiry stage",
              "Promising unrealistic timelines",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Let Us Help You Find the Right Company</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Submit your project details and receive quotes from pre-vetted Malaysian video production companies.
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
            <Link href="/guide/video-production-pricing-malaysia" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Video Production Pricing {currentYear}</span>
              <span className="block text-sm text-gray-500 mt-1">Detailed cost breakdown</span>
            </Link>
            <Link href="/guide/top-video-production-companies-kl" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Top Video Production Companies in KL</span>
              <span className="block text-sm text-gray-500 mt-1">Kuala Lumpur&apos;s best companies</span>
            </Link>
            <Link href="/companies" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Browse All Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Compare video production companies</span>
            </Link>
            <Link href="/guide/corporate-video-production-guide" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Corporate Video Guide</span>
              <span className="block text-sm text-gray-500 mt-1">Full production process explained</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
