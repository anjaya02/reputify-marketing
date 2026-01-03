"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        businessType: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 7 seconds
      setTimeout(() => setSubmitted(false), 7000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ color: "var(--pure-white)" }}
          >
            Get in Touch
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--light-gray)" }}
          >
            Have questions? Our team is here to help you get started with
            Reputify
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-lg border-2 border-purple-600/50 bg-gray-900/50 backdrop-blur hover:bg-gray-800/50 transition-all">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              <Mail
                className="w-6 h-6"
                style={{ color: "var(--light-purple)" }}
              />
            </div>
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--pure-white)" }}
            >
              Email
            </h3>
            <a
              href="mailto:info@reputify.lk"
              className="text-sm hover:text-purple-400 transition-colors"
              style={{ color: "var(--light-gray)" }}
            >
              info@reputify.lk
            </a>
          </div>

          <div className="p-6 rounded-lg border-2 border-purple-600/50 bg-gray-900/50 backdrop-blur hover:bg-gray-800/50 transition-all">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              <Phone
                className="w-6 h-6"
                style={{ color: "var(--light-purple)" }}
              />
            </div>
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--pure-white)" }}
            >
              WhatsApp
            </h3>
            <p className="text-sm" style={{ color: "var(--light-gray)" }}>
              +94 711687980
            </p>
          </div>

          <div className="p-6 rounded-lg border-2 border-purple-600/50 bg-gray-900/50 backdrop-blur hover:bg-gray-800/50 transition-all">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              <MapPin
                className="w-6 h-6"
                style={{ color: "var(--light-purple)" }}
              />
            </div>
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--pure-white)" }}
            >
              Office
            </h3>
            <p className="text-sm" style={{ color: "var(--light-gray)" }}>
              Colombo, Sri Lanka
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--pure-white)" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-900/50 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all focus:border-purple-500"
                  style={{
                    color: "var(--pure-white)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--pure-white)" }}
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-900/50 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all focus:border-purple-500 focus:ring-purple-500/50"
                  style={{
                    color: "var(--pure-white)",
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                  }}
                >
                  <option
                    value=""
                    disabled
                    className="bg-gray-800 text-white"
                    style={{
                      backgroundColor: "#1f2937 !important",
                      color: "white !important",
                    }}
                  >
                    Select your business type
                  </option>
                  <option
                    value="cafe"
                    className="bg-gray-800 text-white"
                    style={{
                      backgroundColor: "#1f2937 !important",
                      color: "white !important",
                    }}
                  >
                    Cafe/Restaurant
                  </option>
                  <option
                    value="hotel"
                    className="bg-gray-800 text-white"
                    style={{
                      backgroundColor: "#1f2937 !important",
                      color: "white !important",
                    }}
                  >
                    Hotel/Hospitality
                  </option>
                  <option
                    value="retail"
                    className="bg-gray-800 text-white"
                    style={{
                      backgroundColor: "#1f2937 !important",
                      color: "white !important",
                    }}
                  >
                    Retail
                  </option>
                  <option
                    value="healthcare"
                    className="bg-gray-800 text-white"
                    style={{
                      backgroundColor: "#1f2937 !important",
                      color: "white !important",
                    }}
                  >
                    Healthcare
                  </option>
                  <option
                    value="other"
                    className="bg-gray-800 text-white"
                    style={{
                      backgroundColor: "#1f2937 !important",
                      color: "white !important",
                    }}
                  >
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--pure-white)" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-900/50 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all focus:border-purple-500"
                  style={{ color: "var(--pure-white)" }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--pure-white)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-900/50 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all focus:border-purple-500"
                  style={{ color: "var(--pure-white)" }}
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--pure-white)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-purple-900/50 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all resize-none focus:border-purple-500"
                  style={{ color: "var(--pure-white)" }}
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <Button
                type="submit"
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.businessType ||
                  !formData.email ||
                  !formData.message ||
                  formData.message.length < 5
                }
                className="w-full text-white font-medium py-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--deep-purple)" }}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>

              {submitted && (
                <div
                  className="p-4 rounded-lg border-2 border-green-200"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    color: "#10b981",
                  }}
                >
                  <p className="font-medium">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you within 24 hours.
                  </p>
                </div>
              )}

              {error && (
                <div
                  className="p-4 rounded-lg border-2 border-red-200"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    color: "#ef4444",
                  }}
                >
                  <p className="font-medium">{error}</p>
                </div>
              )}
            </form>
          </div>

          {/* Business Hours & Info */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--pure-white)" }}
              >
                Business Hours
              </h3>
              <div className="flex gap-4 p-6 rounded-lg border-2 border-purple-600/50 bg-gray-900/50 backdrop-blur">
                <Clock
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  style={{ color: "var(--light-purple)" }}
                />
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--pure-white)" }}
                  >
                    Monday - Friday
                  </p>
                  <p style={{ color: "var(--light-gray)" }}>
                    9:00 AM - 6:00 PM (Sri Lankan Time)
                  </p>
                  <p
                    className="text-sm mt-2"
                    style={{ color: "var(--light-gray)" }}
                  >
                    We respond to inquiries within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--pure-white)" }}
              >
                Why Contact Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span
                    className="font-bold"
                    style={{ color: "var(--light-purple)" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--pure-white)" }}>
                    Get a personalized demo tailored to your business
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="font-bold"
                    style={{ color: "var(--light-purple)" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--pure-white)" }}>
                    Discuss custom integration options
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="font-bold"
                    style={{ color: "var(--light-purple)" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--pure-white)" }}>
                    Learn about special pricing for bulk users
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="font-bold"
                    style={{ color: "var(--light-purple)" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--pure-white)" }}>
                    Get expert advice on reputation management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
