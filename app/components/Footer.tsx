import Link from "next/link";
import { locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-white">
                VideoProduction<span className="text-blue-400">MY</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Connecting Malaysian businesses with trusted video production
              companies. Get free quotes for your next project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Browse Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources / Guides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guide/video-production-pricing-malaysia" className="text-gray-400 hover:text-white transition-colors">
                  Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="/guide/corporate-video-production-kl" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Video KL
                </Link>
              </li>
              <li>
                <Link href="/guide/product-video-ecommerce" className="text-gray-400 hover:text-white transition-colors">
                  Product Video Guide
                </Link>
              </li>
              <li>
                <Link href="/guide/event-videography-packages" className="text-gray-400 hover:text-white transition-colors">
                  Event Packages
                </Link>
              </li>
              <li>
                <Link href="/guide/agm-live-streaming" className="text-gray-400 hover:text-white transition-colors">
                  AGM Live Streaming
                </Link>
              </li>
              <li>
                <Link href="/guide/drone-videography-malaysia" className="text-gray-400 hover:text-white transition-colors">
                  Drone Videography
                </Link>
              </li>
              <li>
                <Link href="/guide/how-to-choose-video-production-company" className="text-gray-400 hover:text-white transition-colors">
                  How to Choose
                </Link>
              </li>
              <li>
                <Link href="/guide/corporate-video-production-guide" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Video Guide
                </Link>
              </li>
              <li>
                <Link href="/guide/top-video-production-companies-kl" className="text-gray-400 hover:text-white transition-colors">
                  Top Companies in KL
                </Link>
              </li>
              <li>
                <Link href="/guide/event-video-coverage-malaysia" className="text-gray-400 hover:text-white transition-colors">
                  Event Coverage Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 VideoProductionMY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
