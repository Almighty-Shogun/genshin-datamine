import type { ObfuscatedValue } from './common';

export type ActivityJourneySealStage = {
    challengeID: number;
    id: number;
    openDay: number;
    watcherID: number;
} & ObfuscatedValue;
