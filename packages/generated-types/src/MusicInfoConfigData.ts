import type { ObfuscatedValue } from './common';

export type MusicInfoConfigData = {
    avatarID: number;
    condID: number;
    instrumentID: number;
    levelId: number[];
    markDescTextMapHash: number;
    markNameTextMapHash: number;
    musicDescTextMapHash: number;
    musicID: number;
    musicNameTextMapHash: number;
    musicTime: number;
    pointID: number;
    watcherList: number[];
} & ObfuscatedValue;
