const trabajos = {
	name: "trabajos",
	title: "Trabajos",
	type: "document",
	fields: [
		{
			name: "titulo",
			title: "Título",
			type: "string",
		},
		{
			name: "cliente",
			title: "Cliente",
			type: "string",
		},
		{
			name: "servicio",
			title: "Tipo de servicio",
			type: "reference",
			to: [{ type: "services" }],
		},
		{
			name: "imagen",
			title: "Imagen de portada",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "recursos",
			title: "Recursos",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
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
							hidden: ({ parent }: { parent: { resourceType?: string } }) => parent?.resourceType !== "link",
						},
						{
							name: "file",
							title: "Archivo",
							type: "file",
							options: {
								accept: ".jpg,.jpeg,.png,.gif,.svg,.mp4,.mov,.avi,.wmv",
							},
							hidden: ({ parent }: { parent: { resourceType?: string } }) => parent?.resourceType !== "file",
						},
					],
				},
			],
		},
	],
};

export default trabajos;
