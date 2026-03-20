import FeaturedServicesSection from "@/components/sections/FeaturedServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersProgramSection } from "@/components/sections/PartnersProgramSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import WorksSection from "@/components/sections/WorksSection";
import { getSocialInfoHome, getWhatsappLink, getQuoteContent } from "@/sanity/sanity-utils";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  const socialNetworks = await getSocialInfoHome();
  const { url: whatsappLink } = await getWhatsappLink();
  const { countries } = await getQuoteContent();

  return (
    <>
      <HeroSection socialNetworks={socialNetworks} whatsappLink={whatsappLink} />
      <WorksSection />
      <FeaturedServicesSection />
      <PartnersProgramSection countries={countries} />
      <ReviewsSection />
      <FaqSection />
      <Footer socialNetworks={socialNetworks} whatsappLink={whatsappLink} />
    </>
  );
}
