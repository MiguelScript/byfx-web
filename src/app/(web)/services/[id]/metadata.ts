import { Metadata } from "next";
import { getProyectsByServiceId } from "@/sanity/sanity-utils";

export async function generateServiceMetadata(id: string): Promise<Metadata> {
  const serviceData = await getProyectsByServiceId({ _id: id });

  if (!serviceData) {
    return {
      title: "Servicio no encontrado",
    };
  }

  const serviceName = serviceData.name;
  const description = serviceData.descriptionFullArray 
    ? `${serviceName} en Barquisimeto, Venezuela. BYFX ofrece servicios profesionales de ${serviceName.toLowerCase()} con equipos de última generación y personal altamente capacitado.`
    : `Servicio profesional de ${serviceName} en Barquisimeto, Venezuela por BYFX.`;

  return {
    title: `${serviceName} - Servicio Profesional en Barquisimeto`,
    description,
    keywords: [
      `${serviceName.toLowerCase()} Barquisimeto`,
      `${serviceName.toLowerCase()} Venezuela`,
      `servicio ${serviceName.toLowerCase()}`,
      "producción audiovisual Barquisimeto",
      "BYFX servicios",
      `${serviceName.toLowerCase()} profesional`
    ],
    openGraph: {
      title: `${serviceName} - BYFX Barquisimeto`,
      description,
      url: `/services/${id}`,
      type: "website",
    },
    alternates: {
      canonical: `/services/${id}`,
    },
  };
}
