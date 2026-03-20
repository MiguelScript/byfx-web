import { ContactDrawer } from "@/components/drawers/ContactDrawer";

export function PartnersProgramSection({ countries }: { countries: string }) {
  return (
    <div className="mt-32 py-24 relative bg-[#000000]">
      <div className="flex flex-col lg:flex-row app-container justify-start mx-auto">
        <div className="text-[#FFFFFF] pr-12 ml-6 lg:ml-0">
          <p className="text-[20px]">¿Eres creativo independiente?</p>
          <p className="text-[20px]">Únete a nuestro</p>
          <p className="font-mono text-[100px] lg:text-[120px] leading-none">PROGRAMA</p>
          <p className="font-mono text-[100px] lg:text-[120px] leading-none">
            DE <span className="font-mono gradient-text">PARTNERS</span>
          </p>
        </div>
        <div className="flex flex-col ml-8 gradient-bg  rounded-l-[20px] px-20 py-12 lg:absolute lg:w-[50%] lg:right-0 lg:ml-0">
          <p className="text-[#FFFFFF] font-bold">
            ¿Qué es el programa de Partners?
          </p>
          <p className="text-[#FFFFFF] max-w-[500px]">
            Si tienes poca experiencia y estás comenzando en el mundo del
            marketing, gestión de redes o producción audiovisual; con BYFX
            puedes vender servicios profesionales, usar cámaras, luces y
            recursos de marca, aprender producción en proyectos reales y{" "}
            <strong>ganar por comisiones</strong>
            mientras haces crecer tu portafolio.
          </p>
          <ContactDrawer countries={countries}>
            <button className="bg-[#181818] w-fit rounded-[100px] py-[8px] relative px-8 font-mono gap-x-2 mt-8">
              <p className="text-xl 2xl:text-2xl text-[#FFFFFF]">CONTACTAR</p>
            </button>
          </ContactDrawer>
        </div>
      </div>
    </div>
  );
}
