"use client";

import Link from "next/link";
import { Company } from "@/lib/data";
import { useQuote } from "./QuoteContext";
import CompanyLogo from "./CompanyLogo";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const { openModal } = useQuote();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <CompanyLogo website={company.website} name={company.name} size="card" />

      <div className="p-5">
        {/* Company Name & Rating */}
        <div className="flex justify-between items-start mb-2">
          <Link href={`/companies/${company.slug}`}>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {company.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 text-sm">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium text-gray-900">{company.rating}</span>
            <span className="text-gray-500">({company.reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
          <svg
            className="w-4 h-4"
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

        {/* Services */}
        <div className="flex flex-wrap gap-1 mb-4">
          {company.services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {service}
            </span>
          ))}
          {company.services.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              +{company.services.length - 3} more
            </span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {company.shortDescription}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/companies/${company.slug}`}
            className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            View Profile
          </Link>
          <button
            onClick={() => openModal(company.name)}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
