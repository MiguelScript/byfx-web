"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="#F4B400" className="w-5 h-5">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.878c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-label="Google">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export type ReviewCardProps = {
  name: string;
  photoUrl?: string;
  initials: string;
  timeAgo: string;
  rating: number;
  text: string;
};

function ReviewCard({
  name,
  photoUrl,
  initials,
  timeAgo,
  rating,
  text,
}: ReviewCardProps) {
  return (
    <div className="bg-[#FFFFFF] py-5 px-6 flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full shrink-0 object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold font-mono">
                {initials}
              </span>
            </div>
          )}
          <div className="min-w-0">
            <p className="text-[#1A1A1A] font-semibold text-sm leading-tight truncate">
              {name}
            </p>
            <p className="text-[#6B7280] text-xs">{timeAgo}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <p className="text-[#374151] text-sm leading-relaxed line-clamp-3">
        {text}
      </p>
    </div>
  );
}

export function ReviewsCarousel({ cards }: { cards: ReviewCardProps[] }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        {/*  <div className="custom-prev-reviews cursor-pointer shrink-0 hidden xl:block">
          <Image src="/assets/icons/arrow.svg" alt="prev" width={12} height={12} className="rotate-180" />
        </div> */}
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop={cards.length > 3}
          navigation={{
            nextEl: ".custom-next-reviews",
            prevEl: ".custom-prev-reviews",
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="h-auto">
              <ReviewCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/*  <div className="custom-next-reviews cursor-pointer shrink-0 hidden xl:block">
          <Image src="/assets/icons/arrow.svg" alt="next" width={12} height={12} />
        </div> */}
      </div>
    </div>
  );
}
