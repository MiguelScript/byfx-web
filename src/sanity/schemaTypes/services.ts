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
			name: "hashtag",
			title: "Hashtag",
			type: "string",
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
		},
		{
			name: "description",
			title: "Descripcion Preview",
			type: "string",
		},
		{
			name: "descriptionFullArray",
			title: "Descripción Completa",
			type: "array",
			of: [{ type: "block" }],
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
