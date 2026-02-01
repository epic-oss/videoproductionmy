"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getCompanyBySlug, companies } from "@/lib/data";
import { useQuote } from "../../components/QuoteContext";
import CompanyLogo from "../../components/CompanyLogo";
import { notFound } from "next/navigation";

export default function CompanyProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const company = getCompanyBySlug(slug);
  const { openModal } = useQuote();

  if (!company) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link
                  href="/companies"
                  className="text-gray-400 hover:text-white"
                >
                  Companies
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-300">{company.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <CompanyLogo website={company.website} name={company.name} size="lg" />

              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{company.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{company.rating}</span>
                    <span className="text-gray-400">
                      ({company.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{company.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => openModal(company.name)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Request Quote from {company.name}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About {company.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Services */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Services Offered
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {company.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Gallery */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Portfolio
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {company.gallery.map((_, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Portfolio images coming soon
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900">{company.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900">{company.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900">{company.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="text-gray-900">{company.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-blue-600 rounded-lg shadow-sm p-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  Interested in working with {company.name}?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get a free quote for your video production project today.
                </p>
                <button
                  onClick={() => openModal(company.name)}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Companies */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Video Production Companies in {company.location}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companies
              .filter(
                (c) =>
                  c.locationSlug === company.locationSlug && c.id !== company.id
              )
              .slice(0, 3)
              .map((relatedCompany) => (
                <Link
                  key={relatedCompany.id}
                  href={`/companies/${relatedCompany.slug}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CompanyLogo website={relatedCompany.website} name={relatedCompany.name} size="sm" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {relatedCompany.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{relatedCompany.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {companies.filter(
            (c) =>
              c.locationSlug === company.locationSlug && c.id !== company.id
          ).length === 0 && (
            <p className="text-gray-500 text-center py-8">
              No other companies found in this location.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
