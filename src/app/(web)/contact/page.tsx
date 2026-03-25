import { ContactPageClient } from "@/components/contact/ContactPageClient";
import { getQuoteContent } from "@/sanity/sanity-utils";

export default async function ContactPage() {
  const { countries } = await getQuoteContent();

  return <ContactPageClient countries={countries} />;
}
