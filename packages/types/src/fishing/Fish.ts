import type { ObfuscatedValue } from '../common';

export type Fish = {
    attractRange: number;
    biteTimeout: number;
    bonusDuration: number[];
    bonusOffset: number[];
    bonusSpeed: number[];
    bonusWidth: number;
    compoundId: number;
    feelerTimes: number[];
    fishCateId: number;
    fleeRange: number;
    hp: number;
    id: number;
    initPose: number;
    itemId: number;
    monsterId: number;
    proficientId: number;
    rewardId: number;
    skillId: number[];
} & ObfuscatedValue;
