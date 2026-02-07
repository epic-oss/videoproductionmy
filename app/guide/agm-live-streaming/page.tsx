"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function AGMLiveStreamingGuide() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does AGM live streaming cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `AGM live streaming costs RM5,000–RM25,000+ in ${currentYear}. Basic streaming starts at RM5,000, while full hybrid AGM packages with RPV platform, multi-camera, and voting integration range from RM8,000–RM25,000.`
        }
      },
      {
        "@type": "Question",
        "name": "Is virtual AGM allowed in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under the Companies Act 2016 and Bursa Malaysia guidelines, Malaysian companies can hold fully virtual or hybrid AGMs with proper Remote Participation and Voting (RPV) facilities."
        }
      },
      {
        "@type": "Question",
        "name": "What internet speed is needed for AGM streaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A minimum 20Mbps dedicated upload speed is recommended. Professional providers bring backup connectivity (4G/5G bonding) to ensure uninterrupted streaming."
        }
      },
      {
        "@type": "Question",
        "name": "How early should I book an AGM streaming service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book at least 4–6 weeks in advance. During AGM season (April–June), experienced providers get booked quickly. Early booking also allows time for platform testing and rehearsals."
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
      { "@type": "ListItem", "position": 3, "name": "AGM Live Streaming", "item": "https://videoproductionmy.com/guide/agm-live-streaming" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/agm-live-streaming" className="text-white">AGM Live Streaming</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            AGM Live Streaming Services Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Professional AGM and EGM live streaming for Malaysian public-listed companies — technical requirements, pricing, and compliance considerations.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            AGM live streaming services in Malaysia cost between <strong>RM5,000 and RM25,000+</strong> in {currentYear}. This includes multi-camera setup, professional streaming equipment, technical crew, and platform management. Bursa Malaysia requires listed companies to provide remote participation facilities for shareholders.
          </p>
        </div>

        {/* Requirements */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AGM Live Streaming Requirements in Malaysia</h2>
          <p className="text-gray-700 mb-4">
            Since {currentYear - 4}, Bursa Malaysia has required public-listed companies to provide virtual or hybrid AGM options. Key requirements include:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Remote Participation &amp; Voting (RPV)</strong> — Shareholders must be able to attend and vote remotely in real-time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Q&amp;A Functionality</strong> — Remote shareholders must be able to submit questions during the meeting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Identity Verification</strong> — System must verify shareholder identity before allowing access</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Secure &amp; Reliable</strong> — Enterprise-grade streaming with redundancy to prevent disruptions</span>
            </li>
          </ul>
        </section>

        {/* Pricing Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AGM Live Streaming Pricing ({currentYear})</h2>
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
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Basic Streaming</td>
                  <td className="px-4 py-3 text-gray-700">RM5,000 – RM8,000</td>
                  <td className="px-4 py-3 text-gray-600">1–2 cameras, single platform, basic graphics</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Standard AGM Package</td>
                  <td className="px-4 py-3 text-gray-700">RM8,000 – RM15,000</td>
                  <td className="px-4 py-3 text-gray-600">Multi-camera, RPV platform, Q&amp;A, voting integration</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Premium Hybrid AGM</td>
                  <td className="px-4 py-3 text-gray-700">RM15,000 – RM25,000+</td>
                  <td className="px-4 py-3 text-gray-600">Full production, LED backdrop, presentation graphics, recording, multi-language</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">RPV Platform Only</td>
                  <td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td>
                  <td className="px-4 py-3 text-gray-600">Streaming platform with voting &amp; Q&amp;A (no on-site crew)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Setup */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Setup for AGM Streaming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Video Equipment</h3>
              <p className="text-gray-600 text-sm">2–3 professional cameras, video switcher, confidence monitors, LED/LCD display for presentations, backup recording.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Audio Setup</h3>
              <p className="text-gray-600 text-sm">Wireless microphones for speakers, audio mixer, line feed from venue PA system, backup audio recording.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Streaming Infrastructure</h3>
              <p className="text-gray-600 text-sm">Dedicated internet line (min 20Mbps upload), hardware encoder, backup 4G/5G bonding unit, CDN distribution.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Crew</h3>
              <p className="text-gray-600 text-sm">Technical director, camera operators, streaming engineer, audio engineer, on-site support coordinator.</p>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Considerations</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>Bursa Malaysia Guidelines:</strong> Listed companies must comply with Bursa Malaysia&apos;s guidance on virtual and hybrid meetings, including providing RPV facilities.</p>
            <p><strong>Companies Act 2016:</strong> Section 327(1) allows for virtual meetings as long as all members can participate and vote effectively.</p>
            <p><strong>Data Privacy:</strong> Shareholder personal data collected during registration must comply with PDPA 2010. Ensure your streaming provider has proper data handling policies.</p>
            <p><strong>Recording &amp; Archival:</strong> AGM recordings should be maintained for compliance and corporate governance records. Most providers include 30–90 day cloud storage.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need AGM Live Streaming?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with experienced AGM streaming providers in Malaysia. Get compliant, reliable, and professional service for your next AGM or EGM.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Quotes
            </button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Internal Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Streaming Companies Near You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Kuala Lumpur</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Selangor</Link>
            <Link href="/locations/penang" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Penang</Link>
            <Link href="/locations/johor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Johor</Link>
            <Link href="/locations/melaka" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Melaka</Link>
            <Link href="/locations/sarawak" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Sarawak</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does AGM live streaming cost in Malaysia?</h3>
              <p className="text-gray-600">AGM live streaming costs RM5,000–RM25,000+ in {currentYear}. Basic streaming starts at RM5,000, while full hybrid AGM packages with RPV platform, multi-camera, and voting integration range from RM8,000–RM25,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is virtual AGM allowed in Malaysia?</h3>
              <p className="text-gray-600">Yes. Under the Companies Act 2016 and Bursa Malaysia guidelines, Malaysian companies can hold fully virtual or hybrid AGMs with proper Remote Participation and Voting (RPV) facilities.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What internet speed is needed for AGM streaming?</h3>
              <p className="text-gray-600">A minimum 20Mbps dedicated upload speed is recommended. Professional providers bring backup connectivity (4G/5G bonding) to ensure uninterrupted streaming.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How early should I book an AGM streaming service?</h3>
              <p className="text-gray-600">Book at least 4–6 weeks in advance. During AGM season (April–June), experienced providers get booked quickly. Early booking also allows time for platform testing and rehearsals.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
