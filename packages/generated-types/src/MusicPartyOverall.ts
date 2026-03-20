import type { ObfuscatedValue } from './common';

export type MusicPartyOverall = {
    draftId: number;
    matchId: number;
    pushtipsId: number;
    scheduleId: number;
    seriesId: number;
} & ObfuscatedValue;
