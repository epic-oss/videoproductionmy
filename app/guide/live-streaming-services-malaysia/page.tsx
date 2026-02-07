"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function LiveStreamingServicesPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does corporate live streaming cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Basic single-camera streaming starts from RM3,000. Multi-camera setups with branded graphics cost RM5,000–RM10,000. Broadcast-quality AGM streaming with voting integration runs RM8,000–RM15,000 in ${currentYear}.`
        }
      },
      {
        "@type": "Question",
        "name": "What internet speed do I need for live streaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A minimum of 10 Mbps upload speed is recommended for 1080p streaming. Professional crews bring dedicated 4G/5G bonding devices as backup. Always do a site test 1–2 days before the event."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a recording of the live stream?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All professional streaming packages include a full recording. Most also offer a post-event edited highlights video (additional RM1,000–RM3,000) for sharing after the event."
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
      { "@type": "ListItem", "position": 3, "name": "Live Streaming Services", "item": "https://videoproductionmy.com/guide/live-streaming-services-malaysia" }
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
            <span className="text-white">Live Streaming Services</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Live Streaming Services for Corporate Events Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Everything you need to know about professional live streaming for corporate events, AGMs, conferences, and hybrid events in Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Professional live streaming for corporate events in Malaysia costs <strong>RM3,000–RM15,000</strong> per event in {currentYear}. Services include multi-camera setups, graphics overlay, platform management, and recording. Hybrid events (live + virtual audience) have become the standard for AGMs, conferences, and product launches.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Trend Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Live streaming has evolved from a pandemic necessity to a permanent fixture in Malaysia&apos;s corporate landscape. In {currentYear}, Bursa Malaysia-listed companies routinely live stream AGMs and EGMs to meet regulatory requirements and shareholder expectations. Conferences and seminars now default to hybrid formats, reaching both in-person and remote audiences. Product launches, training sessions, and town halls increasingly incorporate live streaming to maximise reach. For Malaysian businesses with regional operations across ASEAN, live streaming eliminates travel costs while maintaining engagement. The technology has matured — audiences now expect broadcast-quality streaming with multi-camera angles, lower thirds, and seamless platform integration.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Equipment &amp; Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Cameras &amp; Switching</h3>
              <p className="text-gray-600 text-sm">2–4 PTZ or cinema cameras with a live video switcher (ATEM, vMix). Operators manage camera angles in real-time for professional broadcast feel.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Audio</h3>
              <p className="text-gray-600 text-sm">Professional audio feed via sound board, wireless lavalier mics, and backup audio recorders. Clear audio is the #1 factor in stream quality.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Graphics &amp; Overlays</h3>
              <p className="text-gray-600 text-sm">Lower thirds (name titles), logo bugs, slide integration, countdown timers, and live Q&amp;A feeds. Customised to your brand guidelines.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Encoding &amp; Internet</h3>
              <p className="text-gray-600 text-sm">Hardware encoders (Teradek, LiveU) with dedicated 4G/5G bonding for reliable streaming. Backup internet line is standard for corporate events.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Platform</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                  <th className="px-4 py-3 text-left">Key Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">YouTube Live</td><td className="px-4 py-3 text-gray-700">Public events, webinars</td><td className="px-4 py-3 text-gray-700">Free, unlimited viewers, auto-recording</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Zoom Webinar</td><td className="px-4 py-3 text-gray-700">Corporate meetings, AGMs</td><td className="px-4 py-3 text-gray-700">Registration, Q&amp;A, polls, breakout rooms</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Microsoft Teams Live</td><td className="px-4 py-3 text-gray-700">Enterprise, internal town halls</td><td className="px-4 py-3 text-gray-700">Integrated with Office 365, up to 10K viewers</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Facebook Live</td><td className="px-4 py-3 text-gray-700">Consumer brands, launches</td><td className="px-4 py-3 text-gray-700">Built-in audience, comments, sharing</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Custom RTMP (Vimeo, Restream)</td><td className="px-4 py-3 text-gray-700">Multi-platform simulcast</td><td className="px-4 py-3 text-gray-700">Stream to multiple platforms simultaneously</td></tr>
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
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Basic (1 camera)</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM5,000</td><td className="px-4 py-3 text-gray-700">1 camera, basic graphics, 1 platform</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Standard (2–3 cameras)</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM10,000</td><td className="px-4 py-3 text-gray-700">Multi-cam, switching, branded graphics, recording</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Premium (broadcast quality)</td><td className="px-4 py-3 text-gray-700">RM10,000 – RM20,000</td><td className="px-4 py-3 text-gray-700">4+ cameras, pre-show, multi-platform, replay</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">AGM / EGM Compliance</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM15,000</td><td className="px-4 py-3 text-gray-700">Voting integration, Bursa-compliant, recording</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Streaming vs Traditional Video: When to Use Each</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Use Live Streaming For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; AGMs, EGMs, and shareholder meetings</li>
                <li>&#x2022; Conferences with remote attendees</li>
                <li>&#x2022; Product launches wanting real-time engagement</li>
                <li>&#x2022; Town halls and all-hands meetings</li>
                <li>&#x2022; Events requiring live Q&amp;A and polling</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Use Pre-Recorded Video For</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Polished brand and corporate videos</li>
                <li>&#x2022; Training content with multiple retakes</li>
                <li>&#x2022; Content needing heavy post-production</li>
                <li>&#x2022; Evergreen content for long-term use</li>
                <li>&#x2022; Content requiring strict script adherence</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Live Streaming Services?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from Malaysian live streaming specialists for your next corporate event, AGM, or conference.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does corporate live streaming cost in Malaysia?</h3>
              <p className="text-gray-600">Basic single-camera streaming starts from RM3,000. Multi-camera setups with branded graphics cost RM5,000–RM10,000. Broadcast-quality AGM streaming with voting integration runs RM8,000–RM15,000 in {currentYear}.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What internet speed do I need for live streaming?</h3>
              <p className="text-gray-600">A minimum of 10 Mbps upload speed is recommended for 1080p streaming. Professional crews bring dedicated 4G/5G bonding devices as backup. Always do a site test 1–2 days before the event.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I get a recording of the live stream?</h3>
              <p className="text-gray-600">Yes. All professional streaming packages include a full recording. Most also offer a post-event edited highlights video (additional RM1,000–RM3,000) for sharing after the event.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/agm-live-streaming" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">AGM Live Streaming</Link>
            <Link href="/guide/event-videography-packages" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Event Packages</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
            <Link href="/guide/virtual-production-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Virtual Production</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
