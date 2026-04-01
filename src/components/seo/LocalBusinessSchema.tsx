import Script from 'next/script';

interface LocalBusinessSchemaProps {
  services?: Array<{ name: string; description?: string }>;
}

export function LocalBusinessSchema({ services = [] }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://byfx.pro/#organization",
    "name": "BYFX",
    "alternateName": "BYFX Producción Audiovisual",
    "description": "Empresa de producción de video profesional, fotografía aérea con drones, edición y post-producción en Barquisimeto, Venezuela. Especialistas en contenido audiovisual para empresas y eventos.",
    "url": "https://byfx.pro",
    "logo": {
      "@type": "ImageObject",
      "url": "https://byfx.pro/logo.png",
      "width": "600",
      "height": "60"
    },
    "image": "https://byfx.pro/og-image.jpg",
    "telephone": "+58-424-XXXXXXX",
    "email": "contacto@byfx.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Barquisimeto",
      "addressRegion": "Lara",
      "postalCode": "3001",
      "addressCountry": "VE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.0647",
      "longitude": "-69.3301"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Barquisimeto",
        "containedIn": {
          "@type": "State",
          "name": "Lara"
        }
      },
      {
        "@type": "Country",
        "name": "Venezuela"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/byfx",
      "https://www.facebook.com/byfx",
      "https://www.youtube.com/@byfx"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Producción Audiovisual",
      "itemListElement": services.length > 0 ? services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description || `Servicio profesional de ${service.name.toLowerCase()} en Barquisimeto, Venezuela`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "BYFX"
          },
          "areaServed": {
            "@type": "City",
            "name": "Barquisimeto"
          }
        }
      })) : [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Producción de Video",
            "description": "Producción profesional de video para empresas y eventos en Barquisimeto",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BYFX"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fotografía Aérea con Drones",
            "description": "Servicios de fotografía y video aéreo con drones en Barquisimeto",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BYFX"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Edición y Post-Producción",
            "description": "Edición profesional de video y post-producción en Barquisimeto",
            "provider": {
              "@type": "LocalBusiness",
              "name": "BYFX"
            }
          }
        }
      ]
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
