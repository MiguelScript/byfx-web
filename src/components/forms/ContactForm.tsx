"use client";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { useFormik } from "formik";
import { InputText } from "../inputs/InputText";
import { Button } from "../buttons/button";
import { ContactFormProps } from "@/types/contactForm";
import { InputPhone } from "../inputs/InputPhone";

const initialValues: ContactFormProps = {
	fullName: "",
	email: "",
	company: "",
	country: "",
	phone: "",
	serviceType: "",
	proyectDescription: "",
};

export const ContactForm = ({ whatsapp }: { whatsapp: string }) => {
	const sendForm = (values: ContactFormProps) => {
		console.log(values);
	};
	console.log(sendForm);
	const formik = useFormik({
		initialValues,
		onSubmit: () => console.log("object"),
		validationSchema: contactFormSchema,
	});

	const {
		handleSubmit,
		// isSubmitting,
		setFieldValue,
		handleChange,
		handleBlur,
		values,
		touched,
		errors,
	} = formik;

	return (
		<div className="px-6 xl:px-10 pt-4 pb-8">
			<h3 className="text-center mb-6 font-mono text-[27px] !font-normal tracking-[0.20em]">
				Contacto
			</h3>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-2 ">
					<InputText
						text="Nombre y Apellido"
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Nombre y Apellido"
						value={values.fullName ?? ""}
						onChange={handleChange}
						error={errors.fullName}
						touched={touched.fullName}
						onBlur={handleBlur}
						containerExtraClass="min-h-[70px]"
					/>
					<InputText
						text="Email"
						type="text"
						id="email"
						name="email"
						placeholder="example@example.com"
						value={values.email ?? ""}
						onChange={handleChange}
						error={errors.email}
						touched={touched.email}
						onBlur={handleBlur}
						containerExtraClass="min-h-[70px]"
					/>
					<InputText
						text="Nombre de la marca o empresa"
						type="text"
						id="company"
						name="company"
						placeholder="Byfx CA"
						value={values.company ?? ""}
						onChange={handleChange}
						error={errors.company}
						touched={touched.company}
						onBlur={handleBlur}
						containerExtraClass="min-h-[70px]"
					/>
					<InputText
						text="Nombre y Apellido"
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Nombre y Apellido"
						value={values.fullName ?? ""}
						onChange={handleChange}
						error={errors.fullName}
						touched={touched.fullName}
						onBlur={handleBlur}
						containerExtraClass="min-h-[70px]"
					/>
					<InputText
						text="País"
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Nombre y Apellido"
						value={values.country ?? ""}
						onChange={handleChange}
						error={errors.country}
						touched={touched.country}
						onBlur={handleBlur}
						containerExtraClass="min-h-[70px]"
					/>
					<InputPhone
						text="Número de teléfono de contacto"
						id="phone"
						name="phone"
						placeholder="Número de teléfono de contacto"
						value={values.phone ?? ""}
						onChange={(phone: string) => setFieldValue("phone", phone)}
						error={errors.phone}
						touched={touched.phone}
						onBlur={handleBlur}
						containerExtraClass="min-h-[70px]"
					/>
				</div>
				<div className="flex mt-8 gap-4 justify-center font-mono tracking-[0.25em] text-lg">
					<Button variant="dark">
						<p className="">Enviar</p>
					</Button>
					<Button variant="dark">
						<a href={whatsapp} className="text-[#ACFF6A]">
							Ir a whatsapp
						</a>
					</Button>
				</div>
			</form>
		</div>
	);
};
