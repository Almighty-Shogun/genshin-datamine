import type { ObfuscatedValue } from './common';

export type CoinCollect = {
    cutsceneTime: number;
    dayIndex: number;
    draftId: number;
    galleryId: number;
    galleryTransPointId: number;
    groupbundleID: number;
    groupId: number;
    id: number;
    landmarkImagePath: string;
    levelDescTextMapHash: number;
    levelNameTextMapHash: number;
    locationNameTextMapHash: number;
    previewImageIdList: number[];
    skillNoList: number[];
    totalBalloonsNum: number;
    totalTime: number;
    watcherList: number[];
} & ObfuscatedValue;
