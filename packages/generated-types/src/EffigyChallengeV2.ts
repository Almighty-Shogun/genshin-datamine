import type { ObfuscatedValue } from './common';

export type EffigyChallengeV2 = {
    challengeDungeonId: number;
    challengeGalleryIdList: number[];
    challengeIconHash: number;
    challengeWatcherIdList: number[];
    dayIndex: number;
    id: number;
    levelDescTextMapHash: number;
    levelTitleTextMapHash: number;
    normalDescriptionMonsterIdList: string;
    normalDungeonId: number;
    normalGalleryIdList: number[];
    normalIconHash: number;
    normalPreviewMonsterIdList: string;
    normalWatcherIdList: number[];
} & ObfuscatedValue;
