"use client";

import { useQuote } from "../components/QuoteContext";

const services = [
  {
    title: "Corporate Videos",
    description:
      "Professional corporate videos that communicate your brand message effectively. Perfect for company profiles, internal communications, training videos, and investor presentations. Our network of video production companies delivers high-quality corporate content that engages your audience.",
    features: [
      "Company Profile Videos",
      "Training & Educational Videos",
      "Internal Communication Videos",
      "Investor & Stakeholder Presentations",
    ],
    color: "blue",
  },
  {
    title: "Event Coverage",
    description:
      "Comprehensive event videography services to capture your important moments. From corporate conferences and seminars to product launches and gala dinners, get professional multi-camera coverage with expert editing.",
    features: [
      "Corporate Conferences & Seminars",
      "Product Launch Events",
      "Award Ceremonies & Gala Dinners",
      "Trade Shows & Exhibitions",
    ],
    color: "green",
  },
  {
    title: "Product Videos",
    description:
      "Showcase your products with stunning video content that drives sales. From detailed product demonstrations to lifestyle videos, our video production partners create compelling content that highlights your product's best features.",
    features: [
      "Product Demonstrations",
      "E-commerce Product Videos",
      "Unboxing & Review Videos",
      "Lifestyle Product Showcases",
    ],
    color: "purple",
  },
  {
    title: "TVC & Commercials",
    description:
      "Create impactful television commercials and advertisements that capture attention. Our network includes experienced production houses skilled in concept development, scriptwriting, filming, and post-production for broadcast-quality commercials.",
    features: [
      "Television Commercials (TVC)",
      "Digital Video Ads",
      "Brand Films",
      "Cinema Advertising",
    ],
    color: "orange",
  },
  {
    title: "Social Media Content",
    description:
      "Engaging video content optimized for social media platforms. From short-form videos for TikTok and Instagram Reels to longer YouTube content, get videos that perform well on every platform.",
    features: [
      "Instagram Reels & Stories",
      "TikTok Videos",
      "YouTube Content",
      "Facebook & LinkedIn Videos",
    ],
    color: "pink",
  },
  {
    title: "Animation & Motion Graphics",
    description:
      "Bring your ideas to life with professional animation and motion graphics. Perfect for explainer videos, infographics, logo animations, and creative brand content that stands out.",
    features: [
      "2D & 3D Animation",
      "Explainer Videos",
      "Animated Infographics",
      "Logo & Brand Animations",
    ],
    color: "indigo",
  },
];

const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", light: "bg-blue-100" },
  green: { bg: "bg-green-600", text: "text-green-600", light: "bg-green-100" },
  purple: { bg: "bg-purple-600", text: "text-purple-600", light: "bg-purple-100" },
  orange: { bg: "bg-orange-600", text: "text-orange-600", light: "bg-orange-100" },
  pink: { bg: "bg-pink-600", text: "text-pink-600", light: "bg-pink-100" },
  indigo: { bg: "bg-indigo-600", text: "text-indigo-600", light: "bg-indigo-100" },
};

export default function ServicesPage() {
  const { openModal } = useQuote();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Video Production Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with Malaysia&apos;s top video production companies for all
            your video needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 ${colorClasses[service.color].light} rounded-lg flex items-center justify-center`}
                        >
                          <div
                            className={`w-4 h-4 ${colorClasses[service.color].bg} rounded`}
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <svg
                              className={`w-5 h-5 ${colorClasses[service.color].text}`}
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
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:flex-shrink-0">
                      <button
                        onClick={() => openModal()}
                        className={`${colorClasses[service.color].bg} hover:opacity-90 text-white px-6 py-3 rounded-md font-medium transition-opacity w-full lg:w-auto`}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll connect you with the right
            video production companies for your needs.
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
