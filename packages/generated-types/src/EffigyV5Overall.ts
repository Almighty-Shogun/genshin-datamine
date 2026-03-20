import type { ObfuscatedValue } from './common';

export type EffigyV5Overall = {
    activityId: number;
    draftID: number;
    endQuestId: number;
    pushTipsID: number;
    scheduleId: number;
} & ObfuscatedValue;
