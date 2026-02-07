"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function VideoProductionTimelinePage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I get a video produced in under a week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for simple projects. Social media videos, event recaps, and basic interviews can be turned around in 3-5 days with a rush fee (typically 20-50% extra). Complex corporate videos need minimum 2 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "How many revision rounds should I expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most production companies include 2 revision rounds in their quote. Each additional round costs RM500-RM2,000. To minimise revisions, provide clear, consolidated feedback and approve scripts thoroughly before filming."
        }
      },
      {
        "@type": "Question",
        "name": "What's the fastest part of the process to complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Filming is typically the shortest phase (1-2 days). Pre-production and post-production take the longest. The biggest time savings come from fast client feedback - delays in approvals can double the overall timeline."
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
      { "@type": "ListItem", "position": 3, "name": "Production Timeline", "item": "https://videoproductionmy.com/guide/video-production-timeline" }
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
            <span className="text-white">Production Timeline</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Long Does Video Production Take in Malaysia? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A realistic timeline breakdown from brief to final delivery for corporate videos, commercials, and content production.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            A typical corporate video takes <strong>2 to 6 weeks</strong> from kickoff to final delivery in {currentYear}. This breaks down to 1–2 weeks pre-production, 1–2 days filming, and 1–3 weeks post-production. Simple social media videos can be done in 1 week. Complex productions (commercials, brand films) can take 6–12 weeks.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline by Video Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Total Timeline</th>
                  <th className="px-4 py-3 text-left">Filming Days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Social Media Content</td><td className="px-4 py-3 text-gray-700">3–7 days</td><td className="px-4 py-3 text-gray-700">Half day</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Testimonial / Interview</td><td className="px-4 py-3 text-gray-700">1–2 weeks</td><td className="px-4 py-3 text-gray-700">Half – 1 day</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Company Profile</td><td className="px-4 py-3 text-gray-700">2–4 weeks</td><td className="px-4 py-3 text-gray-700">1–2 days</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Training Video</td><td className="px-4 py-3 text-gray-700">3–5 weeks</td><td className="px-4 py-3 text-gray-700">1–3 days</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Brand Film / Documentary</td><td className="px-4 py-3 text-gray-700">4–8 weeks</td><td className="px-4 py-3 text-gray-700">2–5 days</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">TV Commercial (TVC)</td><td className="px-4 py-3 text-gray-700">6–12 weeks</td><td className="px-4 py-3 text-gray-700">1–3 days</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Phase-by-Phase Breakdown</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Pre-Production (1–2 weeks)</h3>
              <p className="text-gray-700 text-sm mb-3">Planning everything before cameras roll. This is the most important phase — rush it and you&apos;ll pay for it later.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>&#x2022; Creative brief and discovery meeting (Day 1–2)</li>
                <li>&#x2022; Script / treatment writing (Day 3–5)</li>
                <li>&#x2022; Client feedback and script approval (Day 5–7)</li>
                <li>&#x2022; Storyboarding and shot list (Day 7–9)</li>
                <li>&#x2022; Location scouting and permits (Day 7–10)</li>
                <li>&#x2022; Talent booking and scheduling (Day 7–10)</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Production / Filming (1–2 days)</h3>
              <p className="text-gray-700 text-sm mb-3">The actual shoot. Well-planned pre-production means efficient filming.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>&#x2022; Setup and lighting (1–2 hours per location)</li>
                <li>&#x2022; Filming interviews, B-roll, product shots</li>
                <li>&#x2022; Review footage on-site with client</li>
                <li>&#x2022; Typical shooting day: 8–10 hours</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Post-Production (1–3 weeks)</h3>
              <p className="text-gray-700 text-sm mb-3">Where the video comes together. Most of the timeline is spent here.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>&#x2022; Rough cut / first edit (Week 1)</li>
                <li>&#x2022; Client review and feedback (2–3 days)</li>
                <li>&#x2022; Revision round 1 (3–5 days)</li>
                <li>&#x2022; Colour grading, sound mix, music (3–5 days)</li>
                <li>&#x2022; Final review and delivery (2–3 days)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Causes Delays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Common Delay Causes</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Slow client feedback on script/edits</li>
                <li>&#x2022; Stakeholder availability for interviews</li>
                <li>&#x2022; Multiple revision rounds beyond scope</li>
                <li>&#x2022; Last-minute script changes after filming</li>
                <li>&#x2022; Permit delays (public locations, drone)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">How to Speed Things Up</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Assign one decision-maker for approvals</li>
                <li>&#x2022; Give feedback within 2–3 business days</li>
                <li>&#x2022; Approve scripts fully before filming</li>
                <li>&#x2022; Prepare interview subjects in advance</li>
                <li>&#x2022; Consolidate feedback (avoid piecemeal notes)</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Your Video Project?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes with realistic timelines from Malaysian production companies for your specific project.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I get a video produced in under a week?</h3>
              <p className="text-gray-600">Yes, for simple projects. Social media videos, event recaps, and basic interviews can be turned around in 3–5 days with a rush fee (typically 20–50% extra). Complex corporate videos need minimum 2 weeks.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How many revision rounds should I expect?</h3>
              <p className="text-gray-600">Most production companies include 2 revision rounds in their quote. Each additional round costs RM500–RM2,000. To minimise revisions, provide clear, consolidated feedback and approve scripts thoroughly before filming.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What&apos;s the fastest part of the process to complete?</h3>
              <p className="text-gray-600">Filming is typically the shortest phase (1–2 days). Pre-production and post-production take the longest. The biggest time savings come from fast client feedback — delays in approvals can double the overall timeline.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/how-much-does-corporate-video-cost-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Cost</Link>
            <Link href="/guide/how-to-choose-video-production-company" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">How to Choose</Link>
            <Link href="/guide/finas-permit-corporate-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">FINAS Permits</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
