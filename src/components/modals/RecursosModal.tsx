"use client";

import { useState } from "react";
import { recurso } from "@/types/trabajo";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

import "swiper/css";
import "swiper/css/navigation";

interface RecursosModalProps {
  isOpen: boolean;
  onClose: () => void;
  recursos: recurso[];
  titulo: string;
  cliente: string;
}

const imgExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
const svgExtensions = ["svg"];

const getFileType = (link: string): "img" | "video" | "svg" => {
  const parts = link.split(".");
  const ext = parts[parts.length - 1].toLowerCase();
  if (imgExtensions.includes(ext)) return "img";
  if (svgExtensions.includes(ext)) return "svg";
  return "video";
};

const RecursoSlide = ({ recurso }: { recurso: recurso }) => {
  const link =
    recurso.resourceType === "file" ? recurso.file?.asset.url : recurso.link;

  if (!link) return null;

  const fileType = getFileType(link);

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

  return (
    <div className="px-2 py-2 xl:py-3 xl:px-4 bg-[#F2F2F21A] rounded-[20px] flex justify-center">
      <div
        className={`w-full ${fileType === "img" ? "h-[200px]" : "h-[400px]"} md:h-[500px] 2xl:w-[1100px] 2xl:h-[600px] overflow-hidden flex justify-center items-center`}
      >
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
            className="rounded-[20px]"
          />
        )}
        {fileType === "img" && (
          <Image
            width={800}
            height={700}
            src={link}
            alt={recurso._key}
            className="rounded-[20px] object-contain w-full h-full"
          />
        )}
        {fileType === "svg" && (
          <Image
            width={400}
            height={400}
            src={link}
            alt={recurso._key}
            className="rounded-[20px] bg-contain"
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
  titulo,
  cliente,
}: RecursosModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const validRecursos = recursos.filter((r) => {
    const link = r.resourceType === "file" ? r.file?.asset?.url : r.link;
    return !!link;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full p-0 bg-[#1A1A1A] border-[#FFFFFF1A] rounded-[20px] overflow-hidden">
        <DialogHeader className="p-6 border-b border-[#FFFFFF1A]">
          <DialogTitle className="text-xl font-bold text-white font-mono uppercase tracking-wider">
            {titulo}
          </DialogTitle>
          {cliente && (
            <p className="text-[#FFFFFFB2] font-mono text-sm mt-1">{cliente}</p>
          )}
        </DialogHeader>

        {/* Carousel */}
        <div className="p-4 xl:p-6">
          {validRecursos.length > 0 ? (
            <div className="flex items-center gap-4">
              <div className="custom-prev-rec cursor-pointer shrink-0 hidden xl:block">
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="prev"
                  width={12}
                  height={12}
                  className="rotate-180"
                />
              </div>
              <div className="max-w-4xl">
                <Swiper
                  modules={[Navigation, A11y]}
                  slidesPerView={1}
                  loop={validRecursos.length > 1}
                  spaceBetween={20}
                  navigation={{
                    nextEl: ".custom-next-rec",
                    prevEl: ".custom-prev-rec",
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

              <div className="custom-next-rec cursor-pointer shrink-0 hidden xl:block">
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="next"
                  width={12}
                  height={12}
                />
              </div>
            </div>
          ) : (
            <div className="text-white text-center py-12">
              <p className="text-lg font-mono">No hay recursos disponibles</p>
            </div>
          )}

          {/* Slide counter */}
          {validRecursos.length > 1 && (
            <p className="text-center text-[#FFFFFF66] font-mono text-sm mt-4">
              {activeIndex + 1} / {validRecursos.length}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
