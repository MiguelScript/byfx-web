import { getProyectsByServiceId } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const serviceData = await getProyectsByServiceId({ _id: id });

  if (!serviceData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <div className="app-container mx-auto px-4 xl:px-16 py-16 xl:py-24">
        {/* Hashtag */}
        <div className="text-center mb-8">
          <span className="gradient-text text-sm xl:text-base font-mono">
            {serviceData.hashtag}
          </span>
        </div>

        {/* Service Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-6xl font-bold uppercase tracking-wider mb-8 font-mono">
            {serviceData.name}
          </h1>

          {/* Service Description with Highlight */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg xl:text-xl leading-relaxed text-[#D1D5DB] mb-4">
              {serviceData.description.split(serviceData.hashtag).map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-white font-semibold">
                      {serviceData.hashtag}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Project Tags */}
        {serviceData.tags && serviceData.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
            {serviceData.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF33] hover:bg-[#FFFFFF44] transition-colors duration-200 px-6 py-3 rounded-full"
              >
                <span className="text-white text-sm xl:text-base font-medium">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
