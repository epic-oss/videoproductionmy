"use client";

import Link from "next/link";
import { Company } from "@/lib/data";
import { useQuote } from "./QuoteContext";
import CompanyLogo from "./CompanyLogo";

interface CompanyCardProps {
  company: Company;
}

const tagColors = [
  "bg-teal-50 text-teal-700",
  "bg-blue-50 text-blue-700",
  "bg-purple-50 text-purple-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-emerald-50 text-emerald-700",
];

export default function CompanyCard({ company }: CompanyCardProps) {
  const { openModal } = useQuote();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Top: Logo + Name + Rating */}
      <div className="flex items-start gap-3 mb-3">
        <CompanyLogo website={company.website} name={company.name} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/companies/${company.slug}`}>
              <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                {company.name}
              </h3>
            </Link>
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-gray-900">{company.rating}</span>
              <span className="text-xs text-gray-400">({company.reviewCount})</span>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center gap-1 mt-0.5">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs text-gray-500">{company.location}</span>
          </div>
        </div>
      </div>

      {/* Service Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {company.services.slice(0, 3).map((service, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[index % tagColors.length]}`}
          >
            {service}
          </span>
        ))}
        {company.services.length > 3 && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
            +{company.services.length - 3}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
        {company.shortDescription}
      </p>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <Link
          href={`/companies/${company.slug}`}
          className="flex-1 text-center px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-xs font-medium"
        >
          View Profile
        </Link>
        <button
          onClick={() => openModal(company.name)}
          className="flex-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-medium"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
