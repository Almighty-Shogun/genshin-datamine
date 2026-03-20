import type { ObfuscatedValue } from './common';

export type BrickBreakerDungeonLevel = {
    activityId: number;
    bossIconHash: number;
    brickList: number[];
    dungeonId: number;
    galleryId: number;
    groupId: number;
    id: number;
    levelDescTextMapHash: number;
    levelTitleTextMapHash: number;
    limitBall: number;
    limitTime: number;
    maxSkillCount: number;
    perWorldLevelID: number;
    scoreParamList: number[];
    unlockCond: number;
} & ObfuscatedValue;
