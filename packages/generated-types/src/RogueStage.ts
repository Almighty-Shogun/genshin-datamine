export type RogueStage = {
    stageId: number;
    firstPassRewardId: number;
    previewRewardId: number;
    openTime: number;
    maxCoin: number;
    maxLevel: number;
    reviseLevelId: number;
    stageNameTextMapHash: number;
    stageDescTextMapHash: number;
    bossIdList: number[];
    monsterIdList: number[][];
    levelBossIdList: number[][];
    preQuestId: number;
    gotoQuestId: number;
    unlockRuneList: unknown[];
    isStoryStage: boolean;
};
