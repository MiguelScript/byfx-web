import { transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

interface EmailRequestBody {
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

export async function POST(req: Request) {
      const body: EmailRequestBody = await req.json();
      const { to, subject, text, html } = body;

	try {
		await transporter.sendMail({
			from: "acostalugo.m@gmail.com" as string, // Dirección de origen
			to, // Dirección de destino
			subject, // Asunto del correo
			text, // Contenido en texto plano
			html, // Contenido en HTML
		});

		return NextResponse.json({
			status: "success",
			data: { message: "Correo enviado con éxito" },
		});
	} catch (error) {
		console.error("Error al enviar correo:", error);

		return NextResponse.json({
			status: "error",
			data: { message: "Error al enviar el correo", error },
		});
	}
}
