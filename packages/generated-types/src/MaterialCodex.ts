import type { ObfuscatedValue } from './common';

export type MaterialCodex = {
    descTextMapHash: number;
    icon: string;
    id: number;
    isDisuse: boolean;
    materialId: number;
    nameTextMapHash: number;
    questID1: number;
    questReplaceDesc1TextMapHash: number;
    questReplaceDesc2TextMapHash: number;
    questReplaceName1TextMapHash: number;
    questReplaceName2TextMapHash: number;
    showOnlyUnlocked: boolean;
    sortOrder: number;
    type: string;
} & ObfuscatedValue;
