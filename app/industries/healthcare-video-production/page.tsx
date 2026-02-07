"use client";

import Link from "next/link";
import { useQuote } from "@/app/components/QuoteContext";

const currentYear = new Date().getFullYear();

export default function HealthcareVideoPage() {
  const { openModal } = useQuote();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Healthcare Video Production</span>
          </nav>
          <p className="text-blue-400 text-sm font-medium mb-2">Updated: January {currentYear}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Healthcare &amp; Medical Video Production Malaysia ({currentYear})
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Video production for hospitals, clinics, pharmaceutical companies, and healthcare providers in Malaysia.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
          <p className="font-semibold text-gray-900 text-lg mb-2">Quick Answer</p>
          <p className="text-gray-700">
            Healthcare video production in Malaysia costs between <strong>RM5,000 and RM25,000</strong> per project in {currentYear}. Medical videos require specialized production teams who understand patient privacy, clinical environments, and healthcare marketing regulations.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Healthcare Providers Need Video</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malaysia&apos;s healthcare industry — from private hospitals and specialist clinics to medical tourism operators and pharmaceutical companies — is increasingly competitive in {currentYear}. Patients research online before choosing a healthcare provider, and video is the most effective way to build trust, showcase facilities, and humanize medical professionals. Hospital facility tours help patients feel comfortable before their first visit. Doctor profile videos establish credibility and personal connection. Patient testimonial videos (with proper consent) provide powerful social proof. For medical tourism, which is a key growth area for Malaysia, professional video content in multiple languages helps attract international patients from Indonesia, Bangladesh, and the Middle East.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Healthcare Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Hospital / Clinic Tour</h3>
              <p className="text-gray-600 text-sm">Facility walkthrough showing wards, equipment, waiting areas, and amenities. Helps patients feel comfortable and builds institutional credibility.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Doctor Profile Video</h3>
              <p className="text-gray-600 text-sm">Short introduction videos featuring specialists discussing their expertise, approach, and qualifications. Builds trust before the first appointment.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Patient Testimonial</h3>
              <p className="text-gray-600 text-sm">Recovery stories and treatment experiences shared by consenting patients. Powerful social proof for elective procedures and specialist services.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Medical Training Video</h3>
              <p className="text-gray-600 text-sm">Educational content for healthcare professionals covering procedures, protocols, and equipment operation. Used for staff onboarding and CPD.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Health Education Content</h3>
              <p className="text-gray-600 text-sm">Patient-facing educational videos about conditions, treatments, prevention, and wellness. Great for social media and clinic waiting room displays.</p>
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
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Hospital / Clinic Tour</td><td className="px-4 py-3 text-gray-700">RM8,000 – RM20,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Doctor Profile Videos (per doctor)</td><td className="px-4 py-3 text-gray-700">RM2,000 – RM5,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Patient Testimonial</td><td className="px-4 py-3 text-gray-700">RM3,000 – RM8,000</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Medical Training Video</td><td className="px-4 py-3 text-gray-700">RM10,000 – RM25,000</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-900">Health Education Content</td><td className="px-4 py-3 text-gray-700">RM5,000 – RM12,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white mb-10">
          <h2 className="text-2xl font-bold mb-3">Need Healthcare Video Production?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Connect with video companies experienced in healthcare and medical environments across Malaysia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openModal()} className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Get Free Quotes</button>
            <Link href="/companies" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Browse Companies</Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">How much does a hospital video cost in Malaysia?</h3>
              <p className="text-gray-600">A hospital or clinic tour video costs RM8,000–RM20,000 in {currentYear}. Individual doctor profiles are RM2,000–RM5,000 each, often with bulk pricing for multiple specialists.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What about patient privacy when filming?</h3>
              <p className="text-gray-600">Professional video companies follow strict protocols. Patient areas are filmed with consent only, faces are blurred when needed, and all filming complies with Malaysian patient privacy regulations and hospital policies.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Can medical videos be produced in multiple languages?</h3>
              <p className="text-gray-600">Yes. Most companies offer Bahasa Malaysia, English, Mandarin, and Arabic for medical tourism content. Subtitles and multilingual voiceovers are standard options.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations/kuala-lumpur" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production KL</Link>
            <Link href="/locations/penang" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Video Production Penang</Link>
            <Link href="/guide/corporate-video-production-guide" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Corporate Video Guide</Link>
            <Link href="/guide/video-production-pricing-malaysia" className="bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700">Pricing Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
