export type FungusPlotDungeon = {
    plotStageId: number;
    dungeonId: number;
    validFungusIdList: number[];
    lockedFungusIdList: number[];
    recommendedFungusIdList: unknown[];
    unlockDay: number;
    finishQuestId: number;
    otherPlayerIcon: string;
    enemyIdList: number[];
    favoriteEnemyId: number;
    dungeonTitleTextMapHash: number;
    favoriteDescTextMapHash: number;
    reviewDescTextMapHash: number;
    otherPlayerInfoTextMapHash: number;
    otherPlayerNameTextMapHash: number;
};
