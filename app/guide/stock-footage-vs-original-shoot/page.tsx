"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function StockVsOriginalShootPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can audiences tell when stock footage is used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Often yes, especially for commonly-used clips or when the footage clearly features non-Malaysian settings and actors. Professional editors minimise this by colour-grading stock to match original footage and choosing less recognisable clips."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best stock footage platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular platforms include Shutterstock, Adobe Stock, Artgrid, and Storyblocks. For Malaysian-specific content, Getty Images and Pond5 occasionally have Southeast Asian footage. Expect to pay RM50–RM500 per clip for commercial licenses."
        }
      },
      {
        "@type": "Question",
        "name": "Will a production company source stock footage for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most Malaysian production houses include stock footage sourcing as part of their service. They select, license, and colour-grade stock clips to blend seamlessly with your original footage. License fees are usually passed through at cost."
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
      { "@type": "ListItem", "position": 3, "name": "Stock Footage vs Original Shoot", "item": "https://videoproductionmy.com/guide/stock-footage-vs-original-shoot" }
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
            <span className="text-white">Stock Footage vs Original Shoot</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Stock Footage vs Original Shoot: When to Save or Spend ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Should you use stock footage or invest in original video? A practical comparison for Malaysian businesses weighing cost, uniqueness, and brand impact.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            <strong>Stock footage</strong> saves 50–70% on production costs and works well for generic B-roll and supporting content. <strong>Original shoots</strong> cost more but deliver unique, on-brand footage that competitors can&apos;t replicate. Most Malaysian businesses benefit from a <strong>hybrid approach</strong> — original footage for hero shots, stock for filler.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Stock Footage</th>
                  <th className="px-4 py-3 text-left">Original Shoot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Cost</td><td className="px-4 py-3 text-gray-700">RM50 – RM500 per clip</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM30,000+ per shoot</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Uniqueness</td><td className="px-4 py-3 text-gray-700">Low — competitors can use same clips</td><td className="px-4 py-3 text-gray-700">High — exclusive to your brand</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Brand Consistency</td><td className="px-4 py-3 text-gray-700">Difficult — varied styles, locations, actors</td><td className="px-4 py-3 text-gray-700">Full control — your brand, your people</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Speed</td><td className="px-4 py-3 text-gray-700">Instant — download and use</td><td className="px-4 py-3 text-gray-700">2–6 weeks production time</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Malaysian Context</td><td className="px-4 py-3 text-gray-700">Limited — mostly Western content</td><td className="px-4 py-3 text-gray-700">Authentic — local people, places, culture</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Trust Factor</td><td className="px-4 py-3 text-gray-700">Lower — audiences spot stock easily</td><td className="px-4 py-3 text-gray-700">Higher — real and authentic</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Legal / Licensing</td><td className="px-4 py-3 text-gray-700">License restrictions may apply</td><td className="px-4 py-3 text-gray-700">Full ownership and rights</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stock Footage: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; 50–70% cheaper than original production</li>
                <li>&#x2022; Instant availability — no production lead time</li>
                <li>&#x2022; Access to aerial, underwater, and exotic locations</li>
                <li>&#x2022; Great for conceptual B-roll and transition shots</li>
                <li>&#x2022; 4K quality available from major libraries</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Not unique — competitors may use the same clips</li>
                <li>&#x2022; Limited Malaysian / Southeast Asian content</li>
                <li>&#x2022; Audiences increasingly recognise stock footage</li>
                <li>&#x2022; Licensing restrictions on some platforms</li>
                <li>&#x2022; Inconsistent style when mixing multiple clips</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Original Shoot: Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Pros</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; 100% unique and exclusive to your brand</li>
                <li>&#x2022; Features your actual team, products, and facilities</li>
                <li>&#x2022; Authentic Malaysian context and diversity</li>
                <li>&#x2022; Full creative control over every shot</li>
                <li>&#x2022; Full ownership — no licensing restrictions</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-3">Cons</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Significantly more expensive</li>
                <li>&#x2022; Requires 2–6 weeks lead time</li>
                <li>&#x2022; Weather, location, and scheduling dependencies</li>
                <li>&#x2022; Needs pre-production planning and coordination</li>
                <li>&#x2022; Costly to reshoot if changes are needed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use Stock Footage If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; You need <strong>generic B-roll</strong> (cityscapes, nature, office environments)</li>
              <li>&#x2022; Your budget is <strong>under RM3,000</strong> for the entire video</li>
              <li>&#x2022; You need content <strong>immediately</strong> with no time for a shoot</li>
              <li>&#x2022; The footage is for <strong>internal presentations or training</strong></li>
              <li>&#x2022; You need shots that are <strong>logistically impossible</strong> to film (aerial cityscapes, foreign locations)</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Invest in an Original Shoot If...</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; The video is for your <strong>website homepage, investor pitch, or key campaign</strong></li>
              <li>&#x2022; You need to showcase <strong>your actual team, office, or factory</strong></li>
              <li>&#x2022; <strong>Brand authenticity</strong> is important to your audience</li>
              <li>&#x2022; You&apos;re targeting a <strong>Malaysian audience</strong> who expects local representation</li>
              <li>&#x2022; The video will be used <strong>long-term</strong> (1+ years) across multiple channels</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hybrid Approach (Recommended)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most production companies in Malaysia recommend a hybrid approach: shoot original footage for hero shots (interviews, products, facilities) and supplement with stock footage for conceptual B-roll. This can reduce production costs by 30–40% while maintaining brand authenticity where it matters most.
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Example: Corporate Video Breakdown</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>&#x2022; <strong>Original:</strong> CEO interview, team shots, office/factory walkthrough, product demos</li>
              <li>&#x2022; <strong>Stock:</strong> City skyline establishing shot, abstract tech visuals, global business montage</li>
              <li>&#x2022; <strong>Cost saving:</strong> RM10,000 hybrid vs RM15,000 fully original (33% saving)</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need a Video Produced?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian production companies who can advise on the best stock vs original approach for your project.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can audiences tell when stock footage is used?</h3>
              <p className="text-gray-600">Often yes, especially for commonly-used clips or when the footage clearly features non-Malaysian settings and actors. Professional editors minimise this by colour-grading stock to match original footage and choosing less recognisable clips.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What are the best stock footage platforms?</h3>
              <p className="text-gray-600">Popular platforms include Shutterstock, Adobe Stock, Artgrid, and Storyblocks. For Malaysian-specific content, Getty Images and Pond5 occasionally have Southeast Asian footage. Expect to pay RM50–RM500 per clip for commercial licenses.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Will a production company source stock footage for me?</h3>
              <p className="text-gray-600">Yes. Most Malaysian production houses include stock footage sourcing as part of their service. They select, license, and colour-grade stock clips to blend seamlessly with your original footage. License fees are usually passed through at cost.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/animation-vs-live-action" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Animation vs Live Action</Link>
            <Link href="/guide/production-house-vs-freelancer" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production House vs Freelancer</Link>
            <Link href="/guide/corporate-video-production-kl" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video KL</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
