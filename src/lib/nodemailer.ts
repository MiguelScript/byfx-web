import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		// user: process.env.GMAIL_USER,
		// pass: process.env.GMAIL_PASS,
		user: "acostalugo.m@gmail.com",
		pass: "gxvn tbfi osro xxev",
	},
});

// Opcional: verifica la conexión
transporter.verify().then(() => {
	console.log("Listo para enviar correos");
});
