"use client";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { useFormik } from "formik";
import { InputText } from "../inputs/InputText";
import { Button } from "../buttons/button";
import { ContactFormProps } from "@/types/contactForm";
import { InputPhone } from "../inputs/InputPhone";
import { InputTextArea } from "../inputs/InputTextArea";
/* import { LabelInputForm } from "../inputs/LabelInputForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"; */
import { useState } from "react";

const initialValues: ContactFormProps = {
  fullName: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  serviceType: "",
  proyectDescription: "",
};

const sendForm = async (formData: ContactFormProps): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: process.env.NEXT_PUBLIC_EMAIL_USER,
        subject: `Hola, quiero una demo - ${formData.fullName}`,
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        country: formData.country,
        phone: formData.phone,
        proyectDescription: formData.proyectDescription,
      }),
    });

    if (response.ok) {
      return { success: true, message: "¡Correo enviado con éxito! Nos pondremos en contacto pronto." };
    } else {
      return { success: false, message: "Error al enviar el correo. Por favor, intenta nuevamente." };
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    return { success: false, message: "Error de conexión. Por favor, verifica tu conexión a internet." };
  }
};


export const ContactForm = ({ countries }: { countries: string }) => {
  console.log(countries);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      setMessage(null);
      const result = await sendForm(values);
      setIsLoading(false);
      
      if (result.success) {
        setMessage({ type: 'success', text: result.message });
        resetForm();
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    },
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
      <h3 className="text-center mb-6 font-mono text-xl xl:text-4xl !font-normal mt-12">
        Cotiza tu producción
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 xl:space-y-6">
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

          {/* <div className="my-1">
            <LabelInputForm
              label={"País"}
              htmlFor={"country"}
              extraClass="font-normal text-base !text-[#FFFFFF]"
            />
            <Select
              onValueChange={(e) => {
                setFieldValue("country", e);
              }}
              name="country"
            >
              <SelectTrigger
                className={`mt-2 min-h-[40px] rounded-[0px] bg-[#FBFBFB]/20 disabled:bg-gray-900 border-none ${values.country === "" ? "text-[#FFFFFFB2]" : "text-[#F3F3F3]"}`}
              >
                <SelectValue placeholder="Seleccione un país" className="" />
              </SelectTrigger>
              <SelectContent className="rounded-[0px] bg-[#252727] disabled:bg-gray-900 border-none text-[#F3F3F3]">
                {countriesOptions.map((country: string) => (
                  <SelectItem
                    key={country}
                    value={country}
                    className="capitalize"
                  >
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          {/* <div className="my-1">
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
							defaultValue={servicesList[0]._id}
						>
							<SelectTrigger
								className={`mt-2 min-h-[40px] rounded-[10px] bg-[#1B1B1B66] placeholder:text-[#888888] disabled:bg-gray-900 border-none ${values.serviceType === "" ? "text-[#888888] " : "text-[#F3F3F3]"}`}
							>
								<SelectValue placeholder="Seleccione..." />
							</SelectTrigger>
							<SelectContent className="rounded-[10px] bg-[#252727] disabled:bg-gray-900 border-none text-[#F3F3F3]">
								{servicesList.map(
									(service: Pick<service, "_id" | "name" | "position">) => (
										<SelectItem key={service._id} value={service._id}>
											{service.name}
										</SelectItem>
									)
								)}
							</SelectContent>
						</Select>
						{touched.serviceType && errors.serviceType && (
							<span className="text-sm text-red-500 break-words">
								{errors.serviceType}
							</span>
						)}
					</div> */}
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
        
        {message && (
          <div className={`mt-6 p-4 rounded-lg text-center font-mono tracking-wider ${
            message.type === 'success' 
              ? 'bg-[#ACFF6A]/20 text-[#ACFF6A] border border-[#ACFF6A]/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {message.text}
          </div>
        )}
        
        <div className="flex mt-8 gap-4 justify-center font-mono  text-lg xl:text-xl">
          <Button
            type="submit"
            disabled={isSubmitting}
            classNames="w-full"
            isLoading={isLoading}
          >
            <p className="">Enviar</p>
          </Button>
        </div>
      </form>
    </div>
  );
};
