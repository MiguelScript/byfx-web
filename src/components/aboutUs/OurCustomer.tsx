import Image from "next/image";
import { ClientCard } from "./ClientCard";

interface ClientCardData {
  icon: string;
  title: string;
  description: string;
}

const clientCards: ClientCardData[] = [
  {
    icon: "/assets/icons/sparkles-icon.svg",
    title: "Marcas",
    description:
      "Empresas que cuidan con precisión su identidad visual y narrativa. Su prioridad es comunicar valor a través de la estética, el detalle y el branding.",
  },
  {
    icon: "/assets/icons/building-icon.svg",
    title: "Empresas",
    description:
      "Compañías constituidas, nacionales o multinacionales, con estructuras internas, equipos amplios y procesos formales.",
  },
  {
    icon: "/assets/icons/palette-icon.svg",
    title: "Agencias y Creativos",
    description:
      "Equipos o freelancers que gestionan clientes finales y requieren un socio de producción confiable para la ejecución audiovisual.",
  },
];

export function OurCustomer({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="pt-32 pb-16">
      <div className="app-container mx-auto">
        <div className="relative flex justify-center items-center mb-12">
          <div>
            <p className="text-[#FFFFFF4D] text-center text-lg mb-2 font-normal">
              ¿Para quien producimos?
            </p>
            <h2 className="text-4xl xl:text-5xl font-normal font-mono uppercase">
              Nuestros Clientes
            </h2>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 bg-[#ACFF6A] text-[#202020] rounded-[100px] py-[8px] px-6 font-mono flex items-center justify-center gap-x-2 hover:bg-[#9EF055] transition-colors"
          >
            <Image
              src={"/assets/icons/whatsapp-icon.svg"}
              width={25}
              height={25}
              alt="WhatsApp"
            />
            <p className="text-xl 2xl:text-2xl uppercase">IR A WHATSAPP</p>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientCards.map((card, index) => (
            <ClientCard key={index} {...card} />
          ))}
        </div>
        <div className="pt-36 pb-16 text-center text-[#FFFFFF66] text-xl xl:text-3xl font-normal">
          <p>
            <span className="font-bold text-[#FFFFFF]">BYFX</span> existe para
            resolver problemas de{" "}
            <span className="font-bold text-[#FFFFFF]">
              producción audiovisual .
            </span>
          </p>
          <p>
            Nuestra <span className="font-bold text-[#FFFFFF]">misión</span> es
            ofrecer <span className="font-bold text-[#FFFFFF]">soluciones</span>{" "}
            adaptadas a cada proyecto, sin importar su
          </p>
          <p>formato, escala o complejidad.</p>
        </div>
      </div>
    </section>
  );
}
