"use client";
import { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import api from "../../api/api";

const postMembership = async (membershipData) => {
  try {
    const response = await api.post("/membership/register", membershipData);
    return response.data;
  } catch (error) {
    console.error("❌ Error posting membership:", error);
    if (error.response) {
      console.error("📋 Error status:", error.response.status);
      console.error("📋 Error data:", error.response.data);
    }
    throw error;
  }
};

const RegistrationModal = ({ isOpen, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    profession: "",
    membership_package: selectedPackage,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const [packageError, setPackageError] = useState("");

  // Valid package values
  const validPackages = [
    "one-month plan",
    "three-month plan",
    "six-month plan",
    "annual plan",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear status messages when user types
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" });
    }

    // Validate package field
    if (name === "membership_package") {
      if (value && !validPackages.includes(value.toLowerCase())) {
        setPackageError(
          "Please enter one of: one-month plan, three-month plan, six-month plan, annual plan"
        );
      } else {
        setPackageError("");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      profession: "",
      membership_package: selectedPackage,
      message: "",
    });
    setSubmitStatus({ type: null, message: "" });
    setPackageError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate package before submission
    if (!validPackages.includes(formData.membership_package.toLowerCase())) {
      setPackageError(
        "Please enter a valid package: one-month plan, three-month plan, six-month plan, or annual plan"
      );
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    setPackageError("");
    console.log("Registration form submission started");

    try {
      const payload = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        profession: formData.profession,
        membership_package: formData.membership_package.toLowerCase(),
        message: formData.message,
      };

      console.log("Submitting registration data:", payload);

      const response = await postMembership(payload);
      const result = response;
      console.log("API Response:", result);

      setSubmitStatus({
        type: "success",
        message: "Registration submitted successfully! We'll contact you soon.",
      });

      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      console.error("Error in registration submission:", error);

      let errorMessage = "Failed to submit registration";

      if (error.response) {
        if (error.response.status === 404) {
          errorMessage =
            "Registration endpoint not found. Please contact support.";
        } else if (error.response.status === 422) {
          const validationErrors = error.response.data?.errors;
          if (validationErrors) {
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

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      resetForm();
      onClose();
    }
  };

  // Update form data when selectedPackage changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      membership_package: selectedPackage,
    }));
  }, [selectedPackage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl max-h-[90vh] flex flex-col">
        {/* Fixed Header */}
        <div className="flex justify-center items-center p-6 pb-4 relative border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Register now</h2>
          <button
            onClick={handleClose}
            className="absolute right-6 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 p-1"
            disabled={isLoading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              )}
              <span className="font-semibold">{submitStatus.message}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="profession"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="membership_package"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Package
              </label>
              <input
                type="text"
                id="membership_package"
                name="membership_package"
                value={formData.membership_package}
                onChange={handleInputChange}
                placeholder="e.g., one-month plan"
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 transition-all duration-200 ${
                  packageError
                    ? "bg-red-50 border-red-300 focus:ring-red-500"
                    : "bg-gray-50 border-gray-200 focus:ring-blue-500"
                }`}
                required
                disabled={isLoading}
              />
              {packageError && (
                <p className="text-sm text-red-600 mt-2 font-medium">
                  {packageError}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                Valid options: one-month plan, three-month plan, six-month plan,
                annual plan
              </p>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 resize-none transition-all duration-200"
                disabled={isLoading}
                placeholder="Optional message..."
              />
            </div>
          </form>
        </div>

        {/* Fixed Footer with Button */}
        <div className="p-6 pt-4 border-t border-gray-100">
          <button
            onClick={handleSubmit}
            disabled={isLoading || packageError}
            className={`w-full font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
              submitStatus.type === "success"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : submitStatus.type === "error"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            } ${
              isLoading || packageError
                ? "opacity-70 cursor-not-allowed"
                : "hover:scale-[1.02] active:scale-[0.98]"
            }`}
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
              "Register now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
