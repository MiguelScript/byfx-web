import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function ReviewsSection() {
  return (
    <div className="mt-16 py-24 relative z-10 bg-[#191919]">
      <p className="text-[#FFFFFF] font-bold text-center font-mono 2xl:text-[50px]">
        Opiniones
      </p>
      <div className="py-4 flex justify-center">
        <Link
          href="/works"
          className="text-center text-[#FFFFFF] underline hover:opacity-80 flex items-center"
        >
          Dejar mi opinión
          <ArrowRightIcon className="w-6 h-6 ml-2" />
        </Link>
      </div>
    </div>
  );
}
