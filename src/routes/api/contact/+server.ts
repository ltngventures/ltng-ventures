import { EMAIL_RECIPIENTS_GENERAL } from "$lib/data/emailRecipients.js";
import { sendgrid } from "$lib/server/sendgrid";
import { json } from "@sveltejs/kit";
import { baserowClient, contactTableId, type BaserowContactItem } from "$lib/server/baserow.js";

/**
 * POST a form submission for the contact form
 * This sends notification emails and appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    const submissionTimeFormatted = new Date().toLocaleString("en-US");
    const submissionTime = new Date().toISOString();

    const data: BaserowContactItem = {
        field_49: body.name,
        field_50: body.email,
        field_51: submissionTime,
        field_52: body.message,
    };

    try {
        const response = await baserowClient.createRow(contactTableId, data);

        if (response.status !== 200) {
            return json(
                { error: response.data.error, detail: response.data.detail },
                { status: response.status }
            );
        } else {
            // Send email notification
            const email = {
                to: EMAIL_RECIPIENTS_GENERAL,
                from: "Lightning Ventures Website <hello@ltng.ventures>",
                templateId: "d-0d44bba65a074d6c87765ac69932b566",
                dynamicTemplateData: {
                    name: body.name,
                    email: body.email,
                    message: body.message,
                    submissionTime: submissionTimeFormatted,
                },
            };

            await sendgrid.send(email);

            return json({ message: "Success" }, { status: 200 });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        return json({ error: error.message });
    }
};
