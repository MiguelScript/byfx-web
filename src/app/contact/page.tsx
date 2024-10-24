import { CardGeneral } from "@/components/cards/CardGeneral";
import { Social } from "@/components/footer/Social";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Contact() {
	return (
		<section className="grow flex flex-col">
			<div className="grow flex items-center justify-center">
				<CardGeneral extraClass="w-full lg:max-w-3xl xl:max-w-4xl rounded-[20px]">
					<ContactForm />
				</CardGeneral>
			</div>
			<div className="pt-6 pb-20">
				<Social />
			</div>
		</section>
	);
}
