"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function PodcastStudioRentalPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent a podcast studio in PJ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Podcast studios in Petaling Jaya range from RM80–RM250 per hour. A typical 2-hour recording session costs RM200–RM500 including equipment. Most studios offer package deals for monthly bookings (4+ sessions)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to bring my own equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Professional podcast studios provide all equipment — microphones, headphones, audio interface, recording software, and cameras for video podcasts. Just bring your content and your guests. Some studios let you bring your own mic if you prefer."
        }
      },
      {
        "@type": "Question",
        "name": "Can the studio help with editing and distribution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many studios offer post-production packages: audio editing (RM200–RM500/episode), video editing (RM500–RM1,500/episode), and short-form clip creation (RM300–RM800 for 3–5 social clips). Some also help with Spotify/Apple Podcasts distribution."
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
      { "@type": "ListItem", "position": 3, "name": "Podcast Studio Rental Selangor", "item": "https://videoproductionmy.com/guide/podcast-studio-rental-pj" }
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
            <span className="text-white">Podcast Studio Rental Selangor</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Soundproof Podcast Studios for Rent in Selangor ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A guide to renting podcast and recording studios in Petaling Jaya, Shah Alam, Subang, and across Selangor — rates, equipment, and what to expect.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            Soundproof podcast studios in Selangor cost <strong>RM80–RM300 per hour</strong> in {currentYear}. A typical 2-hour podcast recording session runs <strong>RM200–RM500</strong> including equipment. Studios in PJ and Subang offer the most options, with professional-grade microphones, cameras for video podcasts, and editing services available as add-ons.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing by Studio Tier</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Studio Tier</th>
                  <th className="px-4 py-3 text-left">Hourly Rate</th>
                  <th className="px-4 py-3 text-left">What&apos;s Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Basic</td><td className="px-4 py-3 text-gray-700">RM80 – RM120/hour</td><td className="px-4 py-3 text-gray-700">Soundproof room, 2 mics, basic mixer, recording software</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Standard</td><td className="px-4 py-3 text-gray-700">RM120 – RM200/hour</td><td className="px-4 py-3 text-gray-700">Treated room, 3–4 mics, audio interface, 1–2 cameras, lighting</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Premium</td><td className="px-4 py-3 text-gray-700">RM200 – RM300/hour</td><td className="px-4 py-3 text-gray-700">Professional studio, multi-cam, teleprompter, live switching, operator</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Look for in a Podcast Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Soundproofing</h3>
              <p className="text-gray-600 text-sm">The most important factor. Look for studios with acoustic treatment (foam panels, bass traps) and proper isolation from external noise. Avoid converted meeting rooms without proper treatment.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Microphones</h3>
              <p className="text-gray-600 text-sm">Professional studios offer Shure SM7B, Rode PodMic, or equivalent broadcast-quality mics. Check that the studio has enough mics for your guest count (most accommodate 2–4 people).</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Video Capability</h3>
              <p className="text-gray-600 text-sm">Video podcasts are now the standard. Look for studios with 2–3 cameras (Sony, Canon), proper lighting, and a visually appealing backdrop. Multi-cam switching is a premium feature.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Location &amp; Parking</h3>
              <p className="text-gray-600 text-sm">Choose studios accessible by car with free parking. PJ (SS2, Damansara) and Subang (USJ, SS15) offer good options near major highways. Guest convenience matters for repeat bookings.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Add-On Services</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Audio editing &amp; mixing (per episode)</td><td className="px-4 py-3 text-gray-700">RM200 – RM500</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Video editing (per episode)</td><td className="px-4 py-3 text-gray-700">RM500 – RM1,500</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Short-form clips (3–5 reels per episode)</td><td className="px-4 py-3 text-gray-700">RM300 – RM800</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Thumbnail design</td><td className="px-4 py-3 text-gray-700">RM50 – RM150</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Studio operator / technician</td><td className="px-4 py-3 text-gray-700">RM100 – RM200/session</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Live streaming setup</td><td className="px-4 py-3 text-gray-700">RM200 – RM500/session</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Podcast Studio vs DIY: Cost Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Rent a Studio If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; You record 1–4 episodes per month</li>
                <li>&#x2022; You want professional audio and video quality</li>
                <li>&#x2022; You don&apos;t want to invest RM5,000–RM15,000 in equipment</li>
                <li>&#x2022; You host guests and need a professional setting</li>
                <li>&#x2022; You want video podcast capability</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Build Your Own If...</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; You record 8+ episodes per month</li>
                <li>&#x2022; You have a quiet, dedicated room available</li>
                <li>&#x2022; You&apos;re willing to invest RM5,000–RM15,000 upfront</li>
                <li>&#x2022; You prefer the convenience of recording anytime</li>
                <li>&#x2022; You&apos;re comfortable with basic audio/video tech</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Video Production for Your Podcast?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian video production companies that offer podcast filming, editing, and short-form content creation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does it cost to rent a podcast studio in PJ?</h3>
              <p className="text-gray-600">Podcast studios in Petaling Jaya range from RM80–RM250 per hour in {currentYear}. A typical 2-hour recording session costs RM200–RM500 including equipment. Most studios offer package deals for monthly bookings (4+ sessions).</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do I need to bring my own equipment?</h3>
              <p className="text-gray-600">No. Professional podcast studios provide all equipment — microphones, headphones, audio interface, recording software, and cameras for video podcasts. Just bring your content and your guests. Some studios let you bring your own mic if you prefer.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can the studio help with editing and distribution?</h3>
              <p className="text-gray-600">Many studios offer post-production packages: audio editing (RM200–RM500/episode), video editing (RM500–RM1,500/episode), and short-form clip creation (RM300–RM800 for 3–5 social clips). Some also help with Spotify/Apple Podcasts distribution.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/tiktok-video-production" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">TikTok Production</Link>
            <Link href="/guide/live-streaming-services-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Live Streaming Services</Link>
            <Link href="/guide/vertical-video-corporate" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Vertical Video B2B</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
