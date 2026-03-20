import type { ObfuscatedValue } from './common';

export type ActivityTimeStopPhotoLevel = {
    activityID: number;
    avatarID: number;
    cameraFov: number;
    descTextMapHash: number;
    galleryID: number;
    groupID: number;
    levelID: number;
    nameTextMapHash: number;
    npcID: number;
    openDay: number;
    questList: unknown[];
    sceneID: number;
    watcherList: number[];
} & ObfuscatedValue;
