import FeaturedServicesSection from "@/components/sections/FeaturedServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersProgramSection } from "@/components/sections/PartnersProgramSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import WorksSection from "@/components/sections/WorksSection";
import {
  getSocialInfoHome,
  getWhatsappLink,
  getQuoteContent,
} from "@/sanity/sanity-utils";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/footer/Footer";
import { SocialNetworksSticky } from "@/components/sections/SocialNetworksSticky";

export default async function Home() {
  const socialNetworks = await getSocialInfoHome();
  const { url: whatsappLink } = await getWhatsappLink();
  const { countries } = await getQuoteContent();

  return (
    <>
      <div className="relative">
        <SocialNetworksSticky socialNetworks={socialNetworks} />
        <HeroSection whatsappLink={whatsappLink} countries={countries} />
        <WorksSection socialNetworks={socialNetworks} />
        <FeaturedServicesSection />
        <PartnersProgramSection countries={countries} />
        <ReviewsSection />
        <FaqSection />
      </div>
      <Footer socialNetworks={socialNetworks} whatsappLink={whatsappLink} />
    </>
  );
}
