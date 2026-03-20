import type { ObfuscatedValue } from './common';

export type LanternRiteV5BadgetBattleLevelData = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    icon: string;
    levelID: number;
    monsterId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
