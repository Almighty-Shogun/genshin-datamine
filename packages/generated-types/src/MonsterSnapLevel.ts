import type { ObfuscatedValue } from './common';

export type MonsterSnapLevel = {
    dungeonId: number;
    duration: number;
    groupLinkId: number;
    levelId: number;
    pictureHash: number;
} & ObfuscatedValue;
