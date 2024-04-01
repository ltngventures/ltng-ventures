import { BASEROW_TOKEN } from "$env/static/private";
import axios from "axios";
import type { AxiosResponse } from "axios";

// Founder intake form
// https://baserow.ltng.ventures/database/2/table/3/3
export const founderTableId = 2;
export type BaserowFounderItem = {
    field_8: string; // Name
    field_9: string; // Submission Date
    field_10: string; // Email Address
    field_11: string; // Role
    field_12: string; // Social Profile Link
    field_13: string; // Company Sector
    field_14: string; // Company Name
    field_15: string; // Website
    field_16: boolean; // Incorporated?
    field_17: string; // Corporate structure
    field_18: string; // Legal Name
    field_19: string; // Corporate Location
    field_20: boolean; // Options pool?
    field_21: string; // Team Location
    field_22: string; // Pitch Deck
    field_23: string; // Stage
    field_24: string; // Revenue Status
    field_25: string; // Team Size
    field_26: string; // Gross Burn
    field_27: string; // Runway
    field_28: string; // Data Room
    field_29: string; // Previous Funding
    field_30: string; // Mission
    field_31: string; // What do you most need from Lightning Ventures
    field_32: string; // What problem are you solving?
    field_33: string; // How are you solving it?
    field_34: string; // What's your vision for your company and the space?
    field_35: string; // What's the TAM?
    field_36: string; // Who are your competitors
    field_37: string; // Do you have any moats or defensibility?
    field_38: string; // Do you have any IP or unfair advantages?
    field_39: string; // What are some potential exit strategies?
    field_40: string; // What are the most significant risks you face?
    field_41: string; // What traction have you had to date?
    field_42: string; // Press
};

// Mining intake form
// https://baserow.ltng.ventures/database/3/table/4/4
export const miningTableId = 7;
export type BaserowMiningItem = {
    field_53: string; // Name
    field_54: string; // Submission Date
    field_55: string; // Email Address
    field_56: string; // Role
    field_57: string; // Social Profile Link
    field_58: string; // Company Sector
    field_59: string; // Company Name
    field_60: string; // Website
    field_61: boolean; // Incorporated?
    field_62: string; // Corporate structure
    field_63: string; // Legal Name
    field_64: string; // Corporate Location
    field_65: boolean; // Options pool?
    field_66: string; // Team Location
    field_67: string; // Pitch Deck
    field_68: string; // Stage
    field_69: string; // Revenue Status
    field_70: string; // Team Size
    field_71: string; // Gross Burn
    field_72: string; // Runway
    field_73: string; // Data Room
    field_74: string; // Previous Funding
    field_75: string; // Mission
    field_76: string; // Mining Situation
    field_77: string; // Mining Needs
    field_78: string; // Mining Location
    field_79: string; // Miners Operated
    field_80: string; // Hash power
    field_81: string; // Power sources
    field_82: string; // Positioning
    field_83: string; // What's your vision?
    field_84: string; // What are some potential exit strategies?
    field_85: string; // What are the most significant risks you face?
    field_86: string; // What traction have you had to date?
    field_87: string; // Press
};

// Newsletter form
// https://baserow.ltng.ventures/database/4/table/5/5
export const newsletterTableId = 5;
export type BaserowNewsletterItem = {
    field_46: string; // Email Address
    field_47: string; // Submission Date
};

// Contact form
// https://baserow.ltng.ventures/database/5/table/6/6
export const contactTableId = 6;
export type BaserowContactItem = {
    field_49: string; // Name
    field_50: string; // Email Address
    field_51: string; // Submission Date
    field_52: string; // Message
};

// Investor intake form
// https://baserow.ltng.ventures/database/7/table/8/8
export const investorTableId = 8;
export type BaserowInvestorItem = {
    field_88: string; // Name
    field_89: string; // Submission Date
    field_90: string; // Email Address
    field_91: string; // Investment Interest
    field_92: boolean; // Syndicate Member
    field_93: string; // Social link
    field_94: string; // How'd you hear about LV?
    field_95: string; // Bitcoin investments
    field_96: string; // What kind of Bitcoiner are you?
    field_97: string; // How can you help our portfolio?
    field_98: string; // Any special powers?
};

// Scout intake form
// https://baserow.ltng.ventures/database/8/table/9/9
export const scoutTableId = 9;
export type BaserowScoutItem = {
    field_99: string; // Name
    field_100: string; // Submission Date
    field_101: string; // Email Address
    field_102: string; // Investment Interest
    field_104: string; // Social link
    field_105: string; // How'd you hear about LV?
    field_106: string; // Company name
    field_107: string; // Company website
    field_108: string; // What does the company do?
    field_109: string; // Why do you think it's a good investment?
    field_110: string; // Deal source
    field_111: string; // Founder Name
    field_112: string; // Founder Email
};

class Baserow {
    private baseUrl: string;
    private apiKey: string;

    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    public async createRow(
        tableId: number,
        data:
            | BaserowFounderItem
            | BaserowMiningItem
            | BaserowNewsletterItem
            | BaserowContactItem
            | BaserowInvestorItem
            | BaserowScoutItem
    ): Promise<AxiosResponse> {
        const response = await axios({
            method: "POST",
            url: `${this.baseUrl}/api/database/rows/table/${tableId}/`,
            headers: {
                Authorization: `Token ${this.apiKey}`,
                "Content-Type": "application/json",
            },
            data: data,
        });
        return response;
    }
}

export const baserowClient = new Baserow("https://baserow.ltng.ventures", BASEROW_TOKEN);
