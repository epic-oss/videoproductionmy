"use client";

import { useState, useMemo } from "react";
import { companies, locations, serviceTypes } from "@/lib/data";
import CompanyCard from "../components/CompanyCard";

export default function CompaniesPage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesLocation =
        !selectedLocation || company.locationSlug === selectedLocation;
      const matchesService =
        !selectedService || company.services.includes(selectedService);
      return matchesLocation && matchesService;
    });
  }, [selectedLocation, selectedService]);

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedService("");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Video Production Companies in Malaysia
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our directory of verified video production companies
          </p>
        </div>
      </section>

      {/* Filters & Listings */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex-1 w-full md:w-auto">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location.slug} value={location.slug}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="">All Services</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {(selectedLocation || selectedService) && (
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredCompanies.length}
              </span>{" "}
              {filteredCompanies.length === 1 ? "company" : "companies"}
              {selectedLocation && (
                <span>
                  {" "}
                  in{" "}
                  <span className="font-semibold">
                    {locations.find((l) => l.slug === selectedLocation)?.name}
                  </span>
                </span>
              )}
              {selectedService && (
                <span>
                  {" "}
                  offering{" "}
                  <span className="font-semibold">{selectedService}</span>
                </span>
              )}
            </p>
          </div>

          {/* Company Grid */}
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No companies found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your filters to find more companies.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
