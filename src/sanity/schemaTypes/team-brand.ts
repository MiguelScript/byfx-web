const teamBrand = {
	name: "team-brand",
	title: "Marcas",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nombre",
			type: "string",
		},
		{
			name: "image",
			title: "Imagen",
			type: "image",
			options: {
				hotspot: true, // Opcional: permite recortar imágenes
			},
		},
		{
			name: "size",
			title: "tamaño (en px)",
			type: "number",
		},
	],
};

export default teamBrand;
