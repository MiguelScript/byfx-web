import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_APP_PASSWORD,
	},
});

// Opcional: verifica la conexión
transporter.verify()
	.then(() => {
		console.log("✅ Listo para enviar correos con Gmail");
		console.log("📧 Usuario configurado:", process.env.GMAIL_USER);
	})
	.catch((error) => {
		console.error("❌ Error al verificar conexión con Gmail:", error.message);
		console.log("Usuario:", process.env.GMAIL_USER);
		console.log("Password length:", process.env.GMAIL_APP_PASSWORD?.length);
	});
