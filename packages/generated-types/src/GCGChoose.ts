import type { ObfuscatedValue } from './common';

export type GCGChoose = {
    aiCondList: {
        type: string;
        value: number;
    }[];
    aiTagList: string[];
    cardType: string;
    condList: {
        type: string;
        value: number;
    }[];
    id: number;
    selectIconType: string;
    tagList: string[];
    targetCamp: string;
    targetHintTextMapHash: number;
} & ObfuscatedValue;
