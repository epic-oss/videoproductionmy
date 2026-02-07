"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function VideographerDayRatePage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a videographer charge per hour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hourly rates range from RM150–RM350/hour. However, most videographers prefer half-day (4 hours, RM500–RM1,500) or full-day bookings. Hourly rates are typically 20–30% more expensive per hour than day rates."
        }
      },
      {
        "@type": "Question",
        "name": "Are KL videographers more expensive than other states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, by 15–30%. KL and Selangor have the highest rates due to cost of living, more competition, and proximity to corporate clients. Penang and Johor rates are 10–20% lower. East Malaysia (Sabah, Sarawak) varies widely."
        }
      },
      {
        "@type": "Question",
        "name": "Should I hire a freelancer or a production company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For simple shoots (interviews, events, social media), a freelancer at RM800–RM2,500/day is cost-effective. For complex projects (corporate films, commercials, multi-day shoots), a production company (RM5,000–RM30,000 per project) offers more reliability and resources."
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
      { "@type": "ListItem", "position": 3, "name": "Videographer Day Rate", "item": "https://videoproductionmy.com/guide/videographer-day-rate-malaysia" }
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
            <span className="text-white">Videographer Day Rate</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What is the Day Rate for a Videographer in Malaysia? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Freelance and professional videographer day rates by experience level, with breakdowns of what&apos;s included at each price point.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            A videographer&apos;s day rate in Malaysia is <strong>RM800 to RM2,500 per day</strong> in {currentYear}. Junior videographers charge RM800–RM1,200/day, mid-level professionals charge RM1,200–RM1,800/day, and senior/specialist videographers charge RM1,800–RM2,500/day. These rates typically cover 8–10 hours of filming with basic equipment included.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Day Rates by Experience Level</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Level</th>
                  <th className="px-4 py-3 text-left">Day Rate</th>
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-left">What&apos;s Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Junior</td><td className="px-4 py-3 text-gray-700">RM800 – RM1,200</td><td className="px-4 py-3 text-gray-700">1–3 years</td><td className="px-4 py-3 text-gray-700">Camera, basic audio, tripod, raw footage</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Mid-Level</td><td className="px-4 py-3 text-gray-700">RM1,200 – RM1,800</td><td className="px-4 py-3 text-gray-700">3–6 years</td><td className="px-4 py-3 text-gray-700">Cinema camera, lighting, gimbal, basic edit</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Senior</td><td className="px-4 py-3 text-gray-700">RM1,800 – RM2,500</td><td className="px-4 py-3 text-gray-700">6+ years</td><td className="px-4 py-3 text-gray-700">Premium gear, directing, full edit, colour grade</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Specialist (drone, underwater)</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM3,500</td><td className="px-4 py-3 text-gray-700">Specialised</td><td className="px-4 py-3 text-gray-700">Specialist equipment, permits, insurance</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Typically Included (and What&apos;s Extra)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Usually Included</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Camera and basic lenses</li>
                <li>&#x2022; Tripod and monopod</li>
                <li>&#x2022; Basic audio recording (lapel mic)</li>
                <li>&#x2022; 8–10 hours on-site</li>
                <li>&#x2022; Memory cards and storage</li>
                <li>&#x2022; Raw footage delivery</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Usually Extra</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Video editing (+RM500 – RM2,000)</li>
                <li>&#x2022; Professional lighting kit (+RM300 – RM800)</li>
                <li>&#x2022; Drone footage (+RM1,000 – RM2,500)</li>
                <li>&#x2022; Gimbal / stabiliser (+RM200 – RM500)</li>
                <li>&#x2022; Travel beyond Klang Valley (+transport costs)</li>
                <li>&#x2022; Overtime beyond 10 hours (+RM150 – RM300/hr)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Day Rate vs Project Rate</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most videographers offer both day rates and project rates. A <strong>day rate</strong> covers filming only — you get raw footage and arrange editing separately. A <strong>project rate</strong> includes filming, editing, colour grading, and final delivery as one package, typically 2–3x the day rate. For corporate videos, project rates (RM5,000–RM15,000) are usually better value since editing is included.
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Example Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="py-2 text-gray-700">Day rate (filming only)</td><td className="py-2 text-gray-700 text-right">RM1,500</td></tr>
                  <tr><td className="py-2 text-gray-700">+ Editing (separately hired)</td><td className="py-2 text-gray-700 text-right">RM2,000</td></tr>
                  <tr><td className="py-2 text-gray-700">+ Colour grade</td><td className="py-2 text-gray-700 text-right">RM500</td></tr>
                  <tr className="font-bold"><td className="py-2 text-gray-900">Total (separate)</td><td className="py-2 text-gray-900 text-right">RM4,000</td></tr>
                  <tr className="font-bold bg-blue-50"><td className="py-2 text-blue-900">Project rate (all-in)</td><td className="py-2 text-blue-900 text-right">RM3,500</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need a Videographer?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from freelance videographers and production companies matched to your budget and project needs.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a videographer charge per hour?</h3>
              <p className="text-gray-600">Hourly rates range from RM150–RM350/hour in {currentYear}. However, most videographers prefer half-day (4 hours, RM500–RM1,500) or full-day bookings. Hourly rates are typically 20–30% more expensive per hour than day rates.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Are KL videographers more expensive than other states?</h3>
              <p className="text-gray-600">Yes, by 15–30%. KL and Selangor have the highest rates due to cost of living, more competition, and proximity to corporate clients. Penang and Johor rates are 10–20% lower. East Malaysia (Sabah, Sarawak) varies widely.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Should I hire a freelancer or a production company?</h3>
              <p className="text-gray-600">For simple shoots (interviews, events, social media), a freelancer at RM800–RM2,500/day is cost-effective. For complex projects (corporate films, commercials, multi-day shoots), a production company (RM5,000–RM30,000 per project) offers more reliability and resources.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/how-much-does-corporate-video-cost-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Cost</Link>
            <Link href="/guide/production-house-vs-freelancer" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production House vs Freelancer</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/in-house-vs-outsource-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">In-House vs Outsource</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
