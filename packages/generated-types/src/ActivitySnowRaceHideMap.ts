import type { ObfuscatedValue } from './common';

export type ActivitySnowRaceHideMap = {
    descTextMapHash: number;
    dungeonID: number;
    durationList: number[];
    galleryID: number;
    groupId: number;
    id: number;
    npcTalkTextMapHash: number;
    sceneId: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
