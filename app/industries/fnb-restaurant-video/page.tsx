"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function FnBVideoPage() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">F&amp;B Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            F&amp;B &amp; Restaurant Video Production Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Mouth-watering video content for restaurants, cafes, food brands, and F&amp;B businesses in Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            F&amp;B video production in Malaysia costs between <strong>RM2,000 and RM10,000</strong> per project in {currentYear}. From menu videos and social media reels to full restaurant brand films, video helps F&amp;B businesses attract diners and build a strong online presence.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why F&amp;B Businesses Need Video</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In {currentYear}, Malaysian diners discover restaurants primarily through social media — Instagram Reels, TikTok, and Google searches. A well-produced food video can make dishes look irresistible, showcase a restaurant&apos;s ambiance, and convey the dining experience in ways that photos alone cannot. For F&amp;B chains and franchise operators, video standardizes brand messaging across outlets. Cafes and restaurants in competitive areas like Bukit Bintang, Bangsar, Mont Kiara, and Damansara need video content that stops the scroll and drives foot traffic. Food delivery platforms also increasingly favour listings with video content, making it a practical investment for restaurants of all sizes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of F&amp;B Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Menu / Food Video</h3>
              <p className="text-gray-600 text-sm">Close-up shots of signature dishes being prepared and plated. Makes food look irresistible for social media, websites, and delivery apps.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Restaurant Ambiance Video</h3>
              <p className="text-gray-600 text-sm">Captures the dining experience — decor, atmosphere, seating, and vibe. Helps diners know what to expect before visiting.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Social Media Reels</h3>
              <p className="text-gray-600 text-sm">Short, engaging clips optimized for Instagram, TikTok, and Facebook. Trend-driven content that drives discovery and shares.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Brand Story / About Us</h3>
              <p className="text-gray-600 text-sm">The story behind the restaurant — founders, philosophy, sourcing, and culinary approach. Builds emotional connection with customers.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Behind-the-Kitchen</h3>
              <p className="text-gray-600 text-sm">Chef at work, kitchen action, food prep process. Builds trust in food quality and hygiene standards.</p>
            </div>
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
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Menu / Food Video (5-10 dishes)</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Restaurant Brand Film</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM10,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Social Media Content Pack</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM6,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Monthly Content Retainer</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000/month</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need F&amp;B Video Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from video companies that specialize in food and restaurant content across Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a restaurant video cost?</h3>
              <p className="text-gray-600">A food menu video covering 5–10 dishes costs RM2,000–RM5,000 in {currentYear}. A full restaurant brand film with ambiance, kitchen, and story is RM5,000–RM10,000.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">When is the best time to film at a restaurant?</h3>
              <p className="text-gray-600">Most shoots happen before opening hours (morning) for controlled lighting and no customers. Some ambiance shots are filmed during soft hours with staged diners for a natural look.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can I get ongoing monthly content?</h3>
              <p className="text-gray-600">Yes. Many companies offer monthly retainers (RM3,000–RM8,000/month) for regular social media content, covering new menu items, seasonal specials, and event highlights.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/guide/product-video-ecommerce" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Product Video Guide</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
