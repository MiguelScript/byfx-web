import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	host: "mail.privateemail.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.NEXT_PUBLIC_EMAIL_USER, // tu correo de Namecheap
		pass: process.env.EMAIL_PASS, // tu contraseña de Namecheap
	},
});

// Opcional: verifica la conexión
transporter.verify().then(() => {
	console.log("Listo para enviar correos");
});
