"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function VirtualProductionPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are there virtual production studios in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. As of ${currentYear}, Malaysia has several LED volume studios, primarily in the Klang Valley (Cyberjaya, Shah Alam, KL). Studios range from smaller setups for corporate content to large-scale volumes for commercials and film.`
        }
      },
      {
        "@type": "Question",
        "name": "How much does a virtual production shoot cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A full-day virtual production shoot (studio rental + 3D environment + crew) costs RM30,000–RM80,000 in ${currentYear}. Studio rental alone is RM15,000–RM40,000/day. This is competitive compared to multi-location shoots that require travel, permits, and logistics.`
        }
      },
      {
        "@type": "Question",
        "name": "Is virtual production better than green screen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most use cases, yes. Virtual production provides real lighting, real reflections, and in-camera results — eliminating the \"green screen look\" and reducing post-production costs. Green screen is still cheaper for simple backgrounds, but virtual production wins on realism and speed."
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
      { "@type": "ListItem", "position": 3, "name": "Virtual Production Malaysia", "item": "https://videoproductionmy.com/guide/virtual-production-malaysia" }
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
            <span className="text-white">Virtual Production Malaysia</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Virtual Production &amp; LED Volume Studios in Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A guide to virtual production technology, LED wall studios, and how Malaysian businesses can use this technology for commercials, corporate content, and more.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Virtual production using LED volumes in Malaysia costs <strong>RM15,000–RM80,000 per day</strong> in {currentYear}. It replaces location shoots and green screen with real-time LED backgrounds powered by Unreal Engine. Best suited for commercials, automotive content, product launches, and high-end corporate videos where multiple &quot;locations&quot; are needed without travel.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Trend Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Virtual production — popularised by Disney&apos;s The Mandalorian — has arrived in Malaysia. LED volume stages use massive curved LED screens to display photorealistic 3D environments behind actors and products in real time. Unlike green screen, the lighting from LED walls naturally illuminates subjects, creating realistic reflections and ambient light. In {currentYear}, Malaysia now has several virtual production studios, primarily in the Klang Valley and Cyberjaya, making this technology accessible to advertisers, automotive brands, property developers, and corporate video producers. For brands that need multiple &quot;locations&quot; without travel, or products that require controlled lighting environments, virtual production offers a compelling alternative to traditional location shoots.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">3D Environment Design</h3>
                <p className="text-gray-600 text-sm">A 3D artist builds the virtual environment in Unreal Engine — this could be a city skyline, factory interior, luxury hotel lobby, or any location imaginable. Takes 1–3 weeks depending on complexity.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">LED Volume Setup</h3>
                <p className="text-gray-600 text-sm">The 3D environment is displayed on a curved LED wall (typically 15–30 metres wide, 4–6 metres tall). Camera tracking systems sync the virtual background with camera movement for parallax effect.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Live Filming</h3>
                <p className="text-gray-600 text-sm">Actors, presenters, or products are filmed in front of the LED wall. The LED provides natural lighting and realistic reflections — no green spill, no compositing needed. What you see on camera is the final result.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Real-Time Changes</h3>
                <p className="text-gray-600 text-sm">Change the background instantly — switch from a KL skyline to a Dubai desert to a factory floor in minutes. Adjust time of day, weather, and lighting in real time on the LED wall.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Virtual Production vs Green Screen vs Location Shoot</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Virtual Production</th>
                  <th className="px-4 py-3 text-left">Green Screen</th>
                  <th className="px-4 py-3 text-left">Location Shoot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Cost (per day)</td><td className="px-4 py-3 text-gray-700">RM15,000 – RM80,000</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM20,000</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM30,000+</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Realism</td><td className="px-4 py-3 text-gray-700">Very high — real lighting and reflections</td><td className="px-4 py-3 text-gray-700">Medium — requires post compositing</td><td className="px-4 py-3 text-gray-700">Highest — actual location</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Post-Production</td><td className="px-4 py-3 text-gray-700">Minimal — in-camera result</td><td className="px-4 py-3 text-gray-700">Heavy — keying, compositing, rotoscoping</td><td className="px-4 py-3 text-gray-700">Standard editing</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Multiple Locations</td><td className="px-4 py-3 text-gray-700">Instant — change background in minutes</td><td className="px-4 py-3 text-gray-700">Each needs separate compositing</td><td className="px-4 py-3 text-gray-700">Requires travel, permits, logistics</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Weather Dependency</td><td className="px-4 py-3 text-gray-700">None — fully controlled</td><td className="px-4 py-3 text-gray-700">None — fully controlled</td><td className="px-4 py-3 text-gray-700">High — rain, haze, lighting changes</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Best For</td><td className="px-4 py-3 text-gray-700">Automotive, luxury, multi-location</td><td className="px-4 py-3 text-gray-700">Budget VFX, simple backgrounds</td><td className="px-4 py-3 text-gray-700">Authentic footage, real environments</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">LED studio rental (per day)</td><td className="px-4 py-3 text-gray-700">RM15,000 – RM40,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">3D environment design (per scene)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM25,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Unreal Engine operator (per day)</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Full production package (1 day)</td><td className="px-4 py-3 text-gray-700">RM30,000 – RM80,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Post-production and colour grade</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM10,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use Cases in Malaysia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Automotive Commercials</h3>
              <p className="text-gray-600 text-sm">Showcase cars in multiple environments (city streets, mountain roads, showrooms) without moving the vehicle. LED walls provide realistic reflections on car paint.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Property Developer Showcases</h3>
              <p className="text-gray-600 text-sm">Walk clients through unbuilt developments using photorealistic 3D renders on LED walls. Film presenters &quot;inside&quot; future buildings and show various unit types.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Product Launches</h3>
              <p className="text-gray-600 text-sm">Create immersive branded environments for product reveals. Change backgrounds for each product variant. Perfect for tech, luxury, and FMCG brands.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Presentations</h3>
              <p className="text-gray-600 text-sm">CEO presentations with dynamic data visualisations and branded environments. More impactful than slides, more controlled than location shoots.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Use Virtual Production vs Traditional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Use Virtual Production For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Multiple &quot;locations&quot; needed in one shoot day</li>
                <li>&#x2022; Products requiring controlled reflections (automotive, glass, metal)</li>
                <li>&#x2022; Environments that don&apos;t exist yet (property pre-sales)</li>
                <li>&#x2022; Weather-sensitive or logistically complex locations</li>
                <li>&#x2022; High-end brand content with cinematic production value</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Use Traditional Production For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Authentic footage of real people and places</li>
                <li>&#x2022; Events and live coverage</li>
                <li>&#x2022; Budgets under RM15,000</li>
                <li>&#x2022; Testimonials, interviews, and documentary-style</li>
                <li>&#x2022; Projects where the real location is part of the story</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Interested in Virtual Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian studios offering LED volume and virtual production services.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Are there virtual production studios in Malaysia?</h3>
              <p className="text-gray-600">Yes. As of {currentYear}, Malaysia has several LED volume studios, primarily in the Klang Valley (Cyberjaya, Shah Alam, KL). Studios range from smaller setups for corporate content to large-scale volumes for commercials and film.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a virtual production shoot cost in Malaysia?</h3>
              <p className="text-gray-600">A full-day virtual production shoot (studio rental + 3D environment + crew) costs RM30,000–RM80,000 in {currentYear}. Studio rental alone is RM15,000–RM40,000/day. This is competitive compared to multi-location shoots that require travel, permits, and logistics.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is virtual production better than green screen?</h3>
              <p className="text-gray-600">For most use cases, yes. Virtual production provides real lighting, real reflections, and in-camera results — eliminating the &quot;green screen look&quot; and reducing post-production costs. Green screen is still cheaper for simple backgrounds, but virtual production wins on realism and speed.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/animation-vs-live-action" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Animation vs Live Action</Link>
            <Link href="/guide/ai-video-production-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">AI Video Production</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/stock-footage-vs-original-shoot" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Stock vs Original Shoot</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
