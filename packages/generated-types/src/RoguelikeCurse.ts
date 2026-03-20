export type RoguelikeCurse = {
    level: number;
    groupId: number;
    curseNameTextMapHash: number;
    descTextMapHash: number;
    effectConfig: {
        effectType: string;
        effectKey: string;
        effectParam: string;
    };
    isClearAtNextLevel: boolean;
    descParamList: number[];
    descParamSuperpositionList: boolean[];
};
