import type { ObfuscatedValue } from './common';

export type Fishblaster = {
    descTextMapHash: number;
    id: number;
    tipsTextMapHash: number;
    tutorialID: number;
    unlockDay: number;
    watcherList: number[];
} & ObfuscatedValue;
