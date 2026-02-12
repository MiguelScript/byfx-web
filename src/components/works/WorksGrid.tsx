import service from "@/types/service";
import Image from "next/image";

interface WorksGridProps {
  services: service[];
}

export function WorksGrid({ services }: WorksGridProps) {
  return (
    <div className="app-container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl xl:text-6xl font-normal font-mono uppercase text-white mb-4">
          Nuestros Trabajos
        </h1>
        {/* <p className="text-[#FFFFFF66] text-lg">
          Explora nuestra colección de proyectos audiovisuales
        </p> */}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {services.map((service, index) => (
          <div 
            key={service._id} 
            className="break-inside-avoid mb-6 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-[#FFFFFF1A] hover:border-[#3A3A3A] transition-all duration-300">
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={index % 3 === 0 ? 500 : index % 3 === 1 ? 300 : 400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:grayscale"
                  style={{
                    aspectRatio: index % 3 === 0 ? '4/5' : index % 3 === 1 ? '4/3' : '1/1'
                  }}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300" />
                
                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-mono text-xl font-normal uppercase tracking-wider">
                    {service.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
