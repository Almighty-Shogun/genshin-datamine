import type { ObfuscatedValue } from './common';

export type CoopPoint = {
    acceptQuest: number;
    chapterId: number;
    id: number;
    photoFemaleHash: number;
    photoMaleHash: number;
    pointDecTextMapHash: number;
    pointNameTextMapHash: number;
    pointPosId: number;
    postPointList: number[];
    type: string;
} & ObfuscatedValue;
