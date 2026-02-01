"use client";

import { useState, useMemo } from "react";
import { companies, locations, serviceTypes } from "@/lib/data";
import CompanyCard from "../components/CompanyCard";

type SortOption = "featured" | "rating" | "name" | "reviews";

export default function CompaniesPage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredCompanies = useMemo(() => {
    const filtered = companies.filter((company) => {
      const matchesLocation =
        !selectedLocation || company.locationSlug === selectedLocation;
      const matchesService =
        !selectedService || company.services.includes(selectedService);
      return matchesLocation && matchesService;
    });

    switch (sortBy) {
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "reviews":
        return [...filtered].sort((a, b) => b.reviewCount - a.reviewCount);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case "featured":
      default:
        return [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [selectedLocation, selectedService, sortBy]);

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedService("");
  };

  const hasFilters = selectedLocation || selectedService;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Video Production Companies in Malaysia
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Browse our directory of verified video production companies
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar Filters */}
            <aside className="w-full lg:w-60 flex-shrink-0">
              <div className="bg-white rounded-lg border border-gray-200 p-4 lg:sticky lg:top-4">
                <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  Filters
                </h2>

                {/* Location Filter */}
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-xs font-medium text-gray-600 mb-1.5"
                  >
                    Location
                  </label>
                  <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location.slug} value={location.slug}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Type Filter */}
                <div className="mb-4">
                  <label
                    htmlFor="service"
                    className="block text-xs font-medium text-gray-600 mb-1.5"
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">All Services</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full text-center px-3 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors font-medium"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredCompanies.length}
                  </span>{" "}
                  {filteredCompanies.length === 1 ? "company" : "companies"}
                  {selectedLocation && (
                    <span>
                      {" "}in{" "}
                      <span className="font-semibold">
                        {locations.find((l) => l.slug === selectedLocation)?.name}
                      </span>
                    </span>
                  )}
                  {selectedService && (
                    <span>
                      {" "}offering{" "}
                      <span className="font-semibold">{selectedService}</span>
                    </span>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-xs text-gray-500 whitespace-nowrap">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="featured">Featured</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Company Grid */}
              {filteredCompanies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredCompanies.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                  <svg
                    className="mx-auto h-10 w-10 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <h3 className="mt-3 text-sm font-medium text-gray-900">
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
          </div>
        </div>
      </section>
    </div>
  );
}
