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
			name: "description",
			title: "Descripción",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "equitment",
			title: "Equipos",
			type: "array",
			of: [
				{
					name: "image",
					title: "Imagen",
					type: "image",
					
				},
			],
		},
	],
};

export default team;
