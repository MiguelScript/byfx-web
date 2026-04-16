"use client";

import { useState } from "react";
import { recurso } from "@/types/trabajo";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

import "swiper/css";
import "swiper/css/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

interface RecursosModalProps {
  isOpen: boolean;
  onClose: () => void;
  recursos: recurso[];
  titulo: string;
  cliente: string;
}

const imgExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
const svgExtensions = ["svg"];

const isStreamingUrl = (link: string): boolean =>
  /youtube\.com|youtu\.be|vimeo\.com/.test(link);

const getFileType = (link: string): "img" | "video" | "svg" => {
  if (isStreamingUrl(link)) return "video";
  const parts = link.split(".");
  const ext = parts[parts.length - 1].toLowerCase();
  if (imgExtensions.includes(ext)) return "img";
  if (svgExtensions.includes(ext)) return "svg";
  return "video";
};

const toEmbedUrl = (link: string): string => {
  try {
    const url = new URL(link);

    // YouTube
    if (url.hostname === "youtu.be") {
      const id = url.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") {
        const id = url.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : link;
      }
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.replace("/shorts/", "");
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.pathname.startsWith("/embed/")) {
        return link;
      }
    }

    // Vimeo
    if (url.hostname.includes("vimeo.com")) {
      if (url.pathname.startsWith("/video/")) {
        return `https://player.vimeo.com${url.pathname}`;
      }
      const id = url.pathname.replace(/^\//, "");
      if (id && /^\d+$/.test(id)) {
        return `https://player.vimeo.com/video/${id}`;
      }
      if (url.hostname === "player.vimeo.com") {
        return link;
      }
    }
  } catch {
    return link;
  }
  return link;
};

const RecursoSlide = ({ recurso }: { recurso: recurso }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);

  const link =
    recurso.resourceType === "file" ? recurso.file?.asset.url : recurso.link;

  if (!link) return null;

  const fileType = getFileType(link);

  const heightClass =
    fileType === "img"
      ? "h-[260px] sm:h-[320px] md:h-[80dvh]"
      : "h-[220px] sm:h-[300px] md:h-[420px]";

  return (
    <div className="px-1 py-2 xl:py-3 xl:px-4 flex justify-center">
      <div
        className={`relative w-full ${heightClass} overflow-hidden flex justify-center items-center`}
      >
        {/* Skeleton shimmer */}
        {!isLoaded && (
          <div className="absolute inset-0 rounded-[16px] overflow-hidden">
            <div className="w-full h-full bg-[#2a2a2a] animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer" />
          </div>
        )}

        {fileType === "video" && (
          <iframe
            width="100%"
            height="100%"
            src={toEmbedUrl(link)}
            title="video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
        {fileType === "img" && (
          <Image
            width={isLandscape ? 900 : 600}
            height={isLandscape ? 1000 : 1400}
            src={link}
            alt={recurso._key}
            className={`object-contain w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={(e) => {
              const img = e.currentTarget;
              setIsLandscape(img.naturalWidth >= img.naturalHeight);
              setIsLoaded(true);
            }}
          />
        )}
        {fileType === "svg" && (
          <Image
            width={400}
            height={400}
            src={link}
            alt={recurso._key}
            className={`bg-contain transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
    </div>
  );
};

export const RecursosModal = ({
  isOpen,
  onClose,
  recursos,
  /* titulo,
  cliente, */
}: RecursosModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const validRecursos = recursos.filter((r) => {
    const link = r.resourceType === "file" ? r.file?.asset?.url : r.link;
    return !!link;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-full p-0 overflow-hidden border-0 rounded-none h-[100dvh]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        {/*  <DialogHeader className="p-6">
          <DialogTitle className="text-xl font-bold text-white font-mono uppercase tracking-wider">
            {titulo}
          </DialogTitle>
          {cliente && (
            <p className="text-[#FFFFFFB2] font-mono text-sm mt-1">{cliente}</p>
          )}
        </DialogHeader> */}

        {/* Carousel */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4 xl:p-6 xl:pt-12">
          {validRecursos.length > 0 ? (
            <>
              <div className="flex items-center gap-2 xl:gap-4">
                {/* Flechas solo en desktop */}
                <div className="custom-prev-drawer cursor-pointer shrink-0 hidden xl:block group">
                  <div className="p-3 border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                    <Image
                      src="/assets/icons/arrow.svg"
                      alt="prev"
                      width={12}
                      height={12}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 xl:max-w-7xl xl:mx-auto">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    loop={validRecursos.length > 1}
                    spaceBetween={16}
                    navigation={{
                      nextEl: ".custom-next-drawer",
                      prevEl: ".custom-prev-drawer",
                    }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination-drawer",
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full"
                  >
                    {validRecursos.map((recurso) => (
                      <SwiperSlide key={recurso._key}>
                        <RecursoSlide recurso={recurso} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="custom-next-drawer cursor-pointer shrink-0 hidden xl:block group">
                  <div className="p-3 border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                    <Image
                      src="/assets/icons/arrow.svg"
                      alt="next"
                      width={12}
                      height={12}
                      className="rotate-180 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Dots en mobile / Contador en desktop */}
              <div className="mt-4 flex justify-center items-center">
                <div className="swiper-pagination-drawer xl:hidden" />
                <p className="hidden xl:block text-center text-[#FFFFFF66] font-mono text-sm">
                  {activeIndex + 1} / {validRecursos.length}
                </p>
              </div>
            </>
          ) : (
            <div className="text-white text-center py-12">
              <p className="text-base md:text-lg font-mono">
                No hay recursos disponibles
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
