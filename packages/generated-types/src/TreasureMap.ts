import type { ObfuscatedValue } from './common';

export type TreasureMap = {
    activityId: number;
    bonusChallengeIndex: number;
    challengeGadgetSuite: number;
    detectorMaterialId: number;
    frontChildQuestId: number;
    guideChildQuestId: number;
    id: number;
    monsterProbability: number;
    mpChallengeIndex: number;
    mpRewardId: number;
    npcId: number;
    npcPos: number[];
    previewRewardId: number;
    questId: number;
    rewardWorktopGadgetId: number;
    spotReviseLevelId: number;
    tokenMaterialId: number;
    treasureDays: number;
    unitTokenDropId: number;
} & ObfuscatedValue;
