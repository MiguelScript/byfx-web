import FeaturedServicesSection from "@/components/sections/FeaturedServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersProgramSection } from "@/components/sections/PartnersProgramSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import WorksSection from "@/components/sections/WorksSection";
import { getSocialInfoHome } from "@/sanity/sanity-utils";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  const socialNetworks = await getSocialInfoHome();

  return (
    <>
      <HeroSection socialNetworks={socialNetworks} />
      <WorksSection />
      <FeaturedServicesSection />
      <PartnersProgramSection />
      <ReviewsSection />
      <FaqSection />
      <Footer socialNetworks={socialNetworks} />
    </>
  );
}
