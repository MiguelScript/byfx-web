export type GooglePlaceReview = {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
};

type PlaceDetailsResponse = {
  result?: {
    reviews?: GooglePlaceReview[];
    rating?: number;
  };
  status: string;
};

export async function getGooglePlaceReviews(): Promise<{
  reviews: GooglePlaceReview[];
  rating: number;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error("GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID must be set in environment variables.");
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&language=es&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Google Places API error: ${res.status}`);
  }

  const data: PlaceDetailsResponse = await res.json();

  if (data.status !== "OK" || !data.result) {
    throw new Error(`Google Places API returned status: ${data.status}`);
  }

  return {
    reviews: data.result.reviews ?? [],
    rating: data.result.rating ?? 5,
  };
}
