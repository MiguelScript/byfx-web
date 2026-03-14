import { getProyectsByServiceId } from "@/sanity/sanity-utils";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const serviceData = await getProyectsByServiceId({ _id: id });

  console.log(serviceData);
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <div className="app-container mx-auto px-4 xl:px-16 py-16 xl:py-24">
        {/* Hashtag */}
        <div className="text-center mb-8">
          <span className="gradient-text text-sm xl:text-base font-mono">
            #Marcas&Empresas
          </span>
        </div>

        {/* Service Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-6xl font-bold uppercase tracking-wider mb-8 font-mono">
            {serviceData.name}
          </h1>

          {/* Service Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg xl:text-xl leading-relaxed text-[#D1D5DB] mb-4">
              {serviceData.description}
            </p>
          </div>
        </div>

        {/* Project Tags */}
        {serviceData.proyects && serviceData.proyects.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
            {serviceData.proyects.map((project, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF33] hover:bg-[#FFFFFF44] transition-colors duration-200 px-6 py-3 rounded-full"
              >
                <span className="text-white text-sm xl:text-base font-medium">
                  {project.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
