import type { ObfuscatedValue } from './common';

export type GCGDeckCard = {
    accessDescTextMapHash: number;
    faceIdList: number[];
    id: number;
    isHide: boolean;
    itemID: number;
    relatedActivityScheduleId: number;
    relatedCharacterId: number;
    relatedCharacterTagList: string[];
    shopGoodId: number;
    sortOrder: number;
    storyDescTextMapHash: number;
    storyTitleTextMapHash: number;
} & ObfuscatedValue;
