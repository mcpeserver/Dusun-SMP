import DeveloperBar from "./components/DeveloperBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import RulesSection from "./components/RulesSection";
import JoinSection from "./components/JoinSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-base selection:bg-rice-gold selection:text-forest-dark relative">
      {/* 1 & 2. Sticky Container for Developer Bar and Header */}
      <div className="sticky top-0 z-50 w-full flex flex-col">
        {/* Developer Bar di bagian paling atas */}
        <DeveloperBar />

        {/* Header / Navigasi */}
        <Header />
      </div>

      {/* 3. Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Tentang Server Section */}
        <AboutSection />

        {/* Server Features Section */}
        <FeaturesSection />

        {/* Atuan / Rules Section */}
        <RulesSection />

        {/* Join Server Section */}
        <JoinSection />

        {/* Community Section */}
        <CommunitySection />
      </main>

      {/* 4. Footer Section */}
      <Footer />
    </div>
  );
}
