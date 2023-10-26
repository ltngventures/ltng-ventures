import { spreadsheet } from "$lib/server/googleSheets";
import { json } from "@sveltejs/kit";

/**
 * POST a form submission for the newsletter form
 * Appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    const submissionTime = new Date().toLocaleString("en-US");
    try {
        // Add the submission to the right google sheet
        const contactWorksheet = spreadsheet.sheetsById["798756342"];
        await contactWorksheet.addRow({
            "Submission Date": submissionTime,
            Email: body.email,
        });

        return json({ message: "Success" }, { status: 200 });
    } catch (error: unknown) {
        console.log(error);
        return json({ error: error });
    }
};
