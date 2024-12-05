import { ProyectCarousel } from "@/components/carousel/ProyectCarousel";
import { getProyectsByServiceId } from "@/sanity/sanity-utils";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	const { proyects } = await getProyectsByServiceId({ _id: id });

	return (
		<div className="xl:pt-12">
			{proyects && <ProyectCarousel proyects={proyects} />}
		</div>
	);
}
