"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function EventVideoCoverageMalaysia() {
  const { openModal } = useQuote();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://videoproductionmy.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://videoproductionmy.com/guide/video-production-pricing-malaysia" },
      { "@type": "ListItem", "position": 3, "name": "Event Video Coverage in Malaysia", "item": "https://videoproductionmy.com/guide/event-video-coverage-malaysia" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/event-video-coverage-malaysia" className="text-white">Event Video Coverage</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Event Video Coverage in Malaysia: Complete Guide ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Everything you need to know about hiring a video crew for corporate events, conferences, product launches, and gala dinners in Malaysia.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Event video coverage in Malaysia costs <strong>RM2,500 to RM15,000</strong> depending on event duration, crew size, and deliverables. A basic half-day shoot with one videographer starts around RM2,500, while full-day multi-camera coverage with same-day highlights can reach RM15,000 or more.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Event Video Coverage</h2>
        <p className="text-gray-700 mb-4">
          Not all events require the same level of coverage. Understanding the different approaches helps you brief your production company accurately and manage costs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Highlight Reel", desc: "A 2–5 minute edited video capturing the best moments. Most common for corporate events, conferences, and launches. Delivered within 3–7 days." },
            { title: "Same-Day Edit (SDE)", desc: "A short highlight video produced and screened at the event itself. Requires an on-site editor and fast workflow. Premium service costing 40–60% more." },
            { title: "Full Documentation", desc: "Complete recording of presentations, panels, and proceedings. Ideal for conferences and training events where content needs to be archived or distributed." },
            { title: "Live Streaming", desc: "Broadcasting the event in real-time via YouTube, Facebook, or a private platform. Requires additional equipment and a dedicated streaming operator." },
            { title: "Social Media Clips", desc: "Short vertical videos optimised for Instagram Reels, TikTok, or LinkedIn. Quick turnaround, usually delivered within 24–48 hours." },
            { title: "Testimonial Capture", desc: "Set up a mini interview station at the event to capture attendee testimonials. Effective for post-event marketing content." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Video Coverage Pricing</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Coverage Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Price Range</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">What&apos;s Included</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Half-Day (1 camera)", "RM2,500 – RM4,000", "4-hour shoot, highlight reel"],
                ["Full-Day (1 camera)", "RM4,000 – RM7,000", "8-hour shoot, highlight reel, raw footage"],
                ["Full-Day (2 cameras)", "RM6,000 – RM10,000", "Multi-angle coverage, 2 videographers"],
                ["Full-Day + SDE", "RM8,000 – RM15,000", "Full coverage + same-day highlight screening"],
                ["Full-Day + Live Stream", "RM7,000 – RM12,000", "Coverage + live broadcast setup"],
                ["Multi-Day Conference", "RM10,000 – RM25,000+", "Full documentation over 2–3 days"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">{row[0]}</td>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{row[1]}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning Your Event Video Coverage</h2>
        <p className="text-gray-700 mb-6">
          Proper planning ensures your video crew captures everything important and the final product meets expectations.
        </p>

        <ol className="space-y-4 mb-8">
          {[
            { title: "Brief your videographer early", desc: "Share the event rundown at least 2 weeks before. Highlight key moments — speeches, performances, reveals — so the crew knows when to be ready." },
            { title: "Provide a shot list", desc: "List must-capture moments: VIP arrivals, sponsor signage, stage presentations, crowd reactions, and specific people to feature." },
            { title: "Designate a coordinator", desc: "Assign someone from your team to liaise with the video crew on-site. This person handles introductions, access, and real-time adjustments." },
            { title: "Consider lighting and audio", desc: "Event venues vary widely. If the venue has dim lighting or loud ambient noise, discuss with your production company in advance. They may need additional equipment." },
            { title: "Clarify deliverables upfront", desc: "Specify exactly what you need: highlight reel length, number of social media cuts, raw footage, delivery timeline, and file formats." },
            { title: "Book early for peak seasons", desc: "November to January is peak event season in Malaysia. Production companies get booked out quickly. Secure your crew at least 4–6 weeks ahead." },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <strong className="text-gray-900">{item.title}</strong>
                <span className="text-gray-600"> — {item.desc}</span>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Event Types We Cover</h2>
        <p className="text-gray-700 mb-4">
          Malaysian businesses commonly need video coverage for these event types:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            "Corporate Conferences",
            "Product Launches",
            "Gala Dinners",
            "Award Ceremonies",
            "Trade Shows / Exhibitions",
            "Team Building Events",
            "Annual General Meetings",
            "Seminars & Workshops",
            "CSR Events",
            "Grand Openings",
            "Press Conferences",
            "Company Anniversaries",
          ].map((event, i) => (
            <div key={i} className="bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700 font-medium">
              {event}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Look for in an Event Videographer</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Event Experience", desc: "Events are unpredictable. You need a crew experienced in capturing unrehearsed moments under time pressure." },
            { title: "Equipment Backup", desc: "Professional crews carry backup cameras, batteries, and audio gear. One equipment failure shouldn't ruin your coverage." },
            { title: "Quick Turnaround", desc: "If you need social media clips within 24 hours or a same-day edit, confirm the crew has capacity for fast delivery." },
            { title: "Discreet Presence", desc: "The best event videographers capture great footage without disrupting proceedings or blocking guest sightlines." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Event Video Coverage?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Get quotes from experienced event videographers across Malaysia. Tell us your event details and we&apos;ll match you with the right crew.
          </p>
          <button
            onClick={() => openModal()}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>

        {/* Internal Links */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Video Production Pricing {currentYear}</span>
              <span className="block text-sm text-gray-500 mt-1">Detailed cost breakdown</span>
            </Link>
            <Link href="/guide/corporate-video-production-guide" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Corporate Video Guide</span>
              <span className="block text-sm text-gray-500 mt-1">Full production process explained</span>
            </Link>
            <Link href="/companies" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Browse All Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Find event videographers near you</span>
            </Link>
            <Link href="/locations/kuala-lumpur" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">KL Video Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Kuala Lumpur production companies</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
