import type { ObfuscatedValue } from './common';

export type OpActivityBonus = {
    bonusId: number;
    bonusRatio: number;
    iconBackground: number;
    iconForeground: number;
    openLevel: number;
    sourceParam: string;
    sourceType: string;
    tabId: number;
    textMapIdList: string[];
    trackPara: unknown[];
} & ObfuscatedValue;
