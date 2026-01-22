import { getServices } from "@/sanity/sanity-utils";
import { CardFeaturedService } from "../cards/CardFeaturedService";

export default async function FeaturedServicesSection() {
  const services = await getServices();

  return (
    <div className="app-container mt-20 mx-auto">
      <div className="uppercase text-center font-mono text-4xl 2xl:text-[150px] leading-[107%] tracking-[0%] gradient-text">
        <p>Soluciones</p>
        <p>audiovisuales para</p>
        <p>marcas y para</p>
        <p>quienes las crean.</p>
      </div>
      <h2 className="text-center text-2xl 2xl:text-[50px] font-normal text-[#FFFFFF] font-mono mt-24 mb-8">
        Nuestros servicios
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto gap-x-8">
        {services.map((service) => (
          <CardFeaturedService
            key={service._id}
            _id={service._id}
            name={service.name}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
