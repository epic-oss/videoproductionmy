"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function ProductVideoEcommerceGuide() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/product-video-ecommerce" className="text-white">Product Video Guide</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Product Video for Shopee &amp; Lazada Sellers ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            How product videos can increase your e-commerce conversion rates by up to 80%. A complete guide for Malaysian online sellers.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Product videos for Shopee and Lazada cost between <strong>RM500 and RM5,000</strong> per product in {currentYear}. Simple rotating product shots start at RM500, while lifestyle product videos with models and styling range from RM2,000–RM5,000. Listings with video get <strong>up to 80% higher conversion rates</strong>.
          </p>
        </div>

        {/* Why Product Video */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Product Videos Increase Sales</h2>
          <p className="text-gray-700 mb-4">
            In {currentYear}, Malaysian e-commerce is more competitive than ever. Shopee and Lazada both prioritize listings with video content in their search algorithms. Here&apos;s why product video matters:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">+</span>
              <span><strong>80% higher conversion rate</strong> — Shoppers are far more likely to buy after watching a product demo video</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">+</span>
              <span><strong>Lower return rates</strong> — Customers know exactly what they&apos;re getting, reducing returns by up to 25%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">+</span>
              <span><strong>Better search ranking</strong> — Both Shopee and Lazada boost listings with video content in search results</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">+</span>
              <span><strong>Shopee Live &amp; LazLive ready</strong> — Product video content can be repurposed for live selling sessions</span>
            </li>
          </ul>
        </section>

        {/* Pricing Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Video Pricing in Malaysia ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Video Type</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Simple Product Spin</td>
                  <td className="px-4 py-3 text-gray-700">RM500 – RM1,500</td>
                  <td className="px-4 py-3 text-gray-600">Small items, gadgets, accessories</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Product Demo Video</td>
                  <td className="px-4 py-3 text-gray-700">RM1,000 – RM3,000</td>
                  <td className="px-4 py-3 text-gray-600">Electronics, appliances, tools</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">Lifestyle Product Video</td>
                  <td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td>
                  <td className="px-4 py-3 text-gray-600">Fashion, beauty, F&amp;B products</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Bulk Product Videos (10+)</td>
                  <td className="px-4 py-3 text-gray-700">RM300 – RM800/product</td>
                  <td className="px-4 py-3 text-gray-600">Catalogue shoots, multiple SKUs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">UGC-Style Review Video</td>
                  <td className="px-4 py-3 text-gray-700">RM800 – RM2,000</td>
                  <td className="px-4 py-3 text-gray-600">Social proof, testimonial-style content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Types of Product Videos */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Product Videos That Sell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">360° Product Spin</h3>
              <p className="text-gray-600 text-sm">Rotating view of your product from all angles. Perfect for Shopee and Lazada listing headers. 15–30 seconds.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Unboxing Video</h3>
              <p className="text-gray-600 text-sm">Shows packaging, first impressions, and product details. Builds trust and excitement. 30–60 seconds.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How-To / Demo</h3>
              <p className="text-gray-600 text-sm">Demonstrates product usage and features. Reduces buyer uncertainty and returns. 30–90 seconds.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Lifestyle / In-Use</h3>
              <p className="text-gray-600 text-sm">Shows product in real-life scenarios with models. Premium feel for fashion, beauty, and home products. 15–60 seconds.</p>
            </div>
          </div>
        </section>

        {/* Tips for sellers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for E-Commerce Sellers</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>Keep it short:</strong> Shopee recommends 15–60 second videos. Lazada allows up to 60 seconds for listing videos.</p>
            <p><strong>Mobile-first:</strong> 90%+ of Malaysian shoppers browse on mobile. Shoot in vertical (9:16) or square (1:1) format.</p>
            <p><strong>Show the product quickly:</strong> The first 3 seconds must grab attention. Don&apos;t waste time on long intros.</p>
            <p><strong>Add text overlays:</strong> Many users browse without sound. Include key selling points as on-screen text.</p>
            <p><strong>Batch your shoots:</strong> If you have multiple products, shoot them all in one session to save on production costs.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Product Videos for Your Online Store?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with Malaysian video production companies that specialize in e-commerce product videos for Shopee, Lazada, and TikTok Shop.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Video Production Companies Near You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Kuala Lumpur</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Selangor</Link>
            <Link href="/locations/penang" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Penang</Link>
            <Link href="/locations/johor" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Johor</Link>
            <Link href="/locations/melaka" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Melaka</Link>
            <Link href="/locations/sabah" className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Sabah</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a product video cost for Shopee?</h3>
              <p className="text-gray-600">A basic product video for Shopee costs RM500–RM1,500 in {currentYear}. Simple rotating product shots are the most affordable, while lifestyle videos with models cost RM2,000–RM5,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What video format does Shopee and Lazada accept?</h3>
              <p className="text-gray-600">Shopee accepts MP4 videos up to 60 seconds, minimum 480p resolution. Lazada accepts MP4 up to 60 seconds with a maximum file size of 100MB. Both platforms recommend vertical or square format for mobile viewers.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do product videos really increase sales?</h3>
              <p className="text-gray-600">Yes. Listings with product videos see up to 80% higher conversion rates on average. Videos also reduce return rates because customers have a clearer understanding of the product before purchasing.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use the same video for Shopee, Lazada, and TikTok Shop?</h3>
              <p className="text-gray-600">Yes, but optimize for each platform. Shopee and Lazada prefer clean product demos (square or vertical), while TikTok Shop performs better with UGC-style, energetic content in 9:16 vertical format.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How many products can be filmed in one session?</h3>
              <p className="text-gray-600">Most video production companies can shoot 5–15 simple product videos in a single session. Bulk pricing typically offers 30–50% savings compared to individual product video shoots.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
