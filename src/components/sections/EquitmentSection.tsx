import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

export function EquitmentSection({
  equitment,
}: {
  equitment: {
    name: string;
    image: string;
    size: number;
  }[];
}) {
  return (
    <div className="flex flex-col items-center mt-16 app-container mx-auto">
      <p className="text-base lg:text-lg font-normal text-[#FFFFFF4D]">
        Equipos con los que trabajamos
      </p>
      <div className="flex flex-wrap gap-8 w-full justify-between pt-6">
        {equitment.map((item, idx: number) => (
          <div key={idx} className="flex items-center justify-center w-fit">
            <Image
              src={urlFor(item.image).url()}
              width={item.size}
              height={item.size}
              alt="logo"
              className="opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
