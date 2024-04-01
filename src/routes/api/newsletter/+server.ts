import { json } from "@sveltejs/kit";
import {
    baserowClient,
    type BaserowNewsletterItem,
    newsletterTableId,
} from "$lib/server/baserow.js";

/**
 * POST a form submission for the newsletter form
 * Appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    const submissionTime = new Date().toISOString();
    const data: BaserowNewsletterItem = { field_46: body.email, field_47: submissionTime };
    const response = await baserowClient.createRow(newsletterTableId, data);
    if (response.status !== 200) {
        return json(
            { error: response.data.error, detail: response.data.detail },
            { status: response.status }
        );
    } else {
        return json({ message: "Success" }, { status: 200 });
    }
};
