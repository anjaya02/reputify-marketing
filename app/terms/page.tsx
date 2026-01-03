"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-white/60 mb-8">
            <strong>Effective Date:</strong> January 3, 2026
            <br />
            <strong>Last Updated:</strong> January 3, 2026
          </p>

          <div className="space-y-8 text-white/80">
            <p>
              Welcome to Reputify (&quot;Service&quot;, &quot;Platform&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms
              of Service (&quot;Terms&quot;) govern your access to and use of
              the Reputify platform, including our website, applications, and
              all related services.
            </p>
            <p>
              By accessing or using Reputify, you agree to be bound by these
              Terms. If you do not agree, please do not use our Service.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Definitions
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>&quot;User&quot;</strong> refers to any individual or
                  entity that accesses or uses the Service.
                </li>
                <li>
                  <strong>&quot;Account&quot;</strong> refers to your registered
                  account on Reputify.
                </li>
                <li>
                  <strong>&quot;Business&quot;</strong> refers to a business
                  profile you create and manage within Reputify.
                </li>
                <li>
                  <strong>&quot;Mention&quot;</strong> refers to reviews,
                  comments, and social media mentions collected by our Service.
                </li>
                <li>
                  <strong>&quot;Subscription&quot;</strong> refers to the paid
                  tier of service you have selected (Starter, Professional, or
                  Enterprise).
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Service Description
              </h2>
              <p>
                Reputify is an AI-powered reputation management SaaS platform
                that provides:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Multi-Platform Monitoring:</strong> Collection of
                  reviews and mentions from Google Business Profile, Facebook,
                  Instagram, YouTube, Reddit, TikTok, LinkedIn, and X (Twitter)
                </li>
                <li>
                  <strong>AI Sentiment Analysis:</strong> Multilingual sentiment
                  analysis in 90+ languages (including Sinhala and Tamil)
                </li>
                <li>
                  <strong>Intent Detection:</strong> Classification of customer
                  feedback (complaint, praise, query, suggestion, request)
                </li>
                <li>
                  <strong>AI Reply Generation:</strong> Context-aware response
                  suggestions
                </li>
                <li>
                  <strong>Real-Time Alerts:</strong> Email and SMS notifications
                  for negative reviews and important mentions
                </li>
                <li>
                  <strong>Competitor Tracking:</strong> Monitor competitors
                  (Enterprise: 3, Professional: 1, Starter: none)
                </li>
                <li>
                  <strong>RAG Chatbot:</strong> Ask questions about your reviews
                  using AI
                </li>
                <li>
                  <strong>Analytics & Reports:</strong> Exportable PDF and CSV
                  reports
                </li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> The platform interface is in English. AI
                sentiment analysis supports 90+ languages.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Eligibility
              </h2>
              <p>To use Reputify, you must:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  Be at least 18 years of age or the age of legal majority in
                  your jurisdiction
                </li>
                <li>
                  Have the legal authority to enter into a binding agreement
                </li>
                <li>
                  If registering on behalf of a business, have the authority to
                  bind that entity to these Terms
                </li>
                <li>Provide accurate and complete registration information</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Account Registration
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must provide accurate, current, and complete information
                  during registration.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials.
                </li>
                <li>
                  You must notify us immediately of any unauthorized access to
                  your account.
                </li>
                <li>
                  You are solely responsible for all activities that occur under
                  your account.
                </li>
                <li>
                  One email address may only be associated with one account.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Subscription Plans and Pricing
              </h2>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.1 Available Plans
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-white/20 rounded-lg overflow-hidden">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Plan
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Sri Lanka (LKR/month)
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        International (USD/month)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">Starter</td>
                      <td className="px-4 py-3">LKR 2,990</td>
                      <td className="px-4 py-3">USD 19</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Professional</td>
                      <td className="px-4 py-3">LKR 8,990</td>
                      <td className="px-4 py-3">USD 49</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Enterprise</td>
                      <td className="px-4 py-3">LKR 19,990</td>
                      <td className="px-4 py-3">USD 99</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.2 Billing
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions are billed monthly or annually</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Currency is determined based on your billing location</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.3 Payment Methods
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Credit/Debit cards (Visa, Mastercard)</li>
                <li>Mobile wallets</li>
                <li>Bank transfers (Sri Lanka only)</li>
                <li>Payments processed securely via PayHere</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.4 Auto-Renewal
              </h3>
              <p>
                Subscriptions automatically renew unless cancelled before the
                renewal date through your account settings.
              </p>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                5.5 Price Changes
              </h3>
              <p>
                We may change subscription prices with 30 days&apos; prior
                notice. Continued use after the price change constitutes
                acceptance.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Free Trial
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We offer a <strong>30-day free trial</strong> for new users.
                </li>
                <li>
                  During the trial, you have access to Professional plan
                  features.
                </li>
                <li>
                  At trial expiration, your subscription will convert to a paid
                  plan unless cancelled.
                </li>
                <li>
                  We reserve the right to limit or modify trial offerings at any
                  time.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Permitted Use
              </h2>
              <p>
                You agree to use Reputify only for lawful purposes. You may:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  Monitor and analyze your business&apos;s online reputation
                </li>
                <li>
                  Connect your authorized social media accounts and Google
                  Business Profile
                </li>
                <li>Generate AI-powered responses for review before posting</li>
                <li>
                  Access analytics and reporting features for your business
                </li>
                <li>
                  Invite team members to collaborate on your business account
                </li>
                <li>Export your data in supported formats (PDF, CSV)</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Prohibited Conduct
              </h2>
              <p>You agree NOT to:</p>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                8.1 Review & Content Manipulation
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create, post, or encourage fake reviews</li>
                <li>Use AI-generated content to post fake reviews</li>
                <li>
                  Engage in review manipulation or coordinated inauthentic
                  behavior
                </li>
                <li>Delete legitimate reviews through deceptive means</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                8.2 Platform Abuse
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated bots or scripts without authorization</li>
                <li>Exceed your plan&apos;s usage limits intentionally</li>
                <li>Share account credentials with unauthorized parties</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                8.3 Harmful Activities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harass, defame, or threaten individuals</li>
                <li>Upload malware, viruses, or harmful content</li>
                <li>Use the Service for any illegal purpose</li>
                <li>Violate third-party platform terms of service</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                8.4 Data Misuse
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Collect or harvest personal data without authorization</li>
                <li>Use competitor data for anti-competitive purposes</li>
                <li>Misuse AI-generated insights or content</li>
              </ul>
              <p className="mt-4">
                For detailed guidelines, refer to our{" "}
                <strong>Acceptable Use Policy</strong>.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Third-Party Platform Integration
              </h2>
              <p className="mb-4">
                Reputify integrates with third-party platforms including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Google Business Profile</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Reddit</li>
                <li>TikTok</li>
                <li>LinkedIn</li>
                <li>X (Twitter)</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  You must comply with each platform&apos;s terms of service.
                </li>
                <li>
                  You authorize Reputify to access your connected accounts to
                  fetch reviews and mentions.
                </li>
                <li>
                  We are not responsible for third-party service availability,
                  API changes, or platform restrictions.
                </li>
                <li>
                  Platform rate limits may affect data collection frequency.
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. AI-Generated Content
              </h2>
              <p className="mb-4">
                Reputify uses artificial intelligence (AI) to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Analyze sentiment and intent of reviews</li>
                <li>Generate reply suggestions</li>
                <li>Detect potentially fake reviews</li>
                <li>Provide business insights</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  AI-generated content is provided as{" "}
                  <strong>suggestions only</strong>.
                </li>
                <li>
                  You are solely responsible for reviewing and approving any
                  AI-generated content before posting.
                </li>
                <li>
                  We do not guarantee the accuracy or appropriateness of AI
                  outputs.
                </li>
                <li>
                  For limitations, refer to our <strong>Disclaimer</strong>.
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Our Property:</strong> The Service, including its
                  design, features, AI models, and underlying technology, is
                  owned by Reputify and protected by intellectual property laws.
                </li>
                <li>
                  <strong>Your Content:</strong> You retain ownership of content
                  you upload. By uploading content, you grant us a license to
                  use, process, and display it as necessary to provide the
                  Service.
                </li>
                <li>
                  <strong>Third-Party Content:</strong> Reviews and mentions
                  collected from third-party platforms remain the property of
                  their respective authors and platforms.
                </li>
                <li>
                  <strong>Feedback:</strong> Any suggestions or feedback you
                  provide may be used by us without obligation or compensation.
                </li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Data Privacy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your use of Reputify is governed by our{" "}
                  <Link
                    href="/privacy"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Privacy Policy
                  </Link>
                  .
                </li>
                <li>
                  We collect and process data as described in our Privacy
                  Policy.
                </li>
                <li>
                  You are responsible for ensuring you have necessary rights or
                  consents for any data you provide.
                </li>
                <li>
                  See our <strong>Cookie Policy</strong> for information about
                  cookies and tracking.
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Service Levels
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Service level commitments are outlined in our{" "}
                  <strong>Service Level Agreement (SLA)</strong>.
                </li>
                <li>SLA guarantees vary by subscription tier.</li>
                <li>
                  Service credits may be available for qualifying outages.
                </li>
              </ul>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Limitation of Liability
              </h2>
              <p className="mb-4">
                <strong>Disclaimer:</strong> THE SERVICE IS PROVIDED &quot;AS
                IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
              </p>
              <p className="mb-4">
                <strong>Limitation:</strong> TO THE MAXIMUM EXTENT PERMITTED BY
                LAW, REPUTIFY SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages arising from AI-generated content or analytics</li>
                <li>Third-party platform actions, outages, or API changes</li>
                <li>
                  Decisions made based on data or insights from the Service
                </li>
              </ul>
              <p>
                <strong>Cap:</strong> Our total liability shall not exceed the
                amount paid by you in the twelve (12) months preceding the
                claim.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                15. Indemnification
              </h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless Reputify, its officers,
                directors, employees, and agents from any claims, damages,
                losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Content you post using AI-generated suggestions</li>
                <li>Your infringement of any third-party rights</li>
                <li>Violations of third-party platform terms</li>
              </ul>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                16. Termination
              </h2>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                16.1 By You
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Cancel your subscription at any time through{" "}
                  <strong>Settings &gt; Subscription</strong>
                </li>
                <li>
                  Access continues until the end of the current billing period
                </li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                16.2 By Us
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We may suspend or terminate your account for Terms violations
                </li>
                <li>Termination may be immediate for severe violations</li>
                <li>We will provide notice when reasonable</li>
              </ul>

              <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">
                16.3 Effect of Termination
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your right to use the Service ceases immediately</li>
                <li>Data is retained for 30 days, then permanently deleted</li>
                <li>You may request data export before termination</li>
              </ul>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                17. Modifications to Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We reserve the right to modify these Terms at any time.</li>
                <li>
                  Material changes will be communicated via:
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Email notification</li>
                    <li>In-app notification</li>
                    <li>Notice on our website</li>
                  </ul>
                </li>
                <li>
                  Continued use after modifications constitutes acceptance.
                </li>
              </ul>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                18. Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Governing Law:</strong> These Terms are governed by
                  the laws of Sri Lanka.
                </li>
                <li>
                  <strong>Informal Resolution:</strong> We encourage you to
                  contact us first to resolve disputes amicably.
                </li>
                <li>
                  <strong>Arbitration:</strong> Any disputes shall be resolved
                  through binding arbitration in Colombo, Sri Lanka.
                </li>
                <li>
                  <strong>Exceptions:</strong> Either party may seek injunctive
                  relief in courts of competent jurisdiction.
                </li>
              </ul>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                19. General Provisions
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Entire Agreement:</strong> These Terms, along with our
                  Privacy Policy, Cookie Policy, Acceptable Use Policy, SLA, and
                  Disclaimer, constitute the entire agreement.
                </li>
                <li>
                  <strong>Severability:</strong> If any provision is found
                  invalid, the remaining provisions remain in effect.
                </li>
                <li>
                  <strong>Waiver:</strong> Failure to enforce any right does not
                  constitute a waiver.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign these Terms
                  without our consent.
                </li>
                <li>
                  <strong>Language:</strong> These Terms are provided in
                  English. In case of conflict with translated versions, English
                  prevails.
                </li>
              </ul>
            </section>

            {/* Section 20 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                20. Contact Us
              </h2>
              <p className="mb-4">If you have questions about these Terms:</p>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="font-semibold text-white">Reputify</p>
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
                    href="https://marketing.reputify.lk"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    https://marketing.reputify.lk
                  </a>
                </p>
              </div>
            </section>

            <p className="text-white/60 italic pt-4 border-t border-white/10">
              By using Reputify, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
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
              className="hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="text-purple-400 hover:text-purple-300 transition-colors"
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
