const team = {
	name: "team",
	title: "Equipo",
	type: "document",
	fields: [
		{
			name: "title",
			title: "titulo",
			type: "string",
		},
		{
			name: "image",
			title: "Fotografía",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "description",
			title: "Descripción",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "audio",
			title: "audio",
			type: "file",
		},
		{
			name: "equitment",
			title: "Equipos",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "team-brand" }],
				},
			],
		},
	],
};

export default team;
