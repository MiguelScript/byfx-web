import { AboutUsHeroSection } from "@/components/aboutUs/AboutUsHeroSection";
import { Button } from "@/components/buttons/button";
import { AudioPlayer } from "@/components/player/AudioPlayer";
import { EquitmentSection } from "@/components/sections/EquitmentSection";
import { getTeamContent, getWhatsappLink } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byfx | ACERCA DE BYFX",
};

export default async function Team() {
  const teamContent = await getTeamContent();
  console.log(teamContent);
  const audio = teamContent.audio.asset.url;
  const { url: whatsappLink } = await getWhatsappLink();

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
          <div className="max-h-8 mt-8">
            <Button classNames="flex">
              <a
                href={whatsappLink}
                target="_blank"
                className="text-[#ACFF6A] font-mono tracking-[0.25em] text-lg"
              >
                Ir a whatsapp
              </a>
            </Button>
          </div>
          <div className="py-6">
            <p>
              BYFX existe para resolver problemas de producción audiovisual.
              Nuestra misión es ofrecer soluciones adaptadas a cada proyecto,
              sin importar su formato, escala o complejidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
