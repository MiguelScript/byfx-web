import { ContactFormProps } from "@/types/contactForm";
import { NextResponse } from "next/server";
import ejs from "ejs";
import { transporter } from "@/lib/nodemailer";
import { emailTemplate } from "@/templates/getEmailTemplate";

type EmailRequestBody = ContactFormProps & {
	to: string;
	subject: string;
};

export async function POST(req: Request) {
	try {
		const body: EmailRequestBody = await req.json();
		const { to, subject, ...rest } = body;

		// Add default values for optional fields to prevent EJS errors
		const templateData = {
			...rest,
			country: rest.country || '',
			serviceType: rest.serviceType || '',
		};

		const htmlToSend = await ejs.render(emailTemplate, templateData);

		const mailOptions = {
			from: process.env.GMAIL_USER ?? "Byfx.pro@gmail.com",
			to: to,
			subject: subject,
			html: htmlToSend,
		};

		const info = await transporter.sendMail(mailOptions);

		return NextResponse.json({
			status: "success",
			data: { message: "Correo enviado con éxito", info },
		});
	} catch (error) {
		console.error("Error completo al enviar correo:", error);
		return NextResponse.json({
			status: "error",
			email: process.env.GMAIL_USER,
			passLength: process.env.GMAIL_APP_PASSWORD?.length,
			errorMessage: error instanceof Error ? error.message : "Unknown error",
			errorStack: error instanceof Error ? error.stack : undefined,
			data: { message: "Error al enviar el correo", error },
		}, { status: 500 });
	}
}
