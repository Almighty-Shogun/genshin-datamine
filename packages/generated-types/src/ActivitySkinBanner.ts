import type { ObfuscatedValue } from './common';

export type ActivitySkinBanner = {
    activityId: number;
    mainQuestId: number;
    prefabPath: string;
    skinId: number;
} & ObfuscatedValue;
