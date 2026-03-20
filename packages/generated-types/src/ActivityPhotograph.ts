import type { ObfuscatedValue } from './common';

export type ActivityPhotograph = {
    activityId: number;
    endQuestID: number;
    fovDefault: number;
    fovMax: number;
    id: number;
    pushTipsID: number;
} & ObfuscatedValue;
