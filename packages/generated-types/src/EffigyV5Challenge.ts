import type { ObfuscatedValue } from './common';

export type EffigyV5Challenge = {
    activityId: number;
    cameraID: number;
    descTextMapHash: number;
    draftId: number;
    galleryID: number;
    id: number;
    openDay: number;
    pointId: number;
    prefabPath: string;
    preQuestId: number;
    titleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
