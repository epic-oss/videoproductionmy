"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";
import JsonLd from "@/app/components/JsonLd";

const currentYear = new Date().getFullYear();

export default function CorporateVideoProductionGuide() {
  const { openModal } = useQuote();

  const faqData = [
    {
      question: "How much does corporate video production cost in Malaysia?",
      answer: "Corporate video production in Malaysia typically costs between RM3,000 and RM15,000 per project. Basic talking-head videos start around RM3,000, while high-end productions with animation, multiple locations, and professional talent can exceed RM20,000."
    },
    {
      question: "How long does it take to produce a corporate video?",
      answer: "Most corporate videos take 2 to 6 weeks from initial brief to final delivery. Pre-production (planning, scripting, logistics) takes 1-2 weeks, production (filming) takes 1-3 days, and post-production (editing, colour grading, delivery) takes 1-3 weeks."
    },
    {
      question: "What types of corporate videos are most effective?",
      answer: "The most effective corporate videos include company profile videos, product or service demos, testimonial videos, training and onboarding videos, CSR and sustainability content, and recruitment videos. The best type depends on your business objectives and target audience."
    },
    {
      question: "How many revision rounds are included in corporate video production?",
      answer: "Most video production companies in Malaysia include 2 to 3 revision rounds in their standard packages. Additional revisions beyond the included rounds may incur extra charges. It is important to confirm this before signing a contract."
    },
    {
      question: "What should I prepare before hiring a corporate video production company?",
      answer: "Before hiring a production company, you should define your video objectives and target audience, prepare key messages, set a realistic budget, decide on distribution channels, and gather any brand guidelines or reference videos. Sharing a written brief helps companies provide accurate quotes."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://videoproductionmy.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://videoproductionmy.com/guide/video-production-pricing-malaysia" },
      { "@type": "ListItem", "position": 3, "name": "Corporate Video Production Guide", "item": "https://videoproductionmy.com/guide/corporate-video-production-guide" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/guide/corporate-video-production-guide" className="text-white">Corporate Video Guide</Link>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Corporate Video Production Guide Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A complete guide to planning, producing, and distributing corporate videos for Malaysian businesses. From concept to final delivery.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Corporate video production in Malaysia involves three phases: <strong>pre-production</strong> (planning, scripting, logistics), <strong>production</strong> (filming), and <strong>post-production</strong> (editing, colour grading, delivery). Most corporate videos cost RM3,000–RM15,000 and take 2–6 weeks from brief to final cut.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Corporate Video Production?</h2>
        <p className="text-gray-700 mb-4">
          Corporate video production refers to creating professional video content for business purposes. This includes company profiles, product demos, internal communications, training materials, investor presentations, and brand storytelling. In Malaysia, corporate video has become essential for businesses competing in both local and international markets.
        </p>
        <p className="text-gray-700 mb-8">
          Unlike consumer or entertainment content, corporate videos are designed to achieve specific business objectives — whether that&apos;s building brand awareness, generating leads, onboarding employees, or communicating with stakeholders.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Corporate Videos</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Company Profile Video", desc: "Showcases your business, culture, and value proposition. Typically 2–4 minutes, used on websites and at events." },
            { title: "Product/Service Demo", desc: "Demonstrates how your product works. Effective for SaaS companies, manufacturers, and service businesses." },
            { title: "Testimonial Video", desc: "Features real customers sharing their experience. One of the most persuasive content formats for B2B." },
            { title: "Training & Onboarding", desc: "Internal videos for employee training, compliance, and process documentation. Saves time on repetitive instruction." },
            { title: "CSR & Sustainability", desc: "Highlights your company's social responsibility initiatives. Increasingly important for Malaysian GLCs and MNCs." },
            { title: "Recruitment Video", desc: "Attracts talent by showcasing workplace culture, employee stories, and career opportunities." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Production Process</h2>
        <p className="text-gray-700 mb-6">
          Every corporate video follows a structured workflow. Understanding each phase helps you communicate effectively with your production company and stay on budget.
        </p>

        <div className="space-y-6 mb-8">
          {[
            {
              phase: "Phase 1: Pre-Production",
              duration: "1–2 weeks",
              items: [
                "Define objectives and target audience",
                "Develop creative concept and script",
                "Create storyboard for visual planning",
                "Scout locations and arrange logistics",
                "Cast talent or prepare internal speakers",
                "Plan shooting schedule",
              ],
            },
            {
              phase: "Phase 2: Production",
              duration: "1–3 days",
              items: [
                "Set up lighting, audio, and cameras",
                "Direct on-camera talent and interviews",
                "Capture B-roll footage of offices, products, or operations",
                "Record voiceover if required",
                "Ensure all scenes from shot list are covered",
              ],
            },
            {
              phase: "Phase 3: Post-Production",
              duration: "1–3 weeks",
              items: [
                "Assemble rough cut from selected footage",
                "Add music, sound effects, and voiceover",
                "Apply colour grading for consistent look",
                "Create motion graphics, titles, and lower thirds",
                "Client review rounds (typically 2–3 revisions included)",
                "Final delivery in required formats",
              ],
            },
          ].map((phase, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
                <h3 className="font-semibold">{phase.phase}</h3>
                <span className="text-sm text-gray-400">{phase.duration}</span>
              </div>
              <ul className="px-6 py-4 space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for a Successful Corporate Video</h2>
        <ol className="space-y-3 mb-8">
          {[
            { title: "Start with a clear objective", desc: "Know exactly what you want the video to achieve before speaking to any production company." },
            { title: "Keep it concise", desc: "Attention spans are short. Aim for 2–3 minutes for external videos. Internal training can be longer but should be segmented." },
            { title: "Invest in good audio", desc: "Audiences forgive slightly imperfect visuals but not poor audio. Ensure your production company uses professional sound equipment." },
            { title: "Plan distribution early", desc: "Know where the video will be used — website, social media, presentations — so the production team can optimise format and aspect ratio." },
            { title: "Budget for revisions", desc: "Confirm how many revision rounds are included. Most companies offer 2–3 rounds; additional changes may incur extra charges." },
            { title: "Get internal buy-in early", desc: "Share the script and storyboard with key stakeholders before production begins to avoid costly changes during editing." },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <div>
                <strong className="text-gray-900">{item.title}</strong>
                <span className="text-gray-600"> — {item.desc}</span>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
        <div className="bg-red-50 rounded-lg p-6 mb-8">
          <ul className="space-y-2">
            {[
              "No clear brief — leads to misaligned expectations and wasted budget",
              "Choosing solely on price — cheap production often means poor quality that damages your brand",
              "Ignoring the script — a well-written script is the foundation of every effective video",
              "No call-to-action — always tell viewers what to do next",
              "Forgetting mobile — over 70% of Malaysian video consumption is on mobile devices",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Ready to Produce Your Corporate Video?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Get matched with experienced Malaysian video production companies. Receive up to 5 free quotes for your project.
          </p>
          <button
            onClick={() => openModal()}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quotes
          </button>
        </div>

        {/* Internal Links */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/guide/video-production-pricing-malaysia" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Video Production Pricing {currentYear}</span>
              <span className="block text-sm text-gray-500 mt-1">Detailed cost breakdown</span>
            </Link>
            <Link href="/guide/how-to-choose-video-production-company" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">How to Choose a Video Production Company</span>
              <span className="block text-sm text-gray-500 mt-1">Step-by-step selection guide</span>
            </Link>
            <Link href="/companies" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Browse All Companies</span>
              <span className="block text-sm text-gray-500 mt-1">Compare video production companies</span>
            </Link>
            <Link href="/guide/event-video-coverage-malaysia" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="font-medium text-gray-900">Event Video Coverage Guide</span>
              <span className="block text-sm text-gray-500 mt-1">Planning event videography</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
