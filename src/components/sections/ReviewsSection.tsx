import { getGooglePlaceReviews } from "@/lib/googlePlaces";
import { reviewsData } from "@/data/reviewsData";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReviewsCarousel, ReviewCardProps } from "./ReviewsCarousel";

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="#F4B400" className="w-5 h-5">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.878c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export async function ReviewsSection() {
  let cards: ReviewCardProps[] = [];
  let overallRating = 5.0;

  try {
    const data = await getGooglePlaceReviews();
    overallRating = data.rating;
    cards = data.reviews.map((r) => ({
      name: r.author_name,
      photoUrl: r.profile_photo_url || undefined,
      initials: getInitials(r.author_name),
      timeAgo: r.relative_time_description,
      rating: r.rating,
      text: r.text,
    }));
  } catch {
    cards = reviewsData.map((r) => ({
      name: r.name,
      initials: r.avatar,
      timeAgo: r.timeAgo,
      rating: r.rating,
      text: r.text,
    }));
  }

  return (
    <div className="py-16 xl:py-24 bg-[#191919] z-10 relative">
      <div className="app-container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-white font-normal font-mono text-4xl xl:text-5xl uppercase tracking-normal mb-1">
            Opiniones Reales
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white text-xl font-normal leading-none mt-1">
              {overallRating.toFixed(1)}
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Cards carousel */}
        <ReviewsCarousel cards={cards} />
        <div className="py-4 flex justify-center mt-4">
          <a
            href="https://maps.app.goo.gl/4311111111111111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-[#FFFFFF] underline hover:opacity-80 flex items-center"
          >
            Dejar mi opinión
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
