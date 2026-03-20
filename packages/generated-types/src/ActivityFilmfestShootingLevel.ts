import type { ObfuscatedValue } from './common';

export type ActivityFilmfestShootingLevel = {
    descTextMapHash: number;
    id: number;
    markDescTextMapHash: number;
    markId: number;
    markTitleTextMapHash: number;
    talkID: number;
    titleTextMapHash: number;
    unlockDay: number;
    watcherIdList: number[];
} & ObfuscatedValue;
