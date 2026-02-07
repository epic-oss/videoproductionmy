"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function VerticalVideoCorporatePage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does vertical video work for B2B marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Absolutely. LinkedIn's algorithm now prioritises vertical video, and B2B decision-makers consume content on mobile just like consumers. Companies posting vertical video on LinkedIn see 40% more engagement than horizontal posts in ${currentYear}.`
        }
      },
      {
        "@type": "Question",
        "name": "Should I produce vertical-only or both formats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If budget allows, produce dual-format (both 9:16 and 16:9) from the same shoot. This costs only 20–30% more than single format and ensures coverage across all platforms. If choosing one, pick based on your primary distribution channel."
        }
      },
      {
        "@type": "Question",
        "name": "Can I convert my existing horizontal videos to vertical?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most Malaysian production companies offer horizontal-to-vertical conversion for RM500–RM1,500 per video. This includes re-framing, adding captions, and optimising for mobile viewing. Best results come from footage originally shot in 4K."
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
      { "@type": "ListItem", "position": 3, "name": "Vertical Video Corporate", "item": "https://videoproductionmy.com/guide/vertical-video-corporate" }
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
            <span className="text-white">Vertical Video Corporate</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Vertical Video is Essential for B2B Marketing ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            How Malaysian B2B companies are using vertical 9:16 video on LinkedIn, WhatsApp, and mobile-first platforms to reach decision-makers.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Vertical video (9:16) gets <strong>40% more engagement</strong> on LinkedIn and <strong>90% of mobile users</strong> watch video without rotating their phones. In {currentYear}, B2B companies that produce vertical video alongside traditional 16:9 content see significantly higher reach and engagement on mobile-dominant platforms.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Trend Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            B2B marketing has gone mobile. In {currentYear}, 75% of Malaysian business professionals consume content primarily on their smartphones — during commutes, between meetings, and after hours. LinkedIn has fully embraced vertical video with its Reels-style format. WhatsApp Status is now a B2B marketing channel in Malaysia, where business relationships are maintained through chat. Even email newsletters embedded with vertical video see higher click-through rates. Yet most Malaysian B2B companies still produce only 16:9 horizontal video, missing the majority of their audience who consume content in portrait mode. Producing vertical-first content is no longer a &quot;nice-to-have&quot; — it&apos;s how you reach decision-makers where they actually spend time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Vertical Video Production</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Shoot Vertical-First (or Dual-Format)</h3>
                <p className="text-gray-600 text-sm">Best practice: shoot natively in 9:16 for mobile platforms. Alternatively, shoot in 4K 16:9 and crop for vertical — though this requires careful framing to ensure subjects stay centred.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Optimise for Sound-Off Viewing</h3>
                <p className="text-gray-600 text-sm">85% of LinkedIn and WhatsApp video is watched without sound. Bold captions, text overlays, and visual storytelling are essential. Subtitles in BM and English for Malaysian audiences.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Hook in the First 2 Seconds</h3>
                <p className="text-gray-600 text-sm">Vertical video scrolls fast. Start with a bold statement, question, or visual that stops the thumb. The problem/solution format works best for B2B: &quot;Your sales team is losing deals because...&quot;</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Repurpose Across Platforms</h3>
                <p className="text-gray-600 text-sm">One vertical video serves LinkedIn, Instagram Reels, TikTok, YouTube Shorts, and WhatsApp Status. Adapt captions and CTAs for each platform while keeping the core content consistent.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing: Vertical vs Horizontal Production</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-left">Cost per Video</th>
                  <th className="px-4 py-3 text-left">Best Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Vertical (9:16) — phone-shot</td><td className="px-4 py-3 text-gray-700">RM500 – RM2,000</td><td className="px-4 py-3 text-gray-700">TikTok, Reels, Shorts</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Vertical (9:16) — professional</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td><td className="px-4 py-3 text-gray-700">LinkedIn, WhatsApp Status</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Horizontal (16:9) — standard</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td><td className="px-4 py-3 text-gray-700">Website, YouTube, presentations</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Dual-format (both 9:16 + 16:9)</td><td className="px-4 py-3 text-gray-700">RM6,000 – RM18,000</td><td className="px-4 py-3 text-gray-700">All platforms</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertical vs Horizontal: When to Use Each</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Use Vertical (9:16) For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; LinkedIn posts and LinkedIn video ads</li>
                <li>&#x2022; WhatsApp Status business updates</li>
                <li>&#x2022; Instagram Reels and TikTok for B2B</li>
                <li>&#x2022; Quick tips, thought leadership snippets</li>
                <li>&#x2022; Behind-the-scenes and team culture content</li>
                <li>&#x2022; Mobile-targeted email campaigns</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Use Horizontal (16:9) For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Website homepage hero videos</li>
                <li>&#x2022; YouTube long-form content</li>
                <li>&#x2022; Conference and event presentations</li>
                <li>&#x2022; Board and investor presentations</li>
                <li>&#x2022; Training and e-learning content</li>
                <li>&#x2022; TV commercials and broadcast</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Repurposing: From Horizontal to Vertical</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Already have horizontal videos? You can repurpose them. Most production companies offer a conversion service: take existing 16:9 footage and create 9:16 versions with re-framing, captions, and platform optimisation. Expect to pay <strong>RM500–RM1,500 per video</strong> for conversion — far cheaper than producing from scratch.
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Key Repurposing Techniques</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>&#x2022; <strong>Centre crop:</strong> Crop 16:9 to 9:16 keeping the subject centred — works for talking heads</li>
              <li>&#x2022; <strong>Stack format:</strong> Video on top, captions/graphics on bottom — maximises vertical space</li>
              <li>&#x2022; <strong>Clip extraction:</strong> Pull 15–60 second highlights from longer content — each becomes a standalone vertical</li>
              <li>&#x2022; <strong>Motion graphics overlay:</strong> Add animated text and graphics to make horizontal footage feel vertical-native</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Vertical Video for Your B2B Brand?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian production companies that produce both vertical and horizontal formats for maximum platform coverage.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Does vertical video work for B2B marketing?</h3>
              <p className="text-gray-600">Absolutely. LinkedIn&apos;s algorithm now prioritises vertical video, and B2B decision-makers consume content on mobile just like consumers. Companies posting vertical video on LinkedIn see 40% more engagement than horizontal posts in {currentYear}.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Should I produce vertical-only or both formats?</h3>
              <p className="text-gray-600">If budget allows, produce dual-format (both 9:16 and 16:9) from the same shoot. This costs only 20–30% more than single format and ensures coverage across all platforms. If choosing one, pick based on your primary distribution channel.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I convert my existing horizontal videos to vertical?</h3>
              <p className="text-gray-600">Yes. Most Malaysian production companies offer horizontal-to-vertical conversion for RM500–RM1,500 per video. This includes re-framing, adding captions, and optimising for mobile viewing. Best results come from footage originally shot in 4K.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/tiktok-video-production" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">TikTok Production</Link>
            <Link href="/guide/ugc-vs-professional-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">UGC vs Professional</Link>
            <Link href="/guide/corporate-video-production-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video KL</Link>
            <Link href="/guide/in-house-vs-outsource-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">In-House vs Outsource</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
