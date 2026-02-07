"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function AIVideoProductionPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can AI fully replace a video production company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not yet. AI excels at specific tasks (B-roll, voiceovers, editing) but cannot replace the creative direction, human connection, and on-location filming that professional production delivers. The best approach combines both."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI-generated video legal to use commercially in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with caveats. Most AI video platforms grant commercial licenses for generated content. However, copyright and IP laws around AI content are still evolving in Malaysia. Avoid using AI to replicate real people or copyrighted material without permission."
        }
      },
      {
        "@type": "Question",
        "name": "Do Malaysian production companies use AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Increasingly yes. Many production houses in KL and Selangor now use AI for subtitling, colour grading assistance, audio cleanup, and content repurposing. Some offer AI-enhanced packages at lower price points for social media content."
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
      { "@type": "ListItem", "position": 3, "name": "AI Video Production", "item": "https://videoproductionmy.com/guide/ai-video-production-malaysia" }
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
            <span className="text-white">AI Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            AI Video Production: How Malaysian Businesses Are Using Sora &amp; AI Tools ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A practical guide to AI-powered video production — what works, what doesn&apos;t, and how Malaysian companies are integrating AI into their video workflows.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            AI tools like Sora, Runway, and HeyGen can reduce video production costs by <strong>30–60%</strong> for specific use cases like B-roll generation, voiceovers, and editing. However, AI is best used as a <strong>supplement to — not replacement for</strong> — professional production for corporate and brand content in {currentYear}.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Trend Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The AI video revolution has arrived in Malaysia. In {currentYear}, tools like OpenAI&apos;s Sora, Runway Gen-3, Pika, and HeyGen are transforming how businesses approach video content. Malaysian companies — from startups in Bangsar South to multinationals in KLCC — are experimenting with AI to produce more content faster and cheaper. While AI won&apos;t replace professional videographers for high-stakes projects, it&apos;s already proving invaluable for social media content, internal communications, B-roll generation, and rapid prototyping. Understanding where AI fits into your video strategy is now essential for staying competitive.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How AI Is Used in Video Production</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AI B-Roll Generation</h3>
              <p className="text-gray-600 text-sm">Tools like Sora and Runway generate realistic stock-like footage from text prompts. Great for conceptual visuals, backgrounds, and filler content. Saves RM500–RM2,000 per clip vs stock footage licensing.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AI Voiceovers</h3>
              <p className="text-gray-600 text-sm">ElevenLabs, Murf, and PlayHT generate realistic voiceovers in Bahasa Malaysia, English, Mandarin, and Tamil. Costs RM50–RM200 vs RM500–RM2,000 for human voiceover talent.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AI Video Editing</h3>
              <p className="text-gray-600 text-sm">Descript, CapCut Pro, and Opus Clip auto-edit long-form content into short clips, remove silences, add captions, and create highlights. Saves 60–80% of editing time.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AI Avatar Presenters</h3>
              <p className="text-gray-600 text-sm">HeyGen and Synthesia create AI presenters for training videos, product demos, and internal comms. No filming needed — just input a script. From RM200–RM500 per video.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AI Subtitle &amp; Translation</h3>
              <p className="text-gray-600 text-sm">Auto-generate accurate subtitles and translate videos into multiple languages. Critical for Malaysia&apos;s multilingual market. Tools like Whisper and CapCut handle BM, English, and Mandarin.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Comparison: AI vs Traditional</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Task</th>
                  <th className="px-4 py-3 text-left">Traditional Cost</th>
                  <th className="px-4 py-3 text-left">AI-Assisted Cost</th>
                  <th className="px-4 py-3 text-left">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">B-Roll (10 clips)</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td><td className="px-4 py-3 text-gray-700">RM200 – RM500</td><td className="px-4 py-3 text-green-600 font-medium">~90%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Voiceover (3 min)</td><td className="px-4 py-3 text-gray-700">RM500 – RM2,000</td><td className="px-4 py-3 text-gray-700">RM50 – RM200</td><td className="px-4 py-3 text-green-600 font-medium">~90%</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Editing (30min to 5 clips)</td><td className="px-4 py-3 text-gray-700">RM1,500 – RM3,000</td><td className="px-4 py-3 text-gray-700">RM300 – RM800</td><td className="px-4 py-3 text-green-600 font-medium">~70%</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Training video (5 min)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM12,000</td><td className="px-4 py-3 text-gray-700">RM500 – RM2,000</td><td className="px-4 py-3 text-green-600 font-medium">~80%</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Subtitles (multilingual)</td><td className="px-4 py-3 text-gray-700">RM300 – RM800</td><td className="px-4 py-3 text-gray-700">RM50 – RM150</td><td className="px-4 py-3 text-green-600 font-medium">~80%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations: When NOT to Use AI</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Brand films and corporate profiles</strong> — AI footage lacks the authenticity of real people and places</li>
              <li>&#x2022; <strong>Testimonials and interviews</strong> — real human connection can&apos;t be faked</li>
              <li>&#x2022; <strong>Product videos</strong> — AI can&apos;t accurately render your specific physical products</li>
              <li>&#x2022; <strong>Event coverage</strong> — live events need real cameras and crews on-site</li>
              <li>&#x2022; <strong>Legal and compliance content</strong> — AI accuracy issues create risk for regulated industries</li>
              <li>&#x2022; <strong>Investor and board presentations</strong> — stakeholders expect genuine footage</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Use AI vs Traditional Production</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Use AI For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Social media content at scale</li>
                <li>&#x2022; Internal training and onboarding videos</li>
                <li>&#x2022; Conceptual B-roll and background footage</li>
                <li>&#x2022; Multilingual subtitles and voiceovers</li>
                <li>&#x2022; Repurposing long content into short clips</li>
                <li>&#x2022; Rapid prototyping and storyboard visualisation</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Use Traditional Production For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Corporate brand films and company profiles</li>
                <li>&#x2022; Customer testimonials and case studies</li>
                <li>&#x2022; Product demonstrations and launches</li>
                <li>&#x2022; Event and conference coverage</li>
                <li>&#x2022; TV commercials and broadcast content</li>
                <li>&#x2022; Investor and stakeholder presentations</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Video Production — AI or Traditional?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian production companies that integrate AI tools into their workflow for faster, more cost-effective results.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can AI fully replace a video production company?</h3>
              <p className="text-gray-600">Not in {currentYear}. AI excels at specific tasks (B-roll, voiceovers, editing) but cannot replace the creative direction, human connection, and on-location filming that professional production delivers. The best approach combines both.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is AI-generated video legal to use commercially in Malaysia?</h3>
              <p className="text-gray-600">Yes, with caveats. Most AI video platforms grant commercial licenses for generated content. However, copyright and IP laws around AI content are still evolving in Malaysia. Avoid using AI to replicate real people or copyrighted material without permission.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do Malaysian production companies use AI tools?</h3>
              <p className="text-gray-600">Increasingly yes. Many production houses in KL and Selangor now use AI for subtitling, colour grading assistance, audio cleanup, and content repurposing. Some offer AI-enhanced packages at lower price points for social media content.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/tiktok-video-production" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">TikTok Production</Link>
            <Link href="/guide/stock-footage-vs-original-shoot" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Stock vs Original Shoot</Link>
            <Link href="/guide/ugc-vs-professional-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">UGC vs Professional</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
