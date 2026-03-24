import { getServices } from "@/sanity/sanity-utils";
import { CardFeaturedService } from "../cards/CardFeaturedService";

export default async function FeaturedServicesSection() {
  const services = await getServices();

  return (
    <div className="app-container-desktop mt-12 lg:mt-20 mx-auto w-full">
      <div className="uppercase text-center font-mono text-5xl 2xl:text-[150px] leading-[107%] tracking-[0%] gradient-text">
        <p>Soluciones</p>
        <p>audiovisuales para</p>
        <p>marcas y para</p>
        <p>quienes las crean.</p>
      </div>
      <h2 className="text-center text-3xl 2xl:text-[50px] font-normal text-[#FFFFFF] font-mono mt-16 lg:mt-24 mb-12 lg:mb-8">
        Nuestros servicios
      </h2>
      <div className="mx-auto">
        {/* Mobile: Single column with lines after each item */}
        <div className="xl:hidden">
          {services.map((service, index) => (
            <div key={service._id}>
              <CardFeaturedService
                _id={service._id}
                name={service.name}
                description={service.description}
                image={service.image}
              />
              {index < services.length - 1 && (
                <div className="border-b border-[#FFFFFF1A] my-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Two columns with lines after each row */}
        <div className="hidden xl:block">
          {Array.from({ length: Math.ceil(services.length / 2) }, (_, rowIndex) => (
            <div key={rowIndex}>
              <div className="grid grid-cols-2 gap-x-6">
                {services.slice(rowIndex * 2, rowIndex * 2 + 2).map((service) => (
                  <CardFeaturedService
                    key={service._id}
                    _id={service._id}
                    name={service.name}
                    description={service.description}
                    image={service.image}
                  />
                ))}
              </div>
              {rowIndex < Math.ceil(services.length / 2) - 1 && (
                <div className="border-b border-[#FFFFFF1A] my-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
