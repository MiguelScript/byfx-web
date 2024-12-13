const proyects = {
	name: "proyects",
	title: "Proyectos",
	type: "document",
	fields: [
		{
			name: "client",
			title: "Cliente",
			type: "string",
		},
		{
			name: "title",
			title: "Proyecto",
			type: "string",
		},
		{
			name: "resourceType",
			title: "Tipo de recurso",
			type: "string",
			options: {
				list: [
					{ title: "Enlace", value: "link" },
					{ title: "Archivo", value: "file" },
				],
			},
		},
		{
			name: "link",
			title: "Enlace",
			type: "string",
			hidden: ({ document }: any) => document?.resourceType !== "link",
		},
		{
			name: "image",
			title: "Imagen",
			type: "image",
			options: {
				hotspot: true,
			},
			hidden: ({ document }: any) => document?.resourceType !== "file",
		},
	],
};

export default proyects;
