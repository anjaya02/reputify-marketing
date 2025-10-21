"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
    setFormData({
      name: "",
      businessType: "",
      email: "",
      phone: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
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
          <div className="p-6 rounded-lg border-2 border-blue-600/50 bg-gray-900/50 backdrop-blur hover:bg-gray-800/50 transition-all">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            >
              <Mail
                className="w-6 h-6"
                style={{ color: "var(--light-blue)" }}
              />
            </div>
            <h3
              className="font-bold mb-2"
              style={{ color: "var(--pure-white)" }}
            >
              Email
            </h3>
            <p className="text-sm" style={{ color: "var(--light-gray)" }}>
              info@reputify.lk
            </p>
          </div>

          <div className="p-6 rounded-lg border-2 border-blue-600/50 bg-gray-900/50 backdrop-blur hover:bg-gray-800/50 transition-all">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            >
              <Phone
                className="w-6 h-6"
                style={{ color: "var(--light-blue)" }}
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

          <div className="p-6 rounded-lg border-2 border-blue-600/50 bg-gray-900/50 backdrop-blur hover:bg-gray-800/50 transition-all">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            >
              <MapPin
                className="w-6 h-6"
                style={{ color: "var(--light-blue)" }}
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
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all focus:border-blue-500"
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
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all focus:border-blue-500"
                  style={{ color: "var(--pure-white)" }}
                >
                  <option value="">Select your business type</option>
                  <option value="cafe">Cafe/Restaurant</option>
                  <option value="hotel">Hotel/Hospitality</option>
                  <option value="retail">Retail</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
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
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all focus:border-blue-500"
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
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all focus:border-blue-500"
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
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-600 bg-gray-800/50 backdrop-blur focus:outline-none focus:ring-2 transition-all resize-none focus:border-blue-500"
                  style={{ color: "var(--pure-white)" }}
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full text-white font-medium py-2 transition-all"
                style={{ backgroundColor: "var(--navy-blue)" }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {submitted && (
                <div
                  className="p-4 rounded-lg border-2 border-green-200"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    color: "var(--success)",
                  }}
                >
                  <p className="font-medium">
                    Thank you! We'll get back to you soon.
                  </p>
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
              <div className="flex gap-4 p-6 rounded-lg border-2 border-blue-600/50 bg-gray-900/50 backdrop-blur">
                <Clock
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  style={{ color: "var(--light-blue)" }}
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
                    style={{ color: "var(--light-blue)" }}
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
                    style={{ color: "var(--light-blue)" }}
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
                    style={{ color: "var(--light-blue)" }}
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
                    style={{ color: "var(--light-blue)" }}
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
