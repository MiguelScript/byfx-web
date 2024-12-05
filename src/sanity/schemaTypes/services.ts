const services = {
	name: "services",
	title: "Servicios",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nombre",
			type: "string",
		},
		{
			name: "description",
			title: "Descripcion",
			type: "string",
		},
		{
			name: "image",
			title: "Imagen",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "position",
			title: "Posición",
			type: "number",
		},
		{
			name: "proyects",
			title: "Proyectos",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "proyects" }],
				},
			],
		},
	],
};

export default services;
