import { spreadsheet } from "$lib/server/googleSheets";
import { sendgrid } from "$lib/server/sendgrid";
import { json } from "@sveltejs/kit";
import { EMAIL_RECIPIENTS_GENERAL } from "$lib/data/emailRecipients.js";

/**
 * POST a form submission for the investors/scout form
 * This sends notification emails and appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    try {
        // Add the submission to the right google sheet
        if (body.investmentInterest === "Scout") {
            const scoutWorksheet = spreadsheet.sheetsById["374058004"];
            await scoutWorksheet.addRow(buildScoutRow(body));
        } else {
            const investorWorksheet = spreadsheet.sheetsById["1307764119"];
            await investorWorksheet.addRow(buildInvestorRow(body));
        }

        // Send email notification
        const emailTemplateId =
            body.investmentInterest === "Scout"
                ? "d-af288684f969412eacb6748c25238561"
                : "d-dd1e3266a4f14176923cb918687befd3";
        const email = {
            to: EMAIL_RECIPIENTS_GENERAL,
            from: "Lightning Ventures Website <hello@ltng.ventures>",
            templateId: emailTemplateId,
            dynamicTemplateData: body,
        };

        await sendgrid.send(email);

        return json({ message: "Success" }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return json({ error: error.message });
    }
};

function buildInvestorRow(jsonBody: any) {
    const row = {
        "Submission Date": jsonBody.submissionTime,
        Name: jsonBody.name,
        "Email Address": jsonBody.email,
        "Investment interest": jsonBody.investmentInterest,
        "Syndicate member?": jsonBody.syndicateInvestor,
        "Social Link": jsonBody.socialLink,
        "How'd you hear about LV?": jsonBody.source,
        "Bitcoin Investments": jsonBody.previousInvestments,
        "What kind of Bitcoiner are you?": jsonBody.bitcoiner,
        "How can you help our portfolio?": jsonBody.skills,
        "Any special powers?": jsonBody.otherPowers,
    };
    return row;
}

function buildScoutRow(jsonBody: any) {
    const row = {
        "Submission Date": jsonBody.submissionTime,
        Name: jsonBody.name,
        "Email Address": jsonBody.email,
        "Investment interest": jsonBody.investmentInterest,
        "Social Link": jsonBody.socialLink,
        "How'd you hear about LV?": jsonBody.source,
        "Company name": jsonBody.scoutInvestment,
        "Company website": jsonBody.scoutUrl,
        "What does the company do?": jsonBody.scoutInvestmentMission,
        "Why do you think it's a good investment?": jsonBody.scoutInvestmentReason,
        "Deal source": jsonBody.scoutSource,
        "Founder Name": jsonBody.scoutFounder,
        "Founder Email": jsonBody.scoutFounderEmail,
    };
    return row;
}
