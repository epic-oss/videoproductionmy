import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, getCompaniesByLocation, locations } from "@/lib/data";
import CompanyCard from "../../components/CompanyCard";
import Link from "next/link";

interface LocationPageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    return {
      title: "Location Not Found | VideoProductionMY",
    };
  }

  return {
    title: `Video Production Companies in ${location.name} | VideoProductionMY`,
    description: `Find the best video production companies in ${location.name}, Malaysia. Get free quotes for corporate videos, commercials, event coverage & more.`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  const companiesInLocation = getCompaniesByLocation(locationSlug);

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
              <li className="text-gray-300">{location.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Video Production Companies in {location.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Find trusted video production companies in {location.name} for
            corporate videos, commercials, events & more
          </p>
        </div>
      </section>

      {/* Company Listings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Found{" "}
              <span className="font-semibold text-gray-900">
                {companiesInLocation.length}
              </span>{" "}
              video production{" "}
              {companiesInLocation.length === 1 ? "company" : "companies"} in{" "}
              <span className="font-semibold">{location.name}</span>
            </p>
          </div>

          {/* Company Grid */}
          {companiesInLocation.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companiesInLocation.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No companies listed yet
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We&apos;re working on adding video production companies in{" "}
                {location.name}.
              </p>
              <Link
                href="/companies"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Browse All Companies
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse Other Locations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations
              .filter((loc) => loc.slug !== locationSlug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  <span className="font-medium text-gray-900">{loc.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
