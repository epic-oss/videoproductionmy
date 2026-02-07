"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function FINASSPPLicensePage() {
  const { openModal } = useQuote();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens if I film without an SPP when one is required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Filming without a required SPP can result in fines under the FINAS Act, production shutdown by authorities, and potential legal issues — especially if foreign crew are involved without proper work authorisation. Your production company is responsible for compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Does my production company handle the SPP application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The SPP must be applied for by a registered production company, not by the client. Professional Malaysian production houses include permit management as standard practice. Always confirm this is included in your quote."
        }
      },
      {
        "@type": "Question",
        "name": "Is the SPP the same as a DBKL filming permit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The SPP is a federal-level production certificate from FINAS. DBKL (Kuala Lumpur City Hall) and MBPJ (Petaling Jaya Council) permits are local-level permissions for filming in specific public areas. You may need both for public location shoots."
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
      { "@type": "ListItem", "position": 3, "name": "FINAS SPP License", "item": "https://videoproductionmy.com/guide/finas-spp-license-explained" }
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
            <span className="text-white">FINAS SPP License</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            FINAS SPP License: Does Your Corporate Shoot Need It? ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A clear guide to the FINAS Sijil Penggambaran Produksi (SPP) — who needs it, who doesn&apos;t, and how to apply.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Direct Answer</p>
          <p className="text-gray-700">
            The FINAS SPP (Sijil Penggambaran Produksi) is a <strong>filming production certificate</strong> required for commercial film, TV, and advertising productions in Malaysia. <strong>Most standard corporate video shoots do NOT need an SPP</strong> — it is primarily required for productions involving foreign crew, large-scale commercial filming, or content intended for broadcast/cinema distribution. The SPP costs <strong>RM200–RM500</strong> and takes <strong>7–14 working days</strong> to process.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the FINAS SPP?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Sijil Penggambaran Produksi (SPP) is a production filming certificate issued by FINAS (Perbadanan Kemajuan Filem Nasional Malaysia) under the National Film Development Corporation Act. It serves as official government authorisation for commercial filming activities in Malaysia. The SPP was introduced to regulate the film and content production industry, ensure compliance with local regulations, and facilitate foreign productions filming in Malaysia. Your production company — not you as the client — is responsible for obtaining the SPP when required.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When SPP Is Required</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Foreign crew or talent</strong> — any non-Malaysian director, DP, actor, or crew member on a commercial shoot</li>
              <li>&#x2022; <strong>TV commercials (TVCs)</strong> — advertisements intended for television broadcast in Malaysia</li>
              <li>&#x2022; <strong>Feature films and short films</strong> — commercial narrative productions</li>
              <li>&#x2022; <strong>Documentaries for broadcast</strong> — content intended for TV channels or streaming platforms</li>
              <li>&#x2022; <strong>Foreign productions in Malaysia</strong> — international crews filming on Malaysian soil</li>
              <li>&#x2022; <strong>Large-scale productions</strong> — crews of 15+ in public spaces, road closures, or significant logistical impact</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When SPP Is NOT Required</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>&#x2022; <strong>Corporate videos on private premises</strong> — company profiles, interviews, training filmed at your office or factory</li>
              <li>&#x2022; <strong>Social media content</strong> — TikTok, Reels, YouTube content with small local crews</li>
              <li>&#x2022; <strong>Event coverage</strong> — filming conferences, seminars, corporate dinners at private venues</li>
              <li>&#x2022; <strong>Internal communications</strong> — town halls, training, onboarding videos not for public distribution</li>
              <li>&#x2022; <strong>Product photography and video</strong> — studio-based product shoots</li>
              <li>&#x2022; <strong>Testimonial and interview videos</strong> — small crew, controlled setting, online distribution only</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for SPP</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Register on FINAS Online Portal</h3>
                <p className="text-gray-600 text-sm">Your production company must be registered with SSM and have a FINAS account. Individual freelancers cannot apply — it must be through a registered production entity.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Prepare Required Documents</h3>
                <p className="text-gray-600 text-sm">Production synopsis, shooting schedule (dates, times, locations), full crew list with IC/passport numbers, equipment list, and location permits (if filming in public spaces).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Submit Application &amp; Pay Fee</h3>
                <p className="text-gray-600 text-sm">Submit online with all supporting documents. Pay the applicable fee (RM200–RM500 depending on production type and scale). Incomplete applications will be returned.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Receive SPP Certificate</h3>
                <p className="text-gray-600 text-sm">Processing takes 7–14 working days. The SPP certificate must be kept on set during filming and shown to authorities if requested. It is valid for the approved filming dates only.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Costs &amp; Timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Production Type</th>
                  <th className="px-4 py-3 text-left">SPP Fee</th>
                  <th className="px-4 py-3 text-left">Processing Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Local commercial (TVC)</td><td className="px-4 py-3 text-gray-700">RM200 – RM300</td><td className="px-4 py-3 text-gray-700">7–10 working days</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Foreign crew production</td><td className="px-4 py-3 text-gray-700">RM300 – RM500</td><td className="px-4 py-3 text-gray-700">10–14 working days</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Feature film / documentary</td><td className="px-4 py-3 text-gray-700">RM300 – RM500</td><td className="px-4 py-3 text-gray-700">10–14 working days</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">International co-production</td><td className="px-4 py-3 text-gray-700">RM500+</td><td className="px-4 py-3 text-gray-700">14+ working days</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need a Production Company That Handles Permits?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Professional production companies manage all FINAS, DBKL, and CAAM permits as part of their service. Get quotes and let them handle the paperwork.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What happens if I film without an SPP when one is required?</h3>
              <p className="text-gray-600">Filming without a required SPP can result in fines under the FINAS Act, production shutdown by authorities, and potential legal issues — especially if foreign crew are involved without proper work authorisation. Your production company is responsible for compliance.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Does my production company handle the SPP application?</h3>
              <p className="text-gray-600">Yes. The SPP must be applied for by a registered production company, not by the client. Professional Malaysian production houses include permit management as standard practice. Always confirm this is included in your quote.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Is the SPP the same as a DBKL filming permit?</h3>
              <p className="text-gray-600">No. The SPP is a federal-level production certificate from FINAS. DBKL (Kuala Lumpur City Hall) and MBPJ (Petaling Jaya Council) permits are local-level permissions for filming in specific public areas. You may need both for public location shoots.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guide/finas-permit-corporate-video" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">FINAS Permit Overview</Link>
            <Link href="/guide/drone-videography-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Drone Permits Guide</Link>
            <Link href="/guide/video-production-timeline" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Production Timeline</Link>
            <Link href="/guide/how-much-does-corporate-video-cost-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Cost</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
