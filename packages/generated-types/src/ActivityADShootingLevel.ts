import type { ObfuscatedValue } from './common';

export type ActivityADShootingLevel = {
    configId: number;
    descTextMapHash: number;
    dungeonId: number;
    groupId: number;
    levelId: number;
    nameTextMapHash: number;
    openDay: number;
    talkID: number;
} & ObfuscatedValue;
