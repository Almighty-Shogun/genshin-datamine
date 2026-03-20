import type { ObfuscatedValue } from './common';

export type HuntingRegion = {
    centerPosList: number[];
    centerRadius: number;
    certainFinalMonsterId: number[];
    clueGroup: number[];
    destinationGroup: number[];
    id: number;
    regionInfoTextMapHash: number;
    safeClueGroup: number[];
    safeDestinationGroup: number[];
} & ObfuscatedValue;
