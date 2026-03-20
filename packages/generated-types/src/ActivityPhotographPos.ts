import type { ObfuscatedValue } from './common';

export type ActivityPhotographPos = {
    galleryId: number;
    groupLinkId: number;
    id: number;
    npcCommentDescTextMapHash: number;
    npcId: number;
    npcInviteDescTextMapHash: number;
    openDay: number;
    photoCheckRootID: number;
    photoCheckSubNodeDesc: number[];
    photoCheckSubNodeID: number[];
    posTitleTextMapHash: number;
    presetCheckRootID: number;
    presetCheckSubDescTextMapHash: number;
    presetCheckSubID: number;
    presetPreviewIconBoy: string[];
    presetPreviewIconGirl: string[];
    redPointID: number;
    requireDescInActivityPageTextMapHash: number;
    requireTitleInActivityPageTextMapHash: number;
    rootNodeDescTextMapHash: number;
    sceneID: number;
    watcherId: number;
} & ObfuscatedValue;
