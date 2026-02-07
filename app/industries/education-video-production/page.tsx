"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function EducationVideoPage() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Education Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education &amp; University Video Production Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Video production for universities, colleges, schools, and education providers across Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Education video production in Malaysia costs between <strong>RM5,000 and RM20,000</strong> per project in {currentYear}. Universities and schools use video for student recruitment, campus tours, course promotions, and graduation coverage.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Education Institutions Need Video</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In {currentYear}, prospective students — both local and international — rely heavily on video content when choosing where to study. Malaysian universities compete for students from across ASEAN, the Middle East, and Africa, making professional video content a critical recruitment tool. A compelling campus tour video can showcase facilities, student life, and academic excellence far more effectively than a brochure. Course introduction videos help students understand programmes before applying. Alumni success stories and graduation videos create emotional connections that drive enrolment. For K-12 schools, video demonstrates teaching quality, co-curricular activities, and campus culture to parents making the most important decision for their children&apos;s education.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Education Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Campus Tour Video</h3>
              <p className="text-gray-600 text-sm">Cinematic walkthrough of campus facilities, libraries, labs, dormitories, and common areas. Often includes drone shots for scale.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Student Recruitment Video</h3>
              <p className="text-gray-600 text-sm">Engaging promotional content targeting prospective students, featuring student testimonials, academic highlights, and campus life.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Course / Programme Promo</h3>
              <p className="text-gray-600 text-sm">Short videos introducing specific courses, featuring faculty, lab facilities, career outcomes, and student projects.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Graduation Coverage</h3>
              <p className="text-gray-600 text-sm">Multi-camera coverage of convocation ceremonies with highlights reel, individual graduate clips, and live streaming.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">E-Learning Content</h3>
              <p className="text-gray-600 text-sm">Professional lecture recordings, educational tutorials, and online course materials with graphics and animations.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing ({currentYear})</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Campus Tour Video</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM20,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Recruitment / Brand Video</td><td className="px-4 py-3 text-gray-700">RM10,000 – RM20,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Course Promo (per programme)</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Graduation Coverage</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">E-Learning Production</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM15,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Education Video Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Get quotes from video companies experienced with universities, colleges, and schools in Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a university promotional video cost?</h3>
              <p className="text-gray-600">A campus tour or recruitment video costs RM8,000–RM20,000 in {currentYear}. Individual course promos are more affordable at RM3,000–RM8,000 each, with bulk pricing for multiple programmes.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can the video be produced in multiple languages?</h3>
              <p className="text-gray-600">Yes. Universities targeting international students typically need English, Bahasa Malaysia, Mandarin, and Arabic versions. Subtitles and multilingual voiceovers are standard offerings.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How long does it take to produce a campus video?</h3>
              <p className="text-gray-600">Typically 3–6 weeks. Filming takes 1–3 days depending on campus size, followed by 2–4 weeks of editing, graphics, and revisions. Planning around academic calendar is important.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/locations/selangor" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Selangor</Link>
            <Link href="/guide/corporate-video-production-guide" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Guide</Link>
            <Link href="/guide/event-videography-packages" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Event Packages Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
