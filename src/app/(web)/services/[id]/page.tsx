import Footer from "@/components/footer/Footer";
import {
  getProyectsByServiceId,
  getSocialInfoHome,
  getWhatsappLink,
} from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { generateServiceMetadata } from "./metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return generateServiceMetadata(id);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const socialNetworks = await getSocialInfoHome();
  const { url: whatsappLink } = await getWhatsappLink();
  const serviceData = await getProyectsByServiceId({ _id: id });

  if (!serviceData) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Inicio", url: "https://byfx.pro" },
    { name: "Servicios", url: "https://byfx.pro/services" },
    { name: serviceData.name, url: `https://byfx.pro/services/${id}` }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "BYFX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barquisimeto",
        "addressRegion": "Lara",
        "addressCountry": "VE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Barquisimeto"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://byfx.pro/services/${id}`
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
      <div className="bg-[#1A1A1A] text-white">
        <div className="app-container mx-auto px-4 xl:px-16 py-16 xl:pt-16 xl:pb-24">
          {/* Hashtag */}
          <div className="text-center mb-8">
            <span className="gradient-text text-xl xl:text-xl">
              {serviceData.hashtag}
            </span>
          </div>

          {/* Service Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl xl:text-9xl font-normal uppercase  font-mono">
              {serviceData.name}
            </h1>

            {/* Service Description with Highlight */}
            <div className="max-w-4xl mx-auto mt-4 lg:mt-0 text-base xl:text-lg  text-[#FFFFFFB2] font-[400] mb-4">
              <PortableText value={serviceData.descriptionFullArray} />
            </div>
          </div>

          {/* Project Tags */}
          {serviceData.tags && serviceData.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
              {serviceData.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF33] hover:bg-[#FFFFFF44] transition-colors duration-200 px-5 py-1.5 rounded-[66px]"
                >
                  <span className="text-white text-sm xl:text-[15px] font-semibold">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer socialNetworks={socialNetworks} whatsappLink={whatsappLink} />
    </>
  );
}
