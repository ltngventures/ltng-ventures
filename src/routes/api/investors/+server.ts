import { sendgrid } from "$lib/server/sendgrid";
import { json } from "@sveltejs/kit";
import { EMAIL_RECIPIENTS_GENERAL } from "$lib/data/emailRecipients.js";
import {
    type BaserowInvestorItem,
    type BaserowScoutItem,
    baserowClient,
    investorTableId,
    scoutTableId,
} from "$lib/server/baserow.js";

/**
 * POST a form submission for the investors/scout form
 * This sends notification emails and appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    try {
        let response;
        // Add the submission to the right google sheet
        if (body.investmentInterest === "Scout") {
            response = await baserowClient.createRow(scoutTableId, buildScoutRow(body));
        } else {
            response = await baserowClient.createRow(investorTableId, buildInvestorRow(body));
        }
        if (response.status !== 200) {
            return json(
                { error: response.data.error, detail: response.data.detail },
                { status: response.status }
            );
        } else {
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
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        return json({ error: error.message });
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildInvestorRow(jsonBody: any) {
    const row: BaserowInvestorItem = {
        field_88: jsonBody.name,
        field_89: jsonBody.submissionTimeIso,
        field_90: jsonBody.email,
        field_91: jsonBody.investmentInterest,
        field_92: jsonBody.syndicateInvestor as boolean,
        field_93: jsonBody.socialLink,
        field_94: jsonBody.source,
        field_95: jsonBody.previousInvestments,
        field_96: jsonBody.bitcoiner,
        field_97: jsonBody.skills,
        field_98: jsonBody.otherPowers,
    };
    return row;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildScoutRow(jsonBody: any) {
    const row: BaserowScoutItem = {
        field_99: jsonBody.name,
        field_100: jsonBody.submissionTimeIso,
        field_101: jsonBody.email,
        field_102: jsonBody.investmentInterest,
        field_104: jsonBody.socialLink,
        field_105: jsonBody.source,
        field_106: jsonBody.scoutInvestment,
        field_107: jsonBody.scoutUrl,
        field_108: jsonBody.scoutInvestmentMission,
        field_109: jsonBody.scoutInvestmentReason,
        field_110: jsonBody.scoutSource,
        field_111: jsonBody.scoutFounder,
        field_112: jsonBody.scoutFounderEmail,
    };
    return row;
}
