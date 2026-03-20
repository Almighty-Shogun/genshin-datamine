export type IrodoriQuest = {
    id: number;
    questId: number;
    mainQuestIds: number[];
    openDay: number;
    chapterTextMapHash: number;
    nameTextMapHash: number;
    descTextMapHash: number;
    preOtherQuestIds: unknown[];
    preQuestId: number;
    questType: string;
};
