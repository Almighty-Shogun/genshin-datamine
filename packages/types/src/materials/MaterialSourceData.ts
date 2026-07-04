import type { ObfuscatedValue } from '../common';

export type MaterialSourceData = {
    dungeonGroup: number[];
    dungeonList: number[];
    id: number;
    jumpTargets: string[];
    textList: number[];
} & ObfuscatedValue;
