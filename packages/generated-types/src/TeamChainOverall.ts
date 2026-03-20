import type { ObfuscatedValue } from './common';

export type TeamChainOverall = {
    baseScore: number;
    chainAvatarAbilityGroupName: string;
    costumeId: number;
    costumeRewardId: number;
    costumeTargetWatcherIdList: number[];
    dungeonEntryId: number;
    galleryScoreDuration: number;
    medalThreshold: number[];
    roomNum: number;
    roomSkillNum: number;
    scheduleId: number;
    scoreParamA1: number;
} & ObfuscatedValue;
