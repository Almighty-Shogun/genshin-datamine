import type { ObfuscatedValue } from './common';

export type LeyLineChallenge = {
    challengeNameTextMapHash: number;
    levelIdList: number[];
    scheduleId: number;
} & ObfuscatedValue;
