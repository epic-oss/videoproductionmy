"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function AIVoiceoverCorporatePage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can audiences tell the difference between AI and human voiceovers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In top AI voices (ElevenLabs, PlayHT) are very close to human quality for narration. However, subtle cues - unnatural pauses, flat emotion during dramatic moments, and inconsistent pronunciation of Malaysian words - can still reveal AI origin. Most listeners won't notice for training content but may notice for premium brand content."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a professional voiceover cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional voiceover artists in Malaysia charge RM500-RM2,000 per session (typically 30-60 minutes of recording). Rates vary by language, experience, and usage rights. Broadcast (TV/radio) usage commands higher fees than online-only."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use AI voiceover for a video in Bahasa Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but quality varies. ElevenLabs and PlayHT support Bahasa Malaysia, though pronunciation of local names, places, and colloquialisms may need manual correction. For formal BM narration, human talent still delivers better results."
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
      { "@type": "ListItem", "position": 3, "name": "AI Voiceover Corporate Video", "item": "https://videoproductionmy.com/guide/ai-voiceover-corporate-video" }
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
            <span className="text-white">AI Voiceover Corporate Video</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Are AI Voiceovers Acceptable for Corporate Videos? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            When to use AI-generated voiceovers vs professional voice talent for your corporate video in Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            <strong>Yes, for some uses. No, for others.</strong> AI voiceovers are acceptable for internal training videos, social media content, and e-learning modules. They are <strong>not recommended</strong> for brand films, investor presentations, TV commercials, or any content where human warmth and credibility are essential. AI voices cost 90% less (RM50–RM200 vs RM500–RM2,000) but lack the emotional nuance of professional talent.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI vs Human Voiceover: Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">AI Voiceover</th>
                  <th className="px-4 py-3 text-left">Human Voiceover</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Cost</td><td className="px-4 py-3 text-gray-700">RM50 – RM200</td><td className="px-4 py-3 text-gray-700">RM500 – RM2,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Turnaround</td><td className="px-4 py-3 text-gray-700">Minutes (instant generation)</td><td className="px-4 py-3 text-gray-700">1–3 days (recording + editing)</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Natural Emotion</td><td className="px-4 py-3 text-gray-700">Limited — improving but still detectable</td><td className="px-4 py-3 text-gray-700">Full range of emotion and nuance</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Languages</td><td className="px-4 py-3 text-gray-700">100+ languages, including BM, English, Mandarin</td><td className="px-4 py-3 text-gray-700">Limited to artist&apos;s languages</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Revisions</td><td className="px-4 py-3 text-gray-700">Instant — regenerate in seconds</td><td className="px-4 py-3 text-gray-700">Requires re-recording session</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Trust / Credibility</td><td className="px-4 py-3 text-gray-700">Lower — audiences may notice</td><td className="px-4 py-3 text-gray-700">Higher — human connection</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Scalability</td><td className="px-4 py-3 text-gray-700">Unlimited — produce 100 videos easily</td><td className="px-4 py-3 text-gray-700">Limited by talent availability</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When AI Voiceovers Work Well</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Internal training videos</strong> — employees are more forgiving of AI voices; content updates frequently</li>
              <li>&#x2022; <strong>E-learning and onboarding</strong> — high volume of modules that need consistent narration</li>
              <li>&#x2022; <strong>Social media content</strong> — short-form content where voice is secondary to visuals</li>
              <li>&#x2022; <strong>Explainer prototypes</strong> — testing script and pacing before investing in human talent</li>
              <li>&#x2022; <strong>Multilingual versions</strong> — producing the same video in 5+ languages quickly</li>
              <li>&#x2022; <strong>Data-driven content</strong> — reports, dashboards, and presentations that update monthly</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Use Human Voiceover Instead</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Brand films and company profiles</strong> — voice is a key part of brand identity</li>
              <li>&#x2022; <strong>Investor and board presentations</strong> — stakeholders expect premium quality</li>
              <li>&#x2022; <strong>TV commercials</strong> — broadcast standards require human talent</li>
              <li>&#x2022; <strong>Emotional storytelling</strong> — testimonials, case studies, documentaries</li>
              <li>&#x2022; <strong>Customer-facing product videos</strong> — trust and warmth drive conversion</li>
              <li>&#x2022; <strong>Anything representing your CEO or leadership</strong> — authenticity is non-negotiable</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular AI Voiceover Tools ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Tool</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                  <th className="px-4 py-3 text-left">BM Support</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">ElevenLabs</td><td className="px-4 py-3 text-gray-700">Most natural-sounding</td><td className="px-4 py-3 text-gray-700">Yes</td><td className="px-4 py-3 text-gray-700">From RM20/month</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Murf AI</td><td className="px-4 py-3 text-gray-700">Corporate / professional tone</td><td className="px-4 py-3 text-gray-700">Limited</td><td className="px-4 py-3 text-gray-700">From RM50/month</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">PlayHT</td><td className="px-4 py-3 text-gray-700">Large voice library</td><td className="px-4 py-3 text-gray-700">Yes</td><td className="px-4 py-3 text-gray-700">From RM30/month</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">HeyGen</td><td className="px-4 py-3 text-gray-700">AI avatar + voice combo</td><td className="px-4 py-3 text-gray-700">Yes</td><td className="px-4 py-3 text-gray-700">From RM100/month</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Professional Video with Voiceover?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian production companies that offer both AI and professional voiceover options for your project.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can audiences tell the difference between AI and human voiceovers?</h3>
              <p className="text-gray-600">In {currentYear}, top AI voices (ElevenLabs, PlayHT) are very close to human quality for narration. However, subtle cues — unnatural pauses, flat emotion during dramatic moments, and inconsistent pronunciation of Malaysian words — can still reveal AI origin. Most listeners won&apos;t notice for training content but may notice for premium brand content.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a professional voiceover cost in Malaysia?</h3>
              <p className="text-gray-600">Professional voiceover artists in Malaysia charge RM500–RM2,000 per session (typically 30–60 minutes of recording). Rates vary by language, experience, and usage rights. Broadcast (TV/radio) usage commands higher fees than online-only.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use AI voiceover for a video in Bahasa Malaysia?</h3>
              <p className="text-gray-600">Yes, but quality varies. ElevenLabs and PlayHT support Bahasa Malaysia, though pronunciation of local names, places, and colloquialisms may need manual correction. For formal BM narration, human talent still delivers better results.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/ai-video-production-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">AI Video Production</Link>
            <Link href="/guide/how-much-does-corporate-video-cost-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Cost</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/in-house-vs-outsource-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">In-House vs Outsource</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
