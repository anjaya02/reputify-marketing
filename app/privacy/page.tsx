"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] to-[#1a0b2e] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-900/20 shadow-lg shadow-purple-900/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/Logo-06.png"
              alt="Reputify Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-invert prose-purple max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-white/60 mb-8">
            <strong>Effective Date:</strong> January 3, 2026
            <br />
            <strong>Last Updated:</strong> January 3, 2026
          </p>

          <div className="space-y-8 text-white/80">
            <p>
              Reputify (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the
              &quot;Company&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our AI-powered reputation
              management platform.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                1.1 Information You Provide
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Data Type
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Examples
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Account Information
                      </td>
                      <td className="px-4 py-3">
                        Name, email address, phone number, password
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Business Information
                      </td>
                      <td className="px-4 py-3">
                        Business name, type, industry, address, website, brand
                        voice settings
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Billing Information
                      </td>
                      <td className="px-4 py-3">
                        Payment card details, billing address (processed
                        securely via PayHere)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Team Member Data
                      </td>
                      <td className="px-4 py-3">
                        Email addresses and roles of invited team members
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Communications</td>
                      <td className="px-4 py-3">
                        Support tickets, feedback, and correspondence with us
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                1.2 Information Collected Automatically
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Data Type
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">Usage Data</td>
                      <td className="px-4 py-3">
                        Pages visited, features used, time spent, click patterns
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Device Information
                      </td>
                      <td className="px-4 py-3">
                        IP address, browser type, operating system, device
                        identifiers
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Log Data</td>
                      <td className="px-4 py-3">
                        Server logs recording access times and system activity
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Cookies</td>
                      <td className="px-4 py-3">
                        Authentication tokens, preferences (see Cookie Policy)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                1.3 Information from Third-Party Platforms
              </h3>
              <p className="mb-3">
                Through authorized integrations, we collect:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Platform
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Data Collected
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Google Business Profile
                      </td>
                      <td className="px-4 py-3">
                        Reviews, ratings, business information
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Facebook</td>
                      <td className="px-4 py-3">
                        Reviews, comments, public mentions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Instagram</td>
                      <td className="px-4 py-3">
                        Comments, mentions, hashtag data
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">YouTube</td>
                      <td className="px-4 py-3">
                        Video comments, channel mentions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Reddit</td>
                      <td className="px-4 py-3">
                        Posts and comments mentioning your business
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">TikTok</td>
                      <td className="px-4 py-3">Video comments, mentions</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">LinkedIn</td>
                      <td className="px-4 py-3">
                        Professional mentions, company page interactions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">X (Twitter)</td>
                      <td className="px-4 py-3">
                        Tweets, replies, mentions, hashtag data
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                1.4 AI-Processed Data
              </h3>
              <p className="mb-3">Our AI systems analyze and generate:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sentiment scores (positive/negative/neutral)</li>
                <li>
                  Intent classifications (complaint, praise, query, suggestion,
                  request)
                </li>
                <li>Aspect-based opinions (food, service, price, etc.)</li>
                <li>Plausibility/authenticity scores for review detection</li>
                <li>Topic clusters and trend analysis</li>
                <li>AI-generated reply suggestions</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Data Used
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">Provide Service</td>
                      <td className="px-4 py-3">
                        Account, business, and integration data
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Process Payments
                      </td>
                      <td className="px-4 py-3">
                        Billing information via PayHere
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Analyze Reviews</td>
                      <td className="px-4 py-3">
                        Third-party content, AI models
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Generate Alerts</td>
                      <td className="px-4 py-3">
                        Mentions, sentiment analysis, contact info
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Send Notifications
                      </td>
                      <td className="px-4 py-3">
                        Email, SMS (via Resend, Text.lk)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Improve Service</td>
                      <td className="px-4 py-3">Usage patterns, feedback</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Customer Support
                      </td>
                      <td className="px-4 py-3">
                        Account info, communications
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Security</td>
                      <td className="px-4 py-3">
                        Login attempts, IP addresses
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Comply with Law</td>
                      <td className="px-4 py-3">
                        As required by legal obligations
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Language Support
              </h2>
              <p>
                <strong>Platform Interface:</strong> English only
              </p>
              <p className="mt-2">
                <strong>AI Sentiment Analysis:</strong> Supports 90+ languages,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>English</li>
                <li>Sinhala (සිංහල)</li>
                <li>Tamil (தமிழ்)</li>
              </ul>
              <p className="mt-2">
                Our AI can analyze reviews and mentions written in any of the
                supported languages.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Legal Basis for Processing (GDPR)
              </h2>
              <p className="mb-3">
                If you are in the European Economic Area (EEA), we process your
                data based on:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Legal Basis
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        When Applied
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Contract Performance
                      </td>
                      <td className="px-4 py-3">
                        Providing the Service you subscribed to
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Legitimate Interests
                      </td>
                      <td className="px-4 py-3">
                        Business operations, security, improvement
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Consent</td>
                      <td className="px-4 py-3">
                        Marketing communications, optional analytics
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Legal Compliance
                      </td>
                      <td className="px-4 py-3">When required by law</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Sharing and Disclosure
              </h2>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.1 Service Providers
              </h3>
              <p className="mb-3">
                We share data with trusted providers who assist us:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Provider
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Data Shared
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">PayHere</td>
                      <td className="px-4 py-3">Payment processing</td>
                      <td className="px-4 py-3">Billing information</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">MongoDB Atlas</td>
                      <td className="px-4 py-3">Database hosting</td>
                      <td className="px-4 py-3">Encrypted application data</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Resend</td>
                      <td className="px-4 py-3">Email delivery</td>
                      <td className="px-4 py-3">Email addresses</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Text.lk</td>
                      <td className="px-4 py-3">SMS (Sri Lanka)</td>
                      <td className="px-4 py-3">Phone numbers</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">OpenAI</td>
                      <td className="px-4 py-3">AI processing</td>
                      <td className="px-4 py-3">Review content (anonymized)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">HuggingFace</td>
                      <td className="px-4 py-3">Sentiment analysis</td>
                      <td className="px-4 py-3">Review content</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Apify</td>
                      <td className="px-4 py-3">Social media scraping</td>
                      <td className="px-4 py-3">Public platform data</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Sentry</td>
                      <td className="px-4 py-3">Error monitoring</td>
                      <td className="px-4 py-3">Technical logs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.2 Platform APIs
              </h3>
              <p className="mb-2">
                We interact with platforms via official APIs and authorized
                scraping services:
              </p>
              <p className="font-medium text-white/90">Official APIs:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Google Business Profile API</li>
                <li>YouTube Data API v3</li>
              </ul>
              <p className="font-medium text-white/90">
                Apify Scraping (for platforms without accessible APIs):
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Instagram</li>
                <li>TikTok</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Reddit</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.3 Legal Requirements
              </h3>
              <p>
                We may disclose data when required by law, regulation, or legal
                process.
              </p>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.4 Business Transfers
              </h3>
              <p>
                In connection with a merger, acquisition, or sale of assets.
              </p>
              <p className="mt-4 font-semibold text-white">
                We do NOT sell your personal information to third parties.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Data Retention
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Data Type
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Retention Period
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">Account Data</td>
                      <td className="px-4 py-3">
                        Until account deletion + 30 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Business Data</td>
                      <td className="px-4 py-3">
                        Until business deletion + 30 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Mentions/Reviews
                      </td>
                      <td className="px-4 py-3">
                        Duration of subscription + 30 days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">AI Analysis</td>
                      <td className="px-4 py-3">Same as source mention</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Billing Records</td>
                      <td className="px-4 py-3">7 years (legal requirement)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Audit Logs</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Support Tickets</td>
                      <td className="px-4 py-3">3 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                After account deletion, data is permanently removed within 30
                days except where legal retention is required.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Data Security
              </h2>
              <p className="mb-3">
                We implement industry-standard security measures:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Measure
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Implementation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Encryption in Transit
                      </td>
                      <td className="px-4 py-3">TLS/SSL for all connections</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Encryption at Rest
                      </td>
                      <td className="px-4 py-3">Database encryption</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Authentication</td>
                      <td className="px-4 py-3">
                        JWT tokens with bcrypt password hashing
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Access Control</td>
                      <td className="px-4 py-3">
                        Role-based permissions (owner, admin, manager, viewer)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Multi-Tenant Isolation
                      </td>
                      <td className="px-4 py-3">
                        Strict businessId filtering on all queries
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Rate Limiting</td>
                      <td className="px-4 py-3">
                        10 requests/minute on auth endpoints
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Account Protection
                      </td>
                      <td className="px-4 py-3">
                        Lockout after 5 failed login attempts
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Monitoring</td>
                      <td className="px-4 py-3">
                        Sentry for error tracking, audit logs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                However, no system is completely secure. We cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Right
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        How to Exercise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">Access</td>
                      <td className="px-4 py-3">
                        Request a copy of your personal data
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Correction</td>
                      <td className="px-4 py-3">
                        Update inaccurate or incomplete data via Settings
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Deletion</td>
                      <td className="px-4 py-3">
                        Request deletion of your data (&quot;right to be
                        forgotten&quot;)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Portability</td>
                      <td className="px-4 py-3">
                        Export your data in JSON/CSV format
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Restriction</td>
                      <td className="px-4 py-3">
                        Limit how we process your data
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Objection</td>
                      <td className="px-4 py-3">
                        Object to certain processing activities
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Withdraw Consent
                      </td>
                      <td className="px-4 py-3">
                        Revoke marketing consent anytime
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:support@reputify.lk"
                  className="text-purple-400 hover:text-purple-300"
                >
                  support@reputify.lk
                </a>
                . We respond to requests within 30 days.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. International Data Transfers
              </h2>
              <p className="mb-2">Your data may be processed in:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>
                  <strong>Sri Lanka</strong> (primary operations)
                </li>
                <li>
                  <strong>United States</strong> (OpenAI, cloud services)
                </li>
                <li>
                  <strong>European Union</strong> (some service providers)
                </li>
              </ul>
              <p>We ensure appropriate safeguards through:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Standard contractual clauses</li>
                <li>Data processing agreements with vendors</li>
                <li>Compliance with applicable data protection laws</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Reputify is not directed to individuals under 18 years of age.
                We do not knowingly collect personal information from children.
                If we become aware of such collection, we will delete the
                information promptly.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Third-Party Links
              </h2>
              <p>
                Our Service may contain links to third-party websites. We are
                not responsible for their privacy practices. Review their
                privacy policies before providing information.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Changes to This Policy
              </h2>
              <p className="mb-2">
                We may update this Privacy Policy from time to time. We will
                notify you of material changes via:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email notification (for significant changes)</li>
                <li>In-app notification</li>
                <li>Updated &quot;Last Updated&quot; date</li>
              </ul>
              <p className="mt-2">
                Continued use after changes constitutes acceptance.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Contact Us
              </h2>
              <p className="mb-4">
                For privacy-related inquiries or to exercise your rights:
              </p>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="font-semibold text-white">
                  Reputify - Privacy Team
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@reputify.lk"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    support@reputify.lk
                  </a>
                </p>
                <p>
                  General Inquiries:{" "}
                  <a
                    href="mailto:info@reputify.lk"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    info@reputify.lk
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://reputify.lk"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    https://reputify.lk
                  </a>
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Data Protection Officer
              </h2>
              <p>
                For GDPR-related matters, contact our Data Protection Officer:
                <br />
                Email:{" "}
                <a
                  href="mailto:admin@reputify.lk"
                  className="text-purple-400 hover:text-purple-300"
                >
                  admin@reputify.lk
                </a>
              </p>
            </section>

            <p className="text-white/60 italic pt-4 border-t border-white/10">
              By using Reputify, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-white/60">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link
              href="/privacy"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
          </div>
          <p>© 2026 Reputify — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
