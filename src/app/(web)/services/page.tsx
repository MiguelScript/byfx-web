import { CardService } from "@/components/cards/CardService";
import { getServices } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Byfx | Servicios",
};

export default async function Page() {
	const services = await getServices();

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-y-8 mx-auto gap-x-12">
				{services.map((service) => (
					<CardService
						key={service._id}
						_id={service._id}
						name={service.name}
						description={service.description}
						image={service.image}
					/>
				))}
			</div>
			<div className="py-4"></div>
		</>
	);
}
