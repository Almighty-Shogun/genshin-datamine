import type { ObfuscatedValue } from './common';

export type DraftTextData = {
    activityID: number;
    draftBtnName: string;
    draftBtnTips: string;
    draftId: number;
    draftLimitReasonDescTextMapHash: number;
    draftTitleTextMapHash: number;
    inviteDescTextMapHash: number;
    inviteGuestDescTextMapHash: number;
    inviteHostDescTextMapHash: number;
    inviteWarningDescTextMapHash: number;
    limitWarningDescTextMapHash: number;
    requirementDescTextMapHash: number;
} & ObfuscatedValue;
