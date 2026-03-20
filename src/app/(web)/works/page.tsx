import Footer from "@/components/footer/Footer";
import { WorksGrid } from "@/components/works/WorksGrid";
import {
  getTrabajosWithRecursos,
  getSocialInfoHome,
  getWhatsappLink,
} from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byfx | Trabajos",
};

export default async function Works() {
  const socialNetworks = await getSocialInfoHome();
  const trabajos = await getTrabajosWithRecursos();
  const { url: whatsappLink } = await getWhatsappLink();

  return (
    <>
      <div className="font-sans bg-[#181818]">
        <WorksGrid trabajos={trabajos} />

        <Footer socialNetworks={socialNetworks} whatsappLink={whatsappLink} />
      </div>
    </>
  );
}
