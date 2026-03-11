import Audience from "../components/Audience";
import CTA from "../components/CTA";
import EditorPreview from "../components/EditorPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WaitlistProvider from "../components/WaitlistProvider";

export default function Home() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Hero />
        <Features />
        <EditorPreview />
        <Audience />
        <CTA />
        <Footer />
      </div>
    </WaitlistProvider>
  );
}
