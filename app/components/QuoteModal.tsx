"use client";

import { useState, FormEvent, useEffect } from "react";
import { useQuote } from "./QuoteContext";

export default function QuoteModal() {
  const { isModalOpen, selectedCompany, closeModal } = useQuote();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    videoType: "",
    budgetRange: "",
    projectDetails: "",
  });

  useEffect(() => {
    if (selectedCompany) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails || `Interested in services from ${selectedCompany}`,
      }));
    }
  }, [selectedCompany]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedVendor: selectedCompany || "",
          lead_type: "video_production_my",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      setFormData({
        companyName: "",
        contactPerson: "",
        phone: "",
        email: "",
        videoType: "",
        budgetRange: "",
        projectDetails: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setError("");
    setFormData({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      videoType: "",
      budgetRange: "",
      projectDetails: "",
    });
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-6">
            {isSuccess ? (
              /* Success Message */
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
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
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Thanks! We&apos;ll connect you with suitable video production
                  companies within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Form */
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCompany
                    ? `Request Quote from ${selectedCompany}`
                    : "Get Free Quote"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedCompany
                    ? "Fill in your details and we'll forward your request to this company."
                    : "Fill in your details and we'll connect you with the best video production companies."}
                </p>

                {selectedCompany && (
                  <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-md text-sm">
                    Requesting quote from: <strong>{selectedCompany}</strong>
                  </div>
                )}

                {error && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="videoType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Video Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="videoType"
                      name="videoType"
                      required
                      value={formData.videoType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select video type</option>
                      <option value="Corporate Video">Corporate Video</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Product Video">Product Video</option>
                      <option value="TVC/Commercial">TVC/Commercial</option>
                      <option value="Social Media Content">
                        Social Media Content
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select budget range</option>
                      <option value="Below RM10k">Below RM10k</option>
                      <option value="RM10k-30k">RM10k-30k</option>
                      <option value="RM30k-50k">RM30k-50k</option>
                      <option value="RM50k+">RM50k+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Details{" "}
                      <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Quote"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
