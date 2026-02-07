"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function VideoCrewCateringPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who pays for crew meals — the client or the production company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the agreement. Some production companies include catering in their all-in quote. Others list it as a separate line item billed to the client. Always clarify this upfront — it's an industry norm to provide crew meals regardless of who pays."
        }
      },
      {
        "@type": "Question",
        "name": "Is crew catering really necessary for a small 3-person shoot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Even for small crews, providing lunch and drinks is standard practice and shows professionalism. A RM50–RM100 investment in meals prevents fatigue, keeps the shoot on schedule, and maintains a positive working relationship."
        }
      },
      {
        "@type": "Question",
        "name": "What percentage of the total budget goes to catering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 5–8% of the total production budget. For a RM10,000 corporate video, expect RM500–RM800 for catering. For a RM50,000 TVC with a large crew over multiple days, catering can reach RM3,000–RM5,000."
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
      { "@type": "ListItem", "position": 3, "name": "Crew Catering Rates KL", "item": "https://videoproductionmy.com/guide/video-crew-catering-rates-kl" }
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
            <span className="text-white">Crew Catering Rates KL</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Film Crew Catering Rates in Kuala Lumpur ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            How much to budget for crew meals on video production shoots in KL — average rates, what&apos;s standard, and tips for keeping your team fuelled.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            Film crew catering in Kuala Lumpur costs <strong>RM15–RM35 per person per meal</strong> in {currentYear}. A full-day shoot (breakfast, lunch, tea break) runs <strong>RM50–RM80 per person</strong>. For a 10-person crew on a full-day shoot, budget <strong>RM500–RM800 for meals</strong>. Catering is typically the client&apos;s responsibility or included in the production company&apos;s quote as a line item.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Catering Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Meal</th>
                  <th className="px-4 py-3 text-left">Rate per Person</th>
                  <th className="px-4 py-3 text-left">What&apos;s Typically Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Breakfast</td><td className="px-4 py-3 text-gray-700">RM8 – RM15</td><td className="px-4 py-3 text-gray-700">Nasi lemak, roti canai, sandwiches, coffee/tea</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Lunch (packed / tapau)</td><td className="px-4 py-3 text-gray-700">RM12 – RM20</td><td className="px-4 py-3 text-gray-700">Rice box with protein, vegetables, drink</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Lunch (catered buffet)</td><td className="px-4 py-3 text-gray-700">RM20 – RM35</td><td className="px-4 py-3 text-gray-700">2–3 dishes, rice, soup, dessert, drinks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Tea break / snacks</td><td className="px-4 py-3 text-gray-700">RM5 – RM12</td><td className="px-4 py-3 text-gray-700">Kuih, sandwiches, coffee, water, 100PLUS</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Dinner (if overtime)</td><td className="px-4 py-3 text-gray-700">RM15 – RM25</td><td className="px-4 py-3 text-gray-700">Similar to lunch, packed or delivered</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Full-Day Budget Calculator</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Typical Full-Day Shoot (8–10 hours)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 text-left text-gray-700">Crew Size</th>
                    <th className="py-2 text-right text-gray-700">Budget (packed meals)</th>
                    <th className="py-2 text-right text-gray-700">Budget (catered)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="py-2 text-gray-700">Small crew (3–5 people)</td><td className="py-2 text-gray-700 text-right">RM150 – RM300</td><td className="py-2 text-gray-700 text-right">RM250 – RM400</td></tr>
                  <tr><td className="py-2 text-gray-700">Medium crew (6–10 people)</td><td className="py-2 text-gray-700 text-right">RM300 – RM600</td><td className="py-2 text-gray-700 text-right">RM500 – RM800</td></tr>
                  <tr><td className="py-2 text-gray-700">Large crew (15–25 people)</td><td className="py-2 text-gray-700 text-right">RM750 – RM1,500</td><td className="py-2 text-gray-700 text-right">RM1,200 – RM2,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">*Includes breakfast, lunch, and afternoon tea break. Add 30% for dinner if shooting extends past 7pm.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Standard on Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-3">Always Provided (Industry Standard)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Drinking water (unlimited, essential in KL heat)</li>
                <li>&#x2022; Lunch for all crew (client-provided or production budget)</li>
                <li>&#x2022; Coffee and tea throughout the day</li>
                <li>&#x2022; Halal options (default in Malaysia)</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-3">Nice to Have (Keeps Crew Happy)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&#x2022; Breakfast if early call time (before 8am)</li>
                <li>&#x2022; Afternoon snacks and 100PLUS / isotonic drinks</li>
                <li>&#x2022; Variety in meals (not the same nasi campur every shoot)</li>
                <li>&#x2022; Vegetarian and dietary options when needed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Catering Options for Video Shoots</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Option 1: Packed Meals (Tapau)</h3>
              <p className="text-gray-600 text-sm mb-2">Most common for small crews (3–8 people). Order from nearby restaurants or use GrabFood/FoodPanda for delivery. Budget RM12–RM20 per person per meal.</p>
              <p className="text-gray-500 text-xs">Best for: Small crews, office shoots, quick lunches.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Option 2: Catered Buffet</h3>
              <p className="text-gray-600 text-sm mb-2">Professional caterers deliver a multi-dish buffet setup. Better for larger crews (10+) where variety and dietary needs matter. Budget RM20–RM35 per person per meal.</p>
              <p className="text-gray-500 text-xs">Best for: Medium/large crews, multi-day shoots, client-present shoots.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Option 3: Venue-Provided</h3>
              <p className="text-gray-600 text-sm mb-2">If filming at a hotel, convention centre, or restaurant, the venue may offer crew meals as part of the location agreement. Negotiate during venue booking. Budget RM25–RM50 per person.</p>
              <p className="text-gray-500 text-xs">Best for: Hotel shoots, restaurant videos, corporate events.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Production Catering</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Always confirm headcount</strong> the day before — include talent, client representatives, and any extras</li>
              <li>&#x2022; <strong>Ask about dietary requirements</strong> — halal is default, but check for vegetarian, allergies, or other needs</li>
              <li>&#x2022; <strong>Don&apos;t skip meals to save money</strong> — hungry crews work slower and make more mistakes</li>
              <li>&#x2022; <strong>Keep hydration supplies constant</strong> — KL&apos;s heat and humidity mean crews dehydrate fast, especially on outdoor shoots</li>
              <li>&#x2022; <strong>Budget catering as a line item</strong> — don&apos;t bury it in "miscellaneous"; it&apos;s a real cost that averages 5–8% of total production budget</li>
              <li>&#x2022; <strong>Time meals around the schedule</strong> — break for lunch at the planned time; skipping it to "push through" usually backfires</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Planning a Video Shoot?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get all-inclusive quotes from Malaysian production companies — many include crew catering in their production packages.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Who pays for crew meals — the client or the production company?</h3>
              <p className="text-gray-600">It depends on the agreement. Some production companies include catering in their all-in quote. Others list it as a separate line item billed to the client. Always clarify this upfront — it&apos;s an industry norm to provide crew meals regardless of who pays.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is crew catering really necessary for a small 3-person shoot?</h3>
              <p className="text-gray-600">Yes. Even for small crews, providing lunch and drinks is standard practice and shows professionalism. A RM50–RM100 investment in meals prevents fatigue, keeps the shoot on schedule, and maintains a positive working relationship.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What percentage of the total budget goes to catering?</h3>
              <p className="text-gray-600">Typically 5–8% of the total production budget. For a RM10,000 corporate video, expect RM500–RM800 for catering. For a RM50,000 TVC with a large crew over multiple days, catering can reach RM3,000–RM5,000.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/how-much-does-corporate-video-cost-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Cost</Link>
            <Link href="/guide/videographer-day-rate-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Videographer Day Rates</Link>
            <Link href="/guide/video-production-timeline" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production Timeline</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
