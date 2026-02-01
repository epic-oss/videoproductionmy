"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

const topCompanies = [
  {
    rank: 1,
    name: "Vix Content",
    rating: 5.0,
    reviews: 120,
    specialties: ["Corporate Video", "Social Media Content", "Event Coverage"],
    priceRange: "RM5,000 – RM20,000",
    bestFor: "Corporate videos and social media content",
    description:
      "One of KL's top-rated production houses with a perfect 5-star rating. Known for high-quality corporate storytelling and social media campaigns for brands across Malaysia.",
  },
  {
    rank: 2,
    name: "Lemon Sky Studios",
    rating: 4.9,
    reviews: 95,
    specialties: ["Animation", "TVC/Commercial", "Corporate Video"],
    priceRange: "RM10,000 – RM50,000+",
    bestFor: "Animation and high-end commercials",
    description:
      "Award-winning studio known for CGI and animation work. They've worked with international brands and bring Hollywood-level production values to Malaysian projects.",
  },
  {
    rank: 3,
    name: "Twin Effect Studio",
    rating: 4.9,
    reviews: 85,
    specialties: ["Corporate Video", "Product Video", "Event Coverage"],
    priceRange: "RM4,000 – RM15,000",
    bestFor: "Mid-range corporate and product videos",
    description:
      "Versatile KL-based studio delivering consistent quality across corporate profiles, product demos, and event documentation. Strong B2B portfolio.",
  },
  {
    rank: 4,
    name: "Kaizen Media Productions",
    rating: 4.8,
    reviews: 110,
    specialties: ["Event Coverage", "Corporate Video", "Social Media Content"],
    priceRange: "RM3,000 – RM12,000",
    bestFor: "Event coverage and corporate documentation",
    description:
      "Reliable production house specialising in live event coverage and corporate videos. Known for quick turnaround and professional crew management at large-scale events.",
  },
  {
    rank: 5,
    name: "Creativestate",
    rating: 4.8,
    reviews: 72,
    specialties: ["TVC/Commercial", "Corporate Video", "Animation"],
    priceRange: "RM8,000 – RM40,000",
    bestFor: "TV commercials and brand campaigns",
    description:
      "Full-service creative agency producing TVCs, brand films, and digital campaigns. Their client list includes major Malaysian and regional brands.",
  },
  {
    rank: 6,
    name: "Reelity Productions",
    rating: 4.8,
    reviews: 64,
    specialties: ["Corporate Video", "Training Video", "Testimonial Video"],
    priceRange: "RM3,500 – RM10,000",
    bestFor: "Corporate training and internal communications",
    description:
      "Focused on B2B content — training videos, employee communications, and client testimonials. Particularly strong with financial services and tech companies.",
  },
  {
    rank: 7,
    name: "Brolens Production",
    rating: 4.7,
    reviews: 88,
    specialties: ["Event Coverage", "Social Media Content", "Corporate Video"],
    priceRange: "RM2,500 – RM8,000",
    bestFor: "Budget-friendly event and social content",
    description:
      "Affordable option for small to medium businesses. Strong in event highlights and social media-first video content with fast delivery.",
  },
  {
    rank: 8,
    name: "Mano Creative",
    rating: 4.7,
    reviews: 56,
    specialties: ["Product Video", "TVC/Commercial", "Corporate Video"],
    priceRange: "RM6,000 – RM25,000",
    bestFor: "Product launches and commercial campaigns",
    description:
      "Creative-led studio with a strong eye for aesthetics. Their product videos and brand commercials consistently stand out for visual storytelling.",
  },
];

export default function TopVideoProductionCompaniesKL() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations/kuala-lumpur" className="hover:text-white">Kuala Lumpur</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Top Companies</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Top Video Production Companies in Kuala Lumpur ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            We reviewed KL&apos;s leading video production companies based on client ratings, portfolio quality, and production capabilities.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            The top video production companies in Kuala Lumpur for {currentYear} include Vix Content (best for corporate videos), Lemon Sky Studios (best for animation), Twin Effect Studio (best mid-range), and Kaizen Media (best for events). All have 4.7+ star ratings and proven portfolios.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Ranked These Companies</h2>
        <p className="text-gray-700 mb-6">
          Our ranking is based on four criteria: Google review ratings and volume, portfolio quality and diversity, specialisation depth, and pricing transparency. We focused on companies headquartered in Kuala Lumpur with a demonstrated track record of serving business clients.
        </p>

        {/* Company Cards */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Top 8 KL Video Production Companies</h2>
        <div className="space-y-6 mb-10">
          {topCompanies.map((company) => (
            <div
              key={company.rank}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    #{company.rank}
                  </span>
                  <h3 className="text-lg font-bold">{company.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{company.rating}</span>
                  <span className="text-gray-400">({company.reviews} reviews)</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{company.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.specialties.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-500">Price Range</p>
                    <p className="font-semibold text-gray-900">{company.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Best For</p>
                    <p className="font-semibold text-gray-900">{company.bestFor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Company</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Rating</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Price</th>
              </tr>
            </thead>
            <tbody>
              {topCompanies.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">{c.name}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{c.bestFor}</td>
                  <td className="border border-gray-200 px-4 py-2">{c.rating}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{c.priceRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Get Quotes from KL&apos;s Best</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Tell us about your project and receive quotes from top Kuala Lumpur video production companies.
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
            <Link href="/locations/kuala-lumpur" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">All KL Video Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Browse the complete directory</span>
            </Link>
            <Link href="/guide/video-production-pricing-malaysia" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Pricing Guide {currentYear}</span>
              <span className="block text-sm text-gray-500 mt-1">How much video production costs</span>
            </Link>
            <Link href="/guide/how-to-choose-video-production-company" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">How to Choose a Company</span>
              <span className="block text-sm text-gray-500 mt-1">Step-by-step evaluation guide</span>
            </Link>
            <Link href="/companies" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Browse All Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Malaysia-wide directory</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
