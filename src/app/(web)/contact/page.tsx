import { CardGeneral } from "@/components/cards/CardGeneral";
import { Social } from "@/components/footer/Social";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSocialInfo } from "@/sanity/sanity-utils";

export default async function Contact() {
	const socialNetworks = await getSocialInfo();
	const whatsappLink =
		socialNetworks.find((network) => network.name === "whatsapp")?.url ?? "";
	return (
		<section className="grow flex flex-col">
			<div className="grow flex items-center justify-center">
				<div className="relative w-full lg:max-w-3xl xl:max-w-3xl ">
					<CardGeneral extraClass="!bg-[#f2f2f21c] w-full w-full rounded-[20px]">
						<ContactForm whatsapp={whatsappLink} />
					</CardGeneral>
					<div className="card-bg-1 absolute -z-10 top-0 w-full h-full rounded-[20px]"></div>
				</div>
			</div>
			<div className="pt-6 pb-20">
				<Social socialNetworks={socialNetworks} />
			</div>
		</section>
	);
}
