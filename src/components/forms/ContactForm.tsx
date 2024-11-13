"use client";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { useFormik } from "formik";
import { InputText } from "../inputs/InputText";
import { Button } from "../buttons/button";
import { ContactFormProps } from "@/types/contactForm";
import { InputPhone } from "../inputs/InputPhone";
import { InputTextArea } from "../inputs/InputTextArea";
import { LabelInputForm } from "../inputs/LabelInputForm";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

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

	const formik = useFormik({
		initialValues,
		onSubmit: (values) => sendForm(values),
		validationSchema: contactFormSchema,
	});

	const {
		handleSubmit,
		isSubmitting,
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
				<div className="flex flex-col xl:grid xl:grid-cols-2 gap-x-6 gap-y-2 ">
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
						text="Correo electrónico"
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
					<div className="my-1">
						<LabelInputForm
							label={"País"}
							htmlFor={"country"}
							extraClass="ml-4   font-normal text-sm !text-[#F3F3F3]"
						/>
						<Select
							onValueChange={(e) => {
								setFieldValue("country", e);
							}}
							name="country"
						>
							<SelectTrigger
								className={`mt-2 min-h-[40px] rounded-[10px] bg-[#1B1B1B66] disabled:bg-gray-900 border-none ${values.country === "" ? "text-[#888888]" : "text-[#F3F3F3]"}`}
							>
								<SelectValue placeholder="Seleccione un país" className="" />
							</SelectTrigger>
							<SelectContent className="rounded-[10px] bg-[#252727] disabled:bg-gray-900 border-none text-[#F3F3F3]">
								<SelectItem value="venezuela">Venezuela</SelectItem>
								<SelectItem value="chile">Chile</SelectItem>
								<SelectItem value="colombia">Colombia</SelectItem>
							</SelectContent>
						</Select>
					</div>
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
					<div className="my-1">
						<LabelInputForm
							label={"Tipo de servicio"}
							htmlFor={"serviceType"}
							extraClass="ml-4   font-normal text-sm !text-[#F3F3F3]"
						/>
						<Select
							onValueChange={(e) => {
								setFieldValue("serviceType", e);
							}}
							name="serviceType"
							defaultValue={"video"}
						>
							<SelectTrigger
								className={`mt-2 min-h-[40px] rounded-[10px] bg-[#1B1B1B66] placeholder:text-[#888888] disabled:bg-gray-900 border-none ${values.serviceType === "" ? "text-[#888888] " : "text-[#F3F3F3]"}`}
							>
								<SelectValue placeholder="Seleccione..." />
							</SelectTrigger>
							<SelectContent className="rounded-[10px] bg-[#252727] disabled:bg-gray-900 border-none text-[#F3F3F3]">
								<SelectItem value="video">Video</SelectItem>
								<SelectItem value="branding">Branding</SelectItem>
								<SelectItem value="web">Diseño web</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<InputTextArea
						text="Describa su proyecto"
						type="text"
						id="proyectDescription"
						name="proyectDescription"
						placeholder="Describa su proyecto"
						value={values.proyectDescription ?? ""}
						onChange={handleChange}
						error={errors.proyectDescription}
						touched={touched.proyectDescription}
						onBlur={handleBlur}
						extraClass={""}
						containerExtraClass="min-h-[70px] col-span-2"
					/>
				</div>
				<div className="flex mt-8 gap-4 justify-center font-mono tracking-[0.25em] text-lg">
					<Button variant="dark" type="submit" disabled={isSubmitting} classNames="!px-16">
						<p className="">Enviar</p>
					</Button>
					<Button variant="dark" classNames="hidden lg:flex">
						<a href={whatsapp} target="_blank" className="text-[#ACFF6A]">
							Ir a whatsapp
						</a>
					</Button>
				</div>

			</form>
		</div>
	);
};
