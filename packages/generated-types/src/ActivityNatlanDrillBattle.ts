import type { ObfuscatedValue } from './common';

export type ActivityNatlanDrillBattle = {
    descTextMapHash: number;
    dungeonId: number;
    dungeonType: string;
    id: number;
    openDay: number;
    subtitleTextMapHash: number;
    titleTextMapHash: number;
    trialAvatarId: number;
    watcherList: number[];
} & ObfuscatedValue;
