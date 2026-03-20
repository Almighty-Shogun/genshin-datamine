import type { ObfuscatedValue } from './common';

export type EffigyV4Challenge = {
    descTextMapHash: number;
    dungeonType: string;
    id: number;
    openDay: number;
    prefabPath: string;
    rewardWatcherList: number[];
    titleTextMapHash: number;
} & ObfuscatedValue;
