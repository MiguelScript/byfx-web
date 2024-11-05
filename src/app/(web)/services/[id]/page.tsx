import { getService } from "@/sanity/sanity-utils";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	const service = await getService({ _id: id });

	return <div className="py-4">{service.name}</div>;
}
