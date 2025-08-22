import { createFileRoute } from "@tanstack/react-router";
import Hero from '~/components/Hero';
import { FeatureSection } from '~/components/FeatureSection';
import { InnovationCardsSection } from '~/components/InnovationCardsSection';
import { MobileNodesSection } from '~/components/MobileNodesSection';
import { StatisticsSection } from '~/components/StatisticsSection';
import { NewsSection } from '~/components/NewsSection';
import { PartnersSection } from '~/components/PartnersSection';
import { NewsletterSection } from '~/components/NewsletterSection';
import { Footer } from '~/components/Footer';

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <InnovationCardsSection />
      <FeatureSection />

      <MobileNodesSection />
      <StatisticsSection />

      <NewsSection />

      <PartnersSection />

      <NewsletterSection />

      <Footer />
    </div>
  );
}
