import { SENDGRID_API_KEY } from "$env/static/private";
import mail from "@sendgrid/mail";

mail.setApiKey(SENDGRID_API_KEY);

export const sendgrid = mail;
