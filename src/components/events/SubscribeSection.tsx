"use client";
import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import api from "../../api/api";

const postSubscribe = async (subscribeData) => {
  try {
    console.log("🚀 Posting subscription to: /subscribe");
    console.log("📊 Payload:", subscribeData);
    const response = await api.post("/subscribe", subscribeData);
    console.log("✅ Subscribe response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error posting subscription:", error);
    if (error.response) {
      console.error("📋 Error status:", error.response.status);
      console.error("📋 Error data:", error.response.data);
    }
    throw error;
  }
};

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const payload = { email: email.trim() };
      console.log("🚀 Subscribing email:", payload);

      const response = await postSubscribe(payload);
      console.log("✅ Subscribe response:", response.data);

      setSubmitStatus({
        type: "success",
        message:
          "Successfully subscribed! Thank you for joining our community.",
      });

      setEmail("");
    } catch (error) {
      console.error("❌ Subscribe error:", error);

      let errorMessage = "Failed to subscribe. Please try again.";

      if (error.response) {
        if (error.response.status === 422) {
          const validationErrors = error.response.data?.errors;
          if (validationErrors?.email) {
            errorMessage = validationErrors.email[0];
          } else {
            errorMessage =
              error.response.data?.message || "Invalid email address";
          }
        } else if (error.response.status === 409) {
          errorMessage = "This email is already subscribed!";
        } else {
          errorMessage = error.response.data?.message || "Subscription failed";
        }
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8 h-[600px] flex flex-col">
      {" "}
      {/* Changed height to fixed 600px and added flex-col */}
      <div className="flex-grow">
        {" "}
        {/* Wrapped content in flex-grow container */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Subscribe</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Stay informed with tips on family child development, parenting advice,
          and the vital role of play in a child's growth. You'll also receive
          updates on our upcoming events and workshops.
        </p>
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
            <span className="font-semibold text-sm">
              {submitStatus.message}
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
              placeholder="Enter your email address"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email.trim()}
            className={`w-full font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
              submitStatus.type === "success"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : submitStatus.type === "error"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            } ${
              isLoading || !email.trim()
                ? "opacity-70 cursor-not-allowed"
                : "hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Subscribing...
              </>
            ) : submitStatus.type === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Subscribed!
              </>
            ) : submitStatus.type === "error" ? (
              <>
                <AlertCircle className="w-5 h-5" />
                Try Again
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
