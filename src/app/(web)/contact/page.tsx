import { Button } from "@/components/buttons/button";
import { CardGeneral } from "@/components/cards/CardGeneral";
import { Social } from "@/components/footer/Social";
import { ContactForm } from "@/components/forms/ContactForm";
import { getQuoteContent, getServicesList, getSocialInfo } from "@/sanity/sanity-utils";

export default async function Contact() {
	const socialNetworks = await getSocialInfo();
	const quoteContent = await getQuoteContent();
	const servicesList = await getServicesList();
	
	const whatsappLink =
		socialNetworks.find((network) => network.name === "whatsapp")?.url ?? "";
	return (
		<section className="grow flex flex-col">
			<div className="px-4 lg:px-0 grow flex flex-col items-center justify-center">
				<div className="relative w-full lg:max-w-3xl xl:max-w-3xl ">
					<CardGeneral extraClass="!bg-[#f2f2f21c] w-full w-full rounded-[20px]">
						<ContactForm whatsapp={whatsappLink} countries={quoteContent.countries} servicesList={servicesList}/>
					</CardGeneral>

					<div className="card-bg-1 absolute -z-10 top-0 w-full h-full rounded-[20px]"></div>
				</div>
				<Button variant="dark" classNames="lg:hidden mt-4 font-mono tracking-[0.25em] text-lg backdrop-blur-2xl mt-8 mb-4">
					<a href={whatsappLink} target="_blank" className="text-[#ACFF6A]">
						Ir a whatsapp
					</a>
				</Button>
			</div>
			<div className="pt-6 pb-16 hidden lg:block">
				<Social socialNetworks={socialNetworks} />
			</div>
		</section>
	);
}
