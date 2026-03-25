import Image from "next/image";
import { ClientCard } from "./ClientCard";
import Link from "next/link";

interface ClientCardData {
  icon: string;
  title: string;
  description: string;
}

const clientCards: ClientCardData[] = [
  {
    icon: "/assets/icons/brands-icon.svg",
    title: "Marcas",
    description:
      "Empresas que cuidan con precisión su identidad visual y narrativa. Su prioridad es comunicar valor a través de la estética, el detalle y el branding.",
  },
  {
    icon: "/assets/icons/company-icon.svg",
    title: "Empresas",
    description:
      "Compañías constituidas, nacionales o multinacionales, con estructuras internas, equipos amplios y procesos formales.",
  },
  {
    icon: "/assets/icons/agency-icon.svg",
    title: "Agencias y Creativos",
    description:
      "Equipos o freelancers que gestionan clientes finales y requieren un socio de producción confiable para la ejecución audiovisual.",
  },
];

export function OurCustomer({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="pt-16 lg:pt-32 pb-16">
      <div className="app-container mx-auto">
        <div className="relative flex justify-center items-center mb-12">
          <div>
            <p className="text-[#FFFFFF4D] text-center  lg:text-[20px] mb-4 font-normal">
              ¿Para quien producimos?
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-end">
              <h2 className="text-3xl xl:text-5xl font-normal font-mono uppercase">
                Nuestros Clientes
              </h2>
              <div className="flex gap-x-4 mt-6 lg:mt-0">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:absolute right-0 bg-[#ACFF6A] text-[#202020] rounded-[100px] py-[8px] px-6 font-mono flex items-center justify-center gap-x-2 hover:bg-[#9EF055] transition-colors"
                >
                  <Image
                    src={"/assets/icons/whatsapp-icon.svg"}
                    width={25}
                    height={25}
                    alt="WhatsApp"
                  />
                  <p className="text-xl 2xl:text-2xl uppercase">
                    IR A WHATSAPP
                  </p>
                </a>
                <Link
                  href="/works"
                  className="bg-[#ffffff] text-[#000000] rounded-[100px] py-3 w-[150px] relative text-center"
                >
                  <p className="text-lg 2xl:text-xl relative z-10 font-mono">
                    Ver Trabajos
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientCards.map((card, index) => (
            <ClientCard key={index} {...card} />
          ))}
        </div>
        <div className="pt-24 lg:pt-44 pb-16 lg:pb-32 text-center text-[#FFFFFF66] text-2xl xl:text-3xl font-normal leading-10 xl:leading-[45px]">
          <p>
            <span className="font-bold text-[#FFFFFF]">BYFX</span> existe para
            resolver problemas de{" "}
            <span className="font-bold text-[#FFFFFF]">
              producción audiovisual.
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
