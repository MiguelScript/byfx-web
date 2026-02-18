import Image from "next/image";

interface ClientCard {
  icon: string;
  title: string;
  description: string;
}

export function ClientCard({ icon, title, description }: ClientCard) {
  return (
    <div className="bg-[#1A1A1A] bg-opacity-80 hover:bg-opacity-100 rounded-[20px] p-6 border border-[#FFFFFF1A] transition-all duration-300 group">
      <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-6">
        <Image
          src={icon}
          width={24}
          height={24}
          alt={title}
          className="opacity-50 group-hover:opacity-100"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">
        <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6277E3] group-hover:via-[#E66F47] group-hover:to-[#ACFF6A] group-hover:bg-clip-text transition-all duration-700 ease-in-out">
          {title}
        </span>
      </h3>
      <p className="text-[#8C8C8C] group-hover:text-[#FFFFFF] text-lg leading-5">
        {description}
      </p>
    </div>
  );
}
