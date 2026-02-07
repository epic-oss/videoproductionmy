"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function DroneVideographyGuide() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does drone videography cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Drone videography costs RM1,500–RM10,000+ in ${currentYear}. A half-day aerial shoot starts at RM1,500, while cinematic multi-location projects cost RM5,000–RM10,000+.`
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for drone filming in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All commercial drone operations require CAAM authorization. Your hired drone operator should hold a valid Remote Pilot License (RPL) and Unmanned Aircraft Operator Certificate (UAOC). They handle the permits."
        }
      },
      {
        "@type": "Question",
        "name": "Can drones fly everywhere in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Drones cannot fly within 5 nautical miles of airports, over military installations, above crowds, or higher than 400 feet without special clearance. Urban areas in KL have additional restrictions."
        }
      },
      {
        "@type": "Question",
        "name": "What quality can I expect from drone footage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional drone operators use 4K or higher resolution cameras with stabilized gimbals. Modern drones like DJI Inspire 3 and Mavic 3 Pro deliver cinema-quality aerial footage."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if it rains on the shoot day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most operators include a rain date policy. Drones cannot fly in rain, so shoots are rescheduled at no extra cost if weather conditions are unsafe. Discuss the rain policy before booking."
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
      { "@type": "ListItem", "position": 3, "name": "Drone Videography Malaysia", "item": "https://videoproductionmy.com/guide/drone-videography-malaysia" }
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
            <Link href="/guide/drone-videography-malaysia" className="text-white">Drone Videography</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Drone Videography Services Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Everything about drone videography in Malaysia — permits, pricing, use cases, and how to find licensed drone operators for your project.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Drone videography in Malaysia costs between <strong>RM1,500 and RM10,000+</strong> per project in {currentYear}. Half-day shoots start at RM1,500, while full-day aerial coverage with advanced editing runs RM5,000–RM10,000. All commercial drone operations require a CAAM permit and licensed pilot.
          </p>
        </div>

        {/* Permits Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Drone Permits &amp; Regulations in Malaysia</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-4">
            <p className="font-semibold text-gray-900 mb-1">Important: Permits Required</p>
            <p className="text-gray-700 text-sm">All commercial drone operations in Malaysia require approval from the Civil Aviation Authority of Malaysia (CAAM). Hiring an unlicensed drone operator can result in fines up to RM50,000.</p>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>CAAM Authorization</strong> — Commercial operators must hold a valid Remote Pilot License (RPL) and Unmanned Aircraft Operator Certificate (UAOC)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Flight Permission</strong> — Each shoot location requires specific flight permission, especially near airports, military zones, and restricted areas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>Insurance</strong> — Third-party liability insurance is mandatory for commercial drone operations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">&#10003;</span>
              <span><strong>No-Fly Zones</strong> — Drones cannot fly within 5 nautical miles of airports, over crowds, or above 400 feet without special clearance</span>
            </li>
          </ul>
        </section>

        {/* Pricing Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Drone Videography Pricing ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Half-Day Aerial Shoot</td>
                  <td className="px-4 py-3 text-gray-700">RM1,500 – RM3,000</td>
                  <td className="px-4 py-3 text-gray-600">Up to 4 hours</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Full-Day Aerial Shoot</td>
                  <td className="px-4 py-3 text-gray-700">RM3,000 – RM6,000</td>
                  <td className="px-4 py-3 text-gray-600">Up to 8 hours</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Property / Real Estate</td>
                  <td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td>
                  <td className="px-4 py-3 text-gray-600">Per property + editing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Construction Progress</td>
                  <td className="px-4 py-3 text-gray-700">RM1,500 – RM3,000/visit</td>
                  <td className="px-4 py-3 text-gray-600">Monthly documentation</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Event Aerial Coverage</td>
                  <td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td>
                  <td className="px-4 py-3 text-gray-600">Add-on to ground coverage</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Cinematic Aerial Film</td>
                  <td className="px-4 py-3 text-gray-700">RM5,000 – RM10,000+</td>
                  <td className="px-4 py-3 text-gray-600">Multi-location, advanced editing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Property &amp; Real Estate</h3>
              <p className="text-gray-600 text-sm">Aerial views of properties, developments, and surrounding amenities. Essential for property marketing, showroom videos, and developer presentations.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Construction Progress</h3>
              <p className="text-gray-600 text-sm">Monthly or quarterly aerial documentation of construction sites. Used for investor updates, project management, and marketing pre-sales materials.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Events &amp; Festivals</h3>
              <p className="text-gray-600 text-sm">Dramatic aerial shots of outdoor events, festivals, sports events, and large gatherings. Adds cinematic production value to event recap videos.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Tourism &amp; Hospitality</h3>
              <p className="text-gray-600 text-sm">Stunning aerial footage of resorts, hotels, islands, and tourist destinations. Used for promotional videos, social media, and travel marketing.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate &amp; Industrial</h3>
              <p className="text-gray-600 text-sm">Factory overviews, facility tours, and industrial site documentation. Shows scale and capabilities that ground-level video cannot capture.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Agriculture &amp; Plantation</h3>
              <p className="text-gray-600 text-sm">Aerial surveys of agricultural land, palm oil estates, and farming operations. Used for documentation, investor reports, and marketing.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Drone Videography?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with licensed drone operators and video production companies across Malaysia. All operators are CAAM-certified with proper insurance.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Drone Videographers Near You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Kuala Lumpur</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Selangor</Link>
            <Link href="/locations/penang" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Penang</Link>
            <Link href="/locations/johor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Johor</Link>
            <Link href="/locations/sabah" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Sabah</Link>
            <Link href="/locations/sarawak" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Sarawak</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does drone videography cost in Malaysia?</h3>
              <p className="text-gray-600">Drone videography costs RM1,500–RM10,000+ in {currentYear}. A half-day aerial shoot starts at RM1,500, while cinematic multi-location projects cost RM5,000–RM10,000+.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do I need a permit for drone filming in Malaysia?</h3>
              <p className="text-gray-600">Yes. All commercial drone operations require CAAM authorization. Your hired drone operator should hold a valid Remote Pilot License (RPL) and Unmanned Aircraft Operator Certificate (UAOC). They handle the permits.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can drones fly everywhere in Malaysia?</h3>
              <p className="text-gray-600">No. Drones cannot fly within 5 nautical miles of airports, over military installations, above crowds, or higher than 400 feet without special clearance. Urban areas in KL have additional restrictions.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What quality can I expect from drone footage?</h3>
              <p className="text-gray-600">Professional drone operators use 4K or higher resolution cameras with stabilized gimbals. Modern drones like DJI Inspire 3 and Mavic 3 Pro deliver cinema-quality aerial footage.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What happens if it rains on the shoot day?</h3>
              <p className="text-gray-600">Most operators include a rain date policy. Drones cannot fly in rain, so shoots are rescheduled at no extra cost if weather conditions are unsafe. Discuss the rain policy before booking.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
