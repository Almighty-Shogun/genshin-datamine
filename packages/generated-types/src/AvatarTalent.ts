import type { ObfuscatedValue } from './common';

export type AvatarTalent = {
    addProps: {
        propType: string;
        value: number;
    }[];
    descTextMapHash: number;
    icon: string;
    mainCostItemCount: number;
    mainCostItemId: number;
    nameTextMapHash: number;
    openConfig: string;
    paramList: number[];
    prevTalent: number;
    talentId: number;
} & ObfuscatedValue;
