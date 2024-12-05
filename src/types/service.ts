type service = {
	_id: string;
	name: string;
	description: string;
	position: number;
	image: string;
	proyects: proyect[];
};

export type proyect = {
	_id: string;
	client: string;
	title: string;
	resourceType: string;
	link: string;
	image: string;
};

export default service;
