import type { ObfuscatedValue } from './common';

export type ActivityJourneyDungeonBuff = {
    buffDescTextMapHash: number;
    descParam: string[];
    iconHash: number;
    id: number;
    sgv: string;
} & ObfuscatedValue;
