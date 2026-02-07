"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function FINASPermitPage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens if I film without a required permit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Filming without required permits can result in fines, equipment confiscation, and forced shutdown of your shoot. For public locations, local authorities (DBKL, MBPJ) actively enforce permit requirements. Your production company should handle all permits as part of their service."
        }
      },
      {
        "@type": "Question",
        "name": "Does my production company handle permits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Professional production companies include permit management as part of their service. They know which permits are needed for your specific shoot and handle all applications. Permit costs may be included in the quote or billed separately."
        }
      },
      {
        "@type": "Question",
        "name": "Can foreigners film in Malaysia without FINAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Foreign production crews filming commercially in Malaysia require FINAS approval. This includes foreign directors, camera operators, and on-screen talent. Tourist/personal filming is exempt, but commercial use always requires proper documentation."
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
      { "@type": "ListItem", "position": 3, "name": "FINAS Permit", "item": "https://videoproductionmy.com/guide/finas-permit-corporate-video" }
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
            <span className="text-white">FINAS Permit</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Do You Need a FINAS Permit for Corporate Video in Malaysia? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A clear guide to when FINAS filming permits are required, when they&apos;re not, and how to apply.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            <strong>Most corporate videos do NOT require a FINAS permit.</strong> FINAS (Perbadanan Kemajuan Filem Nasional Malaysia) permits are primarily required for commercial films, TV productions, and shoots involving foreign crew or talent. Small-scale corporate video shoots with local crews typically don&apos;t need FINAS approval. However, filming in public spaces may require separate local council permits.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When You DO Need a FINAS Permit</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Foreign crew or talent</strong> — any non-Malaysian personnel require a FINAS-endorsed work permit</li>
              <li>&#x2022; <strong>Large-scale productions</strong> — crews of 15+ people filming in public areas</li>
              <li>&#x2022; <strong>TV commercials for broadcast</strong> — TVCs intended for Malaysian television</li>
              <li>&#x2022; <strong>Feature films and documentaries</strong> — commercial film productions</li>
              <li>&#x2022; <strong>Foreign productions filming in Malaysia</strong> — international crews require FINAS approval</li>
              <li>&#x2022; <strong>Drone filming in restricted areas</strong> — requires both CAAM and potentially FINAS clearance</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When You DON&apos;T Need a FINAS Permit</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Corporate videos shot at your office/factory</strong> — private premises, small local crew</li>
              <li>&#x2022; <strong>Interview and testimonial videos</strong> — small crew, controlled environment</li>
              <li>&#x2022; <strong>Social media content</strong> — created by small teams for online platforms</li>
              <li>&#x2022; <strong>Event coverage at private venues</strong> — hotels, convention centres (venue permit only)</li>
              <li>&#x2022; <strong>Product photography and video</strong> — studio or office-based shoots</li>
              <li>&#x2022; <strong>Internal training videos</strong> — not for public broadcast</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Permits You May Need</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Permit Type</th>
                  <th className="px-4 py-3 text-left">When Required</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                  <th className="px-4 py-3 text-left">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">FINAS Production Licence</td><td className="px-4 py-3 text-gray-700">Foreign crew, large productions</td><td className="px-4 py-3 text-gray-700">RM200 – RM1,000</td><td className="px-4 py-3 text-gray-700">7–14 days</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Local Council (DBKL/MBPJ)</td><td className="px-4 py-3 text-gray-700">Filming on public roads, parks, streets</td><td className="px-4 py-3 text-gray-700">RM100 – RM500</td><td className="px-4 py-3 text-gray-700">3–10 days</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">CAAM Drone Permit</td><td className="px-4 py-3 text-gray-700">Commercial drone flying</td><td className="px-4 py-3 text-gray-700">RM500 – RM1,500</td><td className="px-4 py-3 text-gray-700">5–14 days</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Venue Permit</td><td className="px-4 py-3 text-gray-700">Hotels, malls, convention centres</td><td className="px-4 py-3 text-gray-700">Varies (free – RM2,000)</td><td className="px-4 py-3 text-gray-700">3–7 days</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Police Permit</td><td className="px-4 py-3 text-gray-700">Road closures, large outdoor events</td><td className="px-4 py-3 text-gray-700">RM100 – RM300</td><td className="px-4 py-3 text-gray-700">7–14 days</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FINAS Application Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Register on FINAS Portal</h3>
                <p className="text-gray-600 text-sm">Create an account on the FINAS online system. Your production company must be registered with SSM (Companies Commission of Malaysia).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Submit Application</h3>
                <p className="text-gray-600 text-sm">Provide project details: synopsis, shooting schedule, locations, crew list (with IC/passport numbers for foreign crew), and equipment list.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Pay Fee &amp; Receive Approval</h3>
                <p className="text-gray-600 text-sm">Pay the applicable fee (RM200–RM1,000 depending on production type). Processing takes 7–14 working days. Approval letter must be carried on set.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Help With Your Video Project?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Malaysian production companies handle all permit requirements as part of their service. Get quotes and let them manage the paperwork.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What happens if I film without a required permit?</h3>
              <p className="text-gray-600">Filming without required permits can result in fines, equipment confiscation, and forced shutdown of your shoot. For public locations, local authorities (DBKL, MBPJ) actively enforce permit requirements. Your production company should handle all permits as part of their service.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Does my production company handle permits?</h3>
              <p className="text-gray-600">Yes. Professional production companies include permit management as part of their service. They know which permits are needed for your specific shoot and handle all applications. Permit costs may be included in the quote or billed separately.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can foreigners film in Malaysia without FINAS?</h3>
              <p className="text-gray-600">No. Foreign production crews filming commercially in Malaysia require FINAS approval. This includes foreign directors, camera operators, and on-screen talent. Tourist/personal filming is exempt, but commercial use always requires proper documentation.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/drone-videography-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Permits Guide</Link>
            <Link href="/guide/video-production-timeline" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production Timeline</Link>
            <Link href="/guide/how-much-does-corporate-video-cost-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Cost</Link>
            <Link href="/guide/how-to-choose-video-production-company" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">How to Choose</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
