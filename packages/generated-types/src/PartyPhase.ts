import type { ObfuscatedValue } from './common';

export type PartyPhase = {
    levelIdList: number[];
    unlockDay: number;
} & ObfuscatedValue;
