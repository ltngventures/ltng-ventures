import { sendgrid } from "$lib/server/sendgrid";
import { json } from "@sveltejs/kit";
import { EMAIL_RECIPIENTS_GENERAL, EMAIL_RECIPIENTS_MINING } from "$lib/data/emailRecipients.js";
import {
    baserowClient,
    miningTableId,
    founderTableId,
    type BaserowFounderItem,
    type BaserowMiningItem,
} from "$lib/server/baserow.js";

/**
 * POST a form submission for the founders/mining form
 * This sends notification emails and appends a new row to the worksheet of the form
 */
export const POST = async ({ request }) => {
    const body = await request.json();
    try {
        let response;
        // Add the submission to the right google sheet
        if (body.companySector === "Mining & Energy") {
            response = await baserowClient.createRow(miningTableId, buildMiningRow(body));
        } else {
            response = await baserowClient.createRow(founderTableId, buildFounderRow(body));
        }
        if (response.status !== 200) {
            return json(
                { error: response.data.error, detail: response.data.detail },
                { status: response.status }
            );
        } else {
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
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        return json({ error: error.message });
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildFounderRow(jsonBody: any) {
    const row: BaserowFounderItem = {
        field_8: jsonBody.name,
        field_9: jsonBody.submissionTimeIso,
        field_10: jsonBody.email,
        field_11: jsonBody.role,
        field_12: jsonBody.social,
        field_13: jsonBody.companySector,
        field_14: jsonBody.companyName,
        field_15: jsonBody.companyWebsite,
        field_16: jsonBody.companyIncorporated as boolean,
        field_17: jsonBody.companyCorpStructure,
        field_18: jsonBody.companyLegalName,
        field_19: jsonBody.companyCountryOfIncorporation,
        field_20: jsonBody.companyOptionsPool as boolean,
        field_21: jsonBody.companyLocation,
        field_22: jsonBody.companyDeck,
        field_23: jsonBody.companyStage,
        field_24: jsonBody.companyRevenueStatus,
        field_25: jsonBody.teamSize,
        field_26: jsonBody.grossBurn,
        field_27: jsonBody.runway,
        field_28: jsonBody.dataRoom,
        field_29: jsonBody.previousFunding,
        field_30: jsonBody.companyMission,
        field_31: jsonBody.fromLV,
        field_32: jsonBody.problemSolved,
        field_33: jsonBody.problemSolution,
        field_34: jsonBody.vision,
        field_35: jsonBody.tam,
        field_36: jsonBody.competitors,
        field_37: jsonBody.defensibility,
        field_38: jsonBody.powers,
        field_39: jsonBody.exitStrategies,
        field_40: jsonBody.risks,
        field_41: jsonBody.traction,
        field_42: jsonBody.press,
    };
    return row;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildMiningRow(jsonBody: any) {
    const row: BaserowMiningItem = {
        field_53: jsonBody.name,
        field_54: jsonBody.submissionTimeIso,
        field_55: jsonBody.email,
        field_56: jsonBody.role,
        field_57: jsonBody.social,
        field_58: jsonBody.companySector,
        field_59: jsonBody.companyName,
        field_60: jsonBody.companyWebsite,
        field_61: jsonBody.companyIncorporated as boolean,
        field_62: jsonBody.companyCorpStructure,
        field_63: jsonBody.companyLegalName,
        field_64: jsonBody.companyCountryOfIncorporation,
        field_65: jsonBody.companyOptionsPool as boolean,
        field_66: jsonBody.companyLocation,
        field_67: jsonBody.companyDeck,
        field_68: jsonBody.companyStage,
        field_69: jsonBody.companyRevenueStatus,
        field_70: jsonBody.teamSize,
        field_71: jsonBody.grossBurn,
        field_72: jsonBody.runway,
        field_73: jsonBody.dataRoom,
        field_74: jsonBody.previousFunding,
        field_75: jsonBody.companyMission,
        field_76: jsonBody.miningSituation,
        field_77: jsonBody.miningNeeds,
        field_78: jsonBody.siteLocation,
        field_79: jsonBody.miningMinerCount,
        field_80: jsonBody.miningHashPower,
        field_81: jsonBody.miningPowerSources,
        field_82: jsonBody.miningMarketPosition,
        field_83: jsonBody.vision,
        field_84: jsonBody.exitStrategies,
        field_85: jsonBody.risks,
        field_86: jsonBody.traction,
        field_87: jsonBody.press,
    };
    return row;
}
