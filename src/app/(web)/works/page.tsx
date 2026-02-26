import Footer from "@/components/footer/Footer";
import { WorksGrid } from "@/components/works/WorksGrid";
import { getServices, getSocialInfoHome } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byfx | Trabajos",
};

export default async function Works() {
  const socialNetworks = await getSocialInfoHome();
  const services = await getServices();

  return (
    <>
      <div className="font-sans bg-[#181818]">
        <WorksGrid services={services} />

        <Footer socialNetworks={socialNetworks} />
      </div>
    </>
  );
}
