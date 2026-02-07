"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function ProductionHouseVsFreelancerPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a production house always better quality than a freelancer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Many experienced freelancers produce excellent work comparable to small production houses. The difference is in scale - production houses can handle larger, more complex projects with dedicated specialists for each role."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire a freelancer for a corporate video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for simpler corporate videos like testimonials, social media clips, or basic company profiles. For high-end corporate films intended for investors or national campaigns, a production house is typically the better choice."
        }
      },
      {
        "@type": "Question",
        "name": "What if my project is in-between budget ranges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For projects in the RM5,000-RM8,000 range, get quotes from both. Some boutique production houses offer competitive rates, and some premium freelancers bring additional crew for larger jobs. Compare portfolios and scope of work."
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
      { "@type": "ListItem", "position": 3, "name": "Production House vs Freelancer", "item": "https://videoproductionmy.com/guide/production-house-vs-freelancer" }
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
            <span className="text-white">Production House vs Freelancer</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Production House vs Freelance Videographer: Which to Hire? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A side-by-side comparison to help Malaysian businesses choose between a full production house and a freelance videographer.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Choose a <strong>production house</strong> for complex, high-stakes projects (RM8,000+) where reliability and polished quality matter. Choose a <strong>freelancer</strong> for simple, budget-friendly shoots (RM1,500–RM5,000) where flexibility and personal attention are priorities.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Production House</th>
                  <th className="px-4 py-3 text-left">Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Cost</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM50,000+</td><td className="px-4 py-3 text-gray-700">RM1,500 – RM8,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Team Size</td><td className="px-4 py-3 text-gray-700">3–10+ crew members</td><td className="px-4 py-3 text-gray-700">1–2 people</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Equipment</td><td className="px-4 py-3 text-gray-700">Cinema cameras, lighting rigs, drones, studio</td><td className="px-4 py-3 text-gray-700">DSLR/mirrorless, basic lighting, gimbal</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Quality</td><td className="px-4 py-3 text-gray-700">Broadcast / cinema grade</td><td className="px-4 py-3 text-gray-700">Professional / social media grade</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Reliability</td><td className="px-4 py-3 text-gray-700">High — backup crew and equipment</td><td className="px-4 py-3 text-gray-700">Medium — single point of failure</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Scalability</td><td className="px-4 py-3 text-gray-700">Can handle large, multi-day projects</td><td className="px-4 py-3 text-gray-700">Best for single-day, focused shoots</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Turnaround</td><td className="px-4 py-3 text-gray-700">2–6 weeks (structured process)</td><td className="px-4 py-3 text-gray-700">1–3 weeks (flexible timeline)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Communication</td><td className="px-4 py-3 text-gray-700">Through project manager / account exec</td><td className="px-4 py-3 text-gray-700">Direct with the creator</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Production House: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Full end-to-end service (script to final cut)</li>
                <li>&#x2022; Dedicated crew for each role (director, DP, sound, editor)</li>
                <li>&#x2022; Professional-grade equipment and studio access</li>
                <li>&#x2022; Backup crew if someone falls sick</li>
                <li>&#x2022; Structured revisions process with clear deliverables</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Higher cost due to overhead and team size</li>
                <li>&#x2022; Less flexible with last-minute changes</li>
                <li>&#x2022; Communication through layers (not always direct)</li>
                <li>&#x2022; May be overkill for simple projects</li>
                <li>&#x2022; Longer lead times for scheduling</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Freelancer: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; 40–70% cheaper than production houses</li>
                <li>&#x2022; Direct communication with the creator</li>
                <li>&#x2022; More flexible scheduling and last-minute bookings</li>
                <li>&#x2022; Personal creative style and attention</li>
                <li>&#x2022; Faster turnaround for simple projects</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Single point of failure (illness, equipment issue)</li>
                <li>&#x2022; Limited equipment compared to production houses</li>
                <li>&#x2022; May struggle with complex, multi-day shoots</li>
                <li>&#x2022; Less structured revision process</li>
                <li>&#x2022; Harder to scale for ongoing content needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose a Production House If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; Your budget is <strong>RM8,000 or above</strong></li>
              <li>&#x2022; The video is for <strong>investors, board members, or national broadcast</strong></li>
              <li>&#x2022; You need <strong>multi-camera setups, drone, or studio work</strong></li>
              <li>&#x2022; The project involves <strong>multiple locations or shoot days</strong></li>
              <li>&#x2022; You require <strong>scriptwriting, storyboarding, and full pre-production</strong></li>
              <li>&#x2022; <strong>Brand consistency</strong> across multiple videos is critical</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose a Freelancer If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; Your budget is <strong>under RM5,000</strong></li>
              <li>&#x2022; You need <strong>social media content, reels, or simple interviews</strong></li>
              <li>&#x2022; The shoot is <strong>single-location, half-day or full-day</strong></li>
              <li>&#x2022; You want <strong>a specific creative style</strong> the freelancer is known for</li>
              <li>&#x2022; You need <strong>fast turnaround</strong> with minimal process</li>
              <li>&#x2022; It&apos;s a <strong>one-off project</strong> rather than an ongoing series</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which to Choose?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Tell us about your project and we&apos;ll connect you with the right type of video professional — production house or freelancer.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is a production house always better quality than a freelancer?</h3>
              <p className="text-gray-600">Not necessarily. Many experienced freelancers produce excellent work comparable to small production houses. The difference is in scale — production houses can handle larger, more complex projects with dedicated specialists for each role.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I hire a freelancer for a corporate video?</h3>
              <p className="text-gray-600">Yes, for simpler corporate videos like testimonials, social media clips, or basic company profiles. For high-end corporate films intended for investors or national campaigns, a production house is typically the better choice.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What if my project is in-between budget ranges?</h3>
              <p className="text-gray-600">For projects in the RM5,000–RM8,000 range, get quotes from both. Some boutique production houses offer competitive rates, and some premium freelancers bring additional crew for larger jobs. Compare portfolios and scope of work.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/how-to-choose-video-production-company" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">How to Choose</Link>
            <Link href="/guide/in-house-vs-outsource-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">In-House vs Outsource</Link>
            <Link href="/guide/ugc-vs-professional-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">UGC vs Professional</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
