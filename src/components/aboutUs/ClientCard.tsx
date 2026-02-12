import Image from "next/image";

interface ClientCard {
  icon: string;
  title: string;
  description: string;
}

export function ClientCard({ icon, title, description }: ClientCard) {
  return (
    <div className="bg-[#1A1A1A] rounded-[20px] p-6 border border-[#FFFFFF1A] hover:border-[#3A3A3A] transition-colors">
      <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex items-center justify-center mb-6">
        <Image src={icon} width={24} height={24} alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-[#9E9E9E] text-base leading-4">
        {description}
      </p>
    </div>
  );
}
