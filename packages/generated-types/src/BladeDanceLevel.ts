import type { ObfuscatedValue } from './common';

export type BladeDanceLevel = {
    buffList: number[];
    dungeonId: number;
    galleryId: number;
    groupId: number;
    id: number;
    stage: number;
    targetTime: number;
    watcherList: number[];
} & ObfuscatedValue;
