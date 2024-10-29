import { CardService } from "@/components/cards/CardService";
import { getServices } from "@/sanity/sanity-utils";

export default async function Page() {
	const services = await getServices();

	return (
		<>
			<div className="grid grid-cols-1 xl:grid-cols-3 mt-10 gap-y-8 mx-auto gap-x-12">
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
