import Footer from "@/components/footer/Footer";
import { WorksGrid } from "@/components/works/WorksGrid";
import { getTrabajosWithRecursos, getSocialInfoHome } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byfx | Trabajos",
};

export default async function Works() {
  const socialNetworks = await getSocialInfoHome();
  const trabajos = await getTrabajosWithRecursos();

  return (
    <>
      <div className="font-sans bg-[#181818]">
        <WorksGrid trabajos={trabajos} />

        <Footer socialNetworks={socialNetworks} />
      </div>
    </>
  );
}
