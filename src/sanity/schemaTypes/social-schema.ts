const socialNetworks = {
	name: "social-networks",
	title: "Redes Sociales",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nombre",
			type: "string",
			options: {
				list: [
					{ title: "Facebook", value: "facebook" },
					{ title: "Tiktok", value: "tiktok" },
					{ title: "Instagram", value: "instagram" },
					{ title: "Twitter", value: "twitter" },
					{ title: "Youtube", value: "youtube" },
					{ title: "Whatsapp", value: "whatsapp" },
				],
			},
		},
		{
			name: "url",
			title: "URL",
			type: "url",
		},
		{
			name: "showInHome",
			title: "Mostrar en home",
			type: "boolean",
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
			name: "imgSize",
			title: "Tamaño de la imagen",
			type: "number",
		},
		{
			name: "position",
			title: "Posición",
			type: "number",
		},
	],
};

export default socialNetworks;
