import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import PlatformIcons from "@/components/platform-icons";
import About from "@/components/about";
import SocialProof from "@/components/social-proof";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata = {
  title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
  description:
    "AI-powered reputation management platform for Sri Lankan SMEs. Monitor reviews across Google, Facebook, LinkedIn, YouTube, and Reddit in Sinhala, Tamil, and English.",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Violet Abyss */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Your Content/Components */}
      <main className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <PlatformIcons />
        <About />
        <SocialProof />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
