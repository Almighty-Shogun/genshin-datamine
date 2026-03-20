import type { ObfuscatedValue } from './common';

export type QuestCheckBonus = {
    condList: {
        paramList: number[];
        type: string;
    }[];
    iconPath: string;
    id: number;
    logicType: string;
    nameTextMapHash: number;
} & ObfuscatedValue;
