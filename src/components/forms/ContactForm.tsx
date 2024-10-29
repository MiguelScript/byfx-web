"use client";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { useFormik } from "formik";
import { InputText } from "../inputs/InputText";
import { Button } from "../buttons/button";

interface ContactFormProps {
	fullName: string;
	email: string;
	company: string;
	country: string;
	phone: string;
	serviceType: string;
	proyectDescription: string;
}

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
		handleChange,
		handleBlur,
		values,
		touched,
		errors,
	} = formik;

	return (
		<div className="px-8  py-8">
			<h3 className="text-center mb-4 font-mono text-2xl tracking-[0.25em]">
				Contacto
			</h3>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 ">
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
						containerExtraClass="min-h-[80px]"
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
						containerExtraClass="min-h-[80px]"
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
						containerExtraClass="min-h-[80px]"
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
						containerExtraClass="min-h-[80px]"
					/>
					<InputText
						text="País"
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Nombre y Apellido"
						value={values.fullName ?? ""}
						onChange={handleChange}
						error={errors.fullName}
						touched={touched.fullName}
						onBlur={handleBlur}
						containerExtraClass="min-h-[80px]"
					/>
				</div>
				<div className="flex gap-4 justify-center font-mono tracking-[0.25em]">
					<Button>
						<p className="text-[#ACFF6A]">Enviar</p>
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
