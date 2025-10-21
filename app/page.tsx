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
    <main className="min-h-screen bg-background">
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
  );
}
