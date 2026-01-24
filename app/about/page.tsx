"use client";

import { useQuote } from "../components/QuoteContext";

export default function AboutPage() {
  const { openModal } = useQuote();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted platform for finding video production companies in
            Malaysia
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6">
              VideoProductionMY is Malaysia&apos;s premier directory for video
              production services. We connect businesses of all sizes with
              trusted, verified video production companies across the country.
              Whether you need a corporate video, event coverage, product
              showcase, or a full-scale TV commercial, we help you find the
              right production partner.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to simplify the process of finding quality video
              production services in Malaysia. We understand that choosing the
              right video production company can be overwhelming, with countless
              options and varying quality levels. That&apos;s why we&apos;ve
              created a platform that:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Connects you with verified, professional video production companies</li>
              <li>Provides free, no-obligation quotes from multiple providers</li>
              <li>Saves you time by matching you with companies suited to your needs</li>
              <li>Ensures you get competitive pricing through our network</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Verified Network
                </h3>
                <p className="text-gray-600">
                  All video production companies in our network are thoroughly
                  vetted for quality, reliability, and professionalism.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  Our network spans across Malaysia, ensuring you find video
                  production companies that understand your local market.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quick Turnaround
                </h3>
                <p className="text-gray-600">
                  Get responses from qualified video production companies within
                  24 hours of submitting your inquiry.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Free Service
                </h3>
                <p className="text-gray-600">
                  Our quote matching service is completely free. No hidden fees,
                  no obligations - just quality connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get connected with Malaysia&apos;s best video production companies
            today.
          </p>
          <button
            onClick={() => openModal()}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
