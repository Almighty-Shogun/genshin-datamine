import type { ObfuscatedValue } from './common';

export type ActivityFairyTalesCombatLevel = {
    activityID: number;
    buffID: number;
    dungeonID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
