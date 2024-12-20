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

		const htmlToSend = await ejs.render(emailTemplate, rest);

		const mailOptions = {
			from: process.env.NEXT_PUBLIC_EMAIL_USER ?? "info@byfx.pro",
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
		return NextResponse.json({
			status: "error",
			data: { message: "Error al enviar el correo", error },
		});
	}
}
