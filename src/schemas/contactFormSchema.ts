import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
	fullName: Yup.string().required("El nombre es requerido"),
	email: Yup.string().required("El email es requerido"),
	company: Yup.string().required("La marca o empresa es requerido"),
	country: Yup.string().required("El país es requerido"),
	phone: Yup.string().required("El teléfono es requerido"),
	serviceType: Yup.string().required("El tipo de servicio es requerido"),
	proyectDescription: Yup.string(),
});
