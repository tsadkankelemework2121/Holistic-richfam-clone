"use client";
import type React from "react";
import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import api from "../../api/api";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const postMembership = async (membershipData: any) => {
  try {
    const response = await api.post("/membership/register", membershipData);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error posting membership:", error);
    if (error.response) {
      console.error("📋 Error status:", error.response.status);
      console.error("📋 Error data:", error.response.data);
    }
    throw error;
  }
};

const MembershipModal = ({ isOpen, onClose }: MembershipModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    profession: "",
    membership_package: "one-month plan", // Set to first valid option
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Updated with the exact values your backend expects
  const membershipPlans = [
    { value: "one-month plan", label: "One-Month Plan" },
    { value: "three-month plan", label: "Three-Month Plan" },
    { value: "six-month plan", label: "Six-Month Plan" },
    { value: "annual plan", label: "Annual Plan" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      profession: "",
      membership_package: "one-month plan",
      message: "",
    });
    setSubmitStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    console.log("Form submission started");

    try {
      const payload = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        profession: formData.profession,
        membership_package: formData.membership_package,
        message: formData.message,
      };

      console.log("Submitting membership data:", payload);

      // Use the postMembership function from your API file
      const result = await postMembership(payload);
      console.log("API Response:", result);

      // Set success status with a more visible message
      const successMessage =
        "Membership application submitted successfully! We'll contact you soon.";
      console.log("Setting success status:", successMessage);
      setSubmitStatus({
        type: "success",
        message: successMessage,
      });

      // Don't reset form immediately so user can see what they submitted
      setTimeout(() => {
        resetForm();
        // Don't close automatically - let user close it
      }, 5000);
    } catch (error: any) {
      console.error("Error in submission:", error);

      let errorMessage = "Failed to submit membership application";

      if (error.response) {
        console.log("Error response status:", error.response.status);
        console.log("Error response data:", error.response.data);

        // Server responded with error status
        if (error.response.status === 404) {
          errorMessage =
            "Membership endpoint not found. Please contact support.";
        } else if (error.response.status === 422) {
          // Validation errors
          const validationErrors = error.response.data?.errors;
          if (validationErrors) {
            // Handle membership_package specific error
            if (validationErrors.membership_package) {
              errorMessage = `Invalid membership package. ${validationErrors.membership_package[0]}`;
            } else {
              const firstError = Object.values(validationErrors)[0];
              errorMessage = Array.isArray(firstError)
                ? firstError[0]
                : firstError;
            }
          } else {
            errorMessage = error.response.data?.message || "Validation failed";
          }
        } else if (error.response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        } else {
          errorMessage =
            error.response.data?.message ||
            `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage =
          "No response from server. Please check your internet connection.";
      } else {
        errorMessage = error.message || "An unexpected error occurred";
      }

      console.log("Setting error status:", errorMessage);
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
      console.log("Form submission completed");
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      resetForm();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Be a member</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Status Messages - Enhanced Visibility */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 border-2 ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border-green-500"
                  : "bg-red-100 text-red-800 border-red-500"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              )}
              <span className="text-base font-semibold">
                {submitStatus.message}
              </span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Full name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="profession"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Profession *
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="membership_package"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Membership Plan *
              </label>
              <div className="relative">
                <select
                  id="membership_package"
                  name="membership_package"
                  value={formData.membership_package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none cursor-pointer"
                  disabled={isLoading}
                  required
                >
                  {membershipPlans.map((plan) => (
                    <option key={plan.value} value={plan.value}>
                      {plan.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                placeholder="Tell us more about yourself or any special requirements..."
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-4 rounded-full transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                submitStatus.type === "success"
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : submitStatus.type === "error"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : submitStatus.type === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Success!
                </>
              ) : submitStatus.type === "error" ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  Try Again
                </>
              ) : (
                "Be a member"
              )}
            </button>
          </form>

          {/* Additional info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              * Required fields. We'll contact you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
