import { AboutUsHeroSection } from "@/components/aboutUs/AboutUsHeroSection";
import { OurCustomer } from "@/components/aboutUs/OurCustomer";
import Footer from "@/components/footer/Footer";
import { AudioPlayer } from "@/components/player/AudioPlayer";
import { EquitmentSection } from "@/components/sections/EquitmentSection";
import { getSocialInfoHome, getTeamContent, getWhatsappLink } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byfx | ACERCA DE BYFX",
};

export default async function Team() {
  const teamContent = await getTeamContent();
  console.log(teamContent);
  const audio = teamContent.audio.asset.url;
  const { url: whatsappLink } = await getWhatsappLink();
  const socialNetworks = await getSocialInfoHome();

  return (
    <>
      <div className="pt-6 font-sans">
        <AboutUsHeroSection />
        <div className="bg-[#181818] z-10 w-full relative ">
          <div className="flex justify-center pt-16 pb-6">
            <AudioPlayer
              audio={audio}
              classNames={{
                container: "flex w-fit mt-6 mb-2 xl:mt-4",
              }}
            />
          </div>

          <EquitmentSection equitment={teamContent.equitment} />
          <OurCustomer whatsappLink={whatsappLink} />
          <Footer socialNetworks={socialNetworks} whatsappLink={whatsappLink} />
        </div>
      </div>
    </>
  );
}
