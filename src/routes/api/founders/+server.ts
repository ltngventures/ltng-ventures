import { spreadsheet } from "$lib/server/googleSheets";
import { sendgrid } from "$lib/server/sendgrid";
import { json } from "@sveltejs/kit";
import { EMAIL_RECIPIENTS_GENERAL, EMAIL_RECIPIENTS_MINING } from "$lib/data/emailRecipients.js";

/**
 * POST a form submission for the founders/mining form
 * This sends notification emails and appends a new row to the worksheet of the form
 */

export const POST = async ({ request }) => {
    const body = await request.json();
    try {
        // Add the submission to the right google sheet
        if (body.companySector === "Mining & Energy") {
            const miningWorksheet = spreadsheet.sheetsById["408823599"];
            await miningWorksheet.addRow(buildMiningRow(body));
        } else {
            const founderWorksheet = spreadsheet.sheetsById["1684057623"];
            await founderWorksheet.addRow(buildFounderRow(body));
        }

        // Send email notification
        const emailTemplateId =
            body.companySector === "Mining & Energy"
                ? "d-889aa0c885214e6aaf4187af6d5a646c"
                : "d-cae640e6663349b4a7a8e5d2448cd9ea";
        const emailRecipients =
            body.companySector === "Mining & Energy"
                ? EMAIL_RECIPIENTS_MINING
                : EMAIL_RECIPIENTS_GENERAL;
        const email = {
            to: emailRecipients,
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

function buildFounderRow(jsonBody: any) {
    const row = {
        "Submission Date": jsonBody.submissionTime,
        Name: jsonBody.name,
        "Email Address": jsonBody.email,
        Role: jsonBody.role,
        "Social Profile Link": jsonBody.social,
        "Company Sector": jsonBody.companySector,
        "Company Name": jsonBody.companyName,
        Website: jsonBody.companyWebsite,
        "Incorporated?": jsonBody.companyIncorporated,
        "Corporate structure": jsonBody.companyCorpStructure,
        "Legal Name": jsonBody.companyLegalName,
        "Corporate Location": jsonBody.companyCountryOfIncorporation,
        "Options pool?": jsonBody.companyOptionsPool,
        "Team Location": jsonBody.companyLocation,
        "Pitch Deck": jsonBody.companyDeck,
        Stage: jsonBody.companyStage,
        "Revenue Status": jsonBody.companyRevenueStatus,
        "Team Size": jsonBody.teamSize,
        "Gross Burn": jsonBody.grossBurn,
        Runway: jsonBody.runway,
        "Data Room": jsonBody.dataRoom,
        "Previous Funding": jsonBody.previousFunding,
        Mission: jsonBody.companyMission,
        "What do you most need from Lightning Ventures": jsonBody.fromLV,
        "What problem are you solving?": jsonBody.problemSolved,
        "How are you solving it?": jsonBody.problemSolution,
        "What's your vision for your company and the space?": jsonBody.vision,
        "What's the TAM?": jsonBody.tam,
        "Who are your competitors": jsonBody.competitors,
        "Do you have any moats or defensibility?": jsonBody.defensibility,
        "Do you have any IP or unfair advantages?": jsonBody.powers,
        "What are some potential exit strategies?": jsonBody.exitStrategies,
        "What are the most significant risks you face?": jsonBody.risks,
        "What traction have you had to date?": jsonBody.traction,
        Press: jsonBody.press,
    };
    return row;
}

function buildMiningRow(jsonBody: any) {
    const row = {
        "Submission Date": jsonBody.submissionTime,
        Name: jsonBody.name,
        "Email Address": jsonBody.email,
        Role: jsonBody.role,
        "Social Profile Link": jsonBody.social,
        "Company Sector": jsonBody.companySector,
        "Company Name": jsonBody.companyName,
        Website: jsonBody.companyWebsite,
        "Incorporated?": jsonBody.companyIncorporated,
        "Corporate structure": jsonBody.companyCorpStructure,
        "Legal Name": jsonBody.companyLegalName,
        "Corporate Location": jsonBody.companyCountryOfIncorporation,
        "Options pool?": jsonBody.companyOptionsPool,
        "Team Location": jsonBody.companyLocation,
        "Pitch Deck": jsonBody.companyDeck,
        Stage: jsonBody.companyStage,
        "Revenue Status": jsonBody.companyRevenueStatus,
        "Team Size": jsonBody.teamSize,
        "Gross Burn": jsonBody.grossBurn,
        Runway: jsonBody.runway,
        "Data Room": jsonBody.dataRoom,
        "Previous Funding": jsonBody.previousFunding,
        Mission: jsonBody.companyMission,
        "Mining situation": jsonBody.miningSituation,
        "Mining needs": jsonBody.miningNeeds,
        "Mining locations": jsonBody.siteLocation,
        "Miners operated": jsonBody.miningMinerCount,
        "Hash power": jsonBody.miningHashPower,
        "Power sources": jsonBody.miningPowerSources,
        Positioning: jsonBody.miningMarketPosition,
        "What's your vision for your company and the space?": jsonBody.vision,
        "What are some potential exit strategies?": jsonBody.exitStrategies,
        "What are the most significant risks you face?": jsonBody.risks,
        "What traction have you had to date?": jsonBody.traction,
        Press: jsonBody.press,
    };
    return row;
}
