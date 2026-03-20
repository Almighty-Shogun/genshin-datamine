import type { ObfuscatedValue } from './common';

export type ActivityCeremonyBattleLevel = {
    activityID: number;
    buffDescTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    monsterPreviewId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    scoreLevelList: number[];
    watcherList: number[];
} & ObfuscatedValue;
