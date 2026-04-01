import FeaturedServicesSection from "@/components/sections/FeaturedServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersProgramSection } from "@/components/sections/PartnersProgramSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import WorksSection from "@/components/sections/WorksSection";
import {
  getSocialInfoHome,
  getWhatsappLink,
  getQuoteContent,
  getServices,
} from "@/sanity/sanity-utils";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/footer/Footer";
import { SocialNetworksSticky } from "@/components/sections/SocialNetworksSticky";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Producción de Video Profesional",
  description: "BYFX ofrece servicios profesionales de producción de video, fotografía aérea con drones, edición y post-producción en Barquisimeto, Venezuela. Transformamos tus ideas en contenido audiovisual de alta calidad.",
  keywords: [
    "producción de video Barquisimeto",
    "video profesional Venezuela",
    "drones Barquisimeto",
    "fotografía aérea Barquisimeto",
    "edición de video profesional",
    "contenido audiovisual Barquisimeto",
    "videografía Barquisimeto Venezuela"
  ],
  openGraph: {
    title: "BYFX - Producción de Video Profesional en Barquisimeto",
    description: "Servicios profesionales de producción de video, fotografía aérea con drones, edición y post-producción en Barquisimeto, Venezuela.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BYFX Producción de Video Barquisimeto"
      }
    ]
  },
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const socialNetworks = await getSocialInfoHome();
  const { url: whatsappLink } = await getWhatsappLink();
  const { countries } = await getQuoteContent();
  const services = await getServices();

  const servicesForSchema = services.map(service => ({
    name: service.name,
    description: service.description
  }));

  return (
    <>
      <LocalBusinessSchema services={servicesForSchema} />
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
