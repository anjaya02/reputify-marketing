"use client";

import { X, Check } from "lucide-react";

type FreeTrialModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function FreeTrialModal({ open, onClose }: FreeTrialModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg h-[90vh] max-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#6C0097] to-[#A650D8] text-white p-6 text-center relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X size={20} />
          </button>

          <h2 className="text-3xl font-black">Start Your Free Trial Now</h2>
          <p className="text-sm mt-2 opacity-90">
            30 days full access · No credit card
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-gray-700">
          {/* Features Section */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Features</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>3 Review Platforms (Google, Facebook, Instagram)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>3 Keyword Tracking with Auto-Variations</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>AI Sentiment Analysis (500 reviews/month, Advanced)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Advanced Intent Detection</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Aspect-Based Opinion Extraction (6 aspects)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>AI Auto-Reply System (25 replies)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Deduplication & Topic Clustering</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Email + SMS Notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Real-Time Dashboard with Charts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Weekly Summary Emails</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>End-of-Trial Report</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Up to 2 Business Locations</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-600 flex-shrink-0" size={16} />
                <span>Email Support (48-hour response)</span>
              </div>
            </div>
          </div>

          {/* Limits Section */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Limits</h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium">30 days</span>
              </div>
              <div className="flex justify-between">
                <span>Business Locations:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Team Members:</span>
                <span className="font-medium">1 (owner only)</span>
              </div>
              <div className="flex justify-between">
                <span>Platforms:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Reviews/month:</span>
                <span className="font-medium">500</span>
              </div>
              <div className="flex justify-between">
                <span>AI Replies/month:</span>
                <span className="font-medium">25</span>
              </div>
              <div className="flex justify-between">
                <span>Keywords:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Data Retention:</span>
                <span className="font-medium">30 days</span>
              </div>
              <div className="flex justify-between">
                <span>Competitors:</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span>SMS:</span>
                <span className="font-medium">✓ Enabled</span>
              </div>
              <div className="flex justify-between">
                <span>PDF Export:</span>
                <span className="font-medium">✗ Disabled</span>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Highlights</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>30 Days Free</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Full Access to AI Features</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Weekly Summary Emails</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>End-of-Trial Report</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-6 bg-white border-t border-gray-100 flex-shrink-0">
          <button
            onClick={() => {
              onClose();
              window.location.href = "/signup";
            }}
            className="w-full bg-[#6C0097] hover:bg-[#5a007d] text-white font-bold py-3 rounded-xl transition-all cursor-pointer"
          >
            Continue to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
