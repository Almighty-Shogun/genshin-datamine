import type { ObfuscatedValue } from './common';

export type TargetShootingLevel = {
    countDownTime: number;
    descTextMapHash: number;
    draftId: number;
    galleryId: number;
    groupId: number;
    levelId: number;
    preLevelId: number;
    pushtipsId: number;
    scoreLevelList: number[];
    stage: number;
    titleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
