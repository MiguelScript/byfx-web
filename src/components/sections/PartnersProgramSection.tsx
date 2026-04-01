import { ContactDrawer } from "@/components/drawers/ContactDrawer";

export function PartnersProgramSection({ countries }: { countries: string }) {
  return (
    <div className="mt-32 pt-12 lg:py-24 relative bg-[#000000]">
      <div className="flex flex-col lg:flex-row app-container justify-start mx-auto">
        <div className="text-[#FFFFFF] lg:pr-12 lg:ml-0">
          <p className="text-[20px] leading-tight lg:leading-normal">¿Eres creativo independiente?</p>
          <p className="text-[20px] mb-2 lg:mb-0">Únete a nuestro</p>
          <p className="font-mono text-7xl lg:text-[120px] leading-none">PROGRAMA</p>
          <p className="font-mono text-7xl lg:text-[120px] leading-none">
            DE <span className="font-mono gradient-text">PARTNERS</span>
          </p>
        </div>
        <div className="flex flex-col gradient-bg-vertical lg:gradient-bg rounded-t-[20px] lg:rounded-r-[0px] lg:rounded-l-[20px] px-8 lg:px-20 lg:py-12 py-8 lg:absolute lg:w-[50%] lg:right-0 lg:ml-0 mt-6 lg:mt-0">
          <p className="text-[#FFFFFF] font-bold text-lg">
            ¿Qué es el programa de Partners?
          </p>
          <p className="text-[#FFFFFF] lg:max-w-[500px] text-sm leading-tight font-light">
            Si tienes poca experiencia y estás comenzando en el mundo del
            marketing, gestión de redes o producción audiovisual; con BYFX
            puedes vender servicios profesionales, usar cámaras, luces y
            recursos de marca, aprender producción en proyectos reales y{" "}
            <strong>ganar por comisiones</strong>
            mientras haces crecer tu portafolio.
          </p>
          <ContactDrawer countries={countries}>
            <button className="bg-[#181818] w-fit rounded-[100px] lg:py-[8px] py-3 relative lg:px-8 px-12 font-mono gap-x-2 mt-8">
              <p className="text-lg 2xl:text-2xl text-[#FFFFFF] font-normal">CONTACTAR</p>
            </button>
          </ContactDrawer>
        </div>
      </div>
    </div>
  );
}
