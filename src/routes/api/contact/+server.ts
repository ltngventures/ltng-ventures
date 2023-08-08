import { spreadsheet } from '$lib/server/googleSheets';
import { sendgrid } from '$lib/server/sendgrid';
import { json } from '@sveltejs/kit';

/**
 * POST a form submission for the contact form
 * This sends notification emails and appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    const submissionTime = new Date().toLocaleString('en-US');
    try {
        // Add the submission to the right google sheet
        const contactWorksheet = spreadsheet.sheetsById['1362471646'];
        await contactWorksheet.addRow({
            'Submission Date': submissionTime,
            Name: body.name,
            'Email Address': body.email,
            Message: body.message
        });

        // Send email notification
        const email = {
            to: ['mike@ltng.ventures', 'vivek@ltng.ventures', 'erskingardner@gmail.com'],
            from: 'Lightning Ventures Website <hello@ltng.ventures>',
            templateId: 'd-0d44bba65a074d6c87765ac69932b566',
            dynamicTemplateData: {
                name: body.name,
                email: body.email,
                message: body.message,
                submissionTime: submissionTime
            }
        };

        await sendgrid.send(email);

        return json({ message: 'Success' }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return json({ error: error.message });
    }
};
