import type { ObfuscatedValue } from './common';

export type GCGGameReward = {
    condList: {
        paramList: number[];
        type: string;
    }[];
    doShowChallengeWhenSettle: boolean;
    failTips: number[];
    groupId: number;
    isIgnoreResource: boolean;
    levelDecTextMapHash: number;
    levelId: number;
    levelNameTextMapHash: number;
    levelType: string;
    loadingImage: string;
    oppoAvatarPicId: number;
    rewardDec: number[];
    ruleDec: number[];
    selfAvatarPicRule: string;
    unlockDec: number[];
} & ObfuscatedValue;
