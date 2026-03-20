import type { ObfuscatedValue } from './common';

export type MatchingTextData = {
    activityID: number;
    inviteGuestDescTextMapHash: number;
    inviteHostDescTextMapHash: number;
    limitWarningDescTextMapHash: number;
    matchBtnName: string;
    matchBtnTips: string;
    matchIconHash: number;
    matchId: number;
    matchLimitReasonDescTextMapHash: number;
    matchStartDesc: string;
    matchSuccessDescTextMapHash: number;
    matchTitleTextMapHash: number;
    punishHintTextMapHash: number;
    requirementDescTextMapHash: number;
} & ObfuscatedValue;
