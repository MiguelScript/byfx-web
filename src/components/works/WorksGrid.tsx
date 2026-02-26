import service from "@/types/service";
import Image from "next/image";

interface WorksGridProps {
  services: service[];
}

export function WorksGrid({ services }: WorksGridProps) {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div 
            key={service._id} 
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-[#1A1A1A] hover:border-[#3A3A3A] transition-all duration-300 aspect-[4/3] 2xl:h-[360px] 2xl:aspect-auto">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300" />
              
              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-mono text-lg font-normal uppercase tracking-wider">
                  {service.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
