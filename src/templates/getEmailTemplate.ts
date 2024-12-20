import fs from "fs";
import path from "path";

const templatePath = path.resolve(process.cwd(), "src", "templates", "emailTemplate.ejs");

let emailTemplate: string;
try {
	emailTemplate = fs.readFileSync(templatePath, "utf8");
} catch (error) {
	console.error("Error reading email template file:", error);
	throw new Error("Email template file not found");
}

export { emailTemplate };

