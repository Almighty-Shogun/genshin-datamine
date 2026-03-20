export type IrodoriPoetry = {
    id: number;
    condID: number;
    themeCondID: number;
    unlockDay: number;
    entityType: string;
    scanConfigList: {
        indexIdList: number[];
        lineId: number;
    }[];
    mainQuestID: number;
    minInspirationQuestID: number;
    fillPoetryQuestID: number;
    reminderIDList: number[];
    watcherID: number;
    cameraHintTextMapHash: number;
    themeTitleTextMapHash: number;
    themeDescTextMapHash: number;
    poetryTitleTextMapHash: number;
    existsLineIDList: number[];
};
