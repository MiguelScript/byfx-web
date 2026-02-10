import Image from "next/image";

interface ClientCard {
  icon: string;
  title: string;
  description: string;
}

const clientCards: ClientCard[] = [
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
    <section className="py-16 px-12">
      <div className="app-container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[#FFFFFFB2] text-sm mb-2">
              ¿Para quien producimos?
            </p>
            <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-mono uppercase">
              Nuestros Clientes
            </h2>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ACFF6A] text-[#202020] rounded-[100px] py-[8px] px-6 font-mono flex items-center justify-center gap-x-2 hover:bg-[#9EF055] transition-colors"
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
            <ClientCardComponent key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCardComponent({ icon, title, description }: ClientCard) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors">
      <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-6">
        <Image src={icon} width={24} height={24} alt={title} />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-[#FFFFFFB2] text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
