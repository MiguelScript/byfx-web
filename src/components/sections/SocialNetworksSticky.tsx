import Image from "next/image";
import { ButtonIcon } from "../buttons/ButtonIcon";
import socialNetworks from "@/types/socialNetwork";

const SOCIAL_ICON_CONFIG: Record<string, { path: string; size: number }> = {
  facebook: { path: "/assets/icons/facebook.svg", size: 22 },
  instagram: { path: "/assets/icons/instagram.svg", size: 22 },
  tiktok: { path: "/assets/icons/tiktok.svg", size: 20 },
  twitter: { path: "/assets/icons/twitter.svg", size: 22 },
  youtube: { path: "/assets/icons/youtube.svg", size: 24 },
  linkedin: { path: "/assets/icons/linkedin.svg", size: 22 },
  behance: { path: "/assets/icons/behance.svg", size: 22 },
};

const getSocialIconConfig = (networkName: string) => {
  return SOCIAL_ICON_CONFIG[networkName] || { path: "/assets/icons/default.svg", size: 22 };
};

interface SocialNetworksStickyProps {
  socialNetworks: socialNetworks[];
}

export function SocialNetworksSticky({ socialNetworks }: SocialNetworksStickyProps) {
  return (
    <div className="hidden lg:flex flex-col gap-5 sticky top-44 bottom-8 right-8 z-20 float-right pb-20 mr-8 h-fit">
      {socialNetworks.map((network) => {
        const config = getSocialIconConfig(network.name);
        return (
          <a href={network.url} target="_blank" key={network.name}>
            <ButtonIcon className="!bg-[#000000] rounded-full">
              <Image
                src={config.path}
                alt={network.name}
                height={config.size}
                width={config.size}
                className="text-[#FFFFFF] fill-[#FFFFFF]"
              />
            </ButtonIcon>
          </a>
        );
      })}
    </div>
  );
}
