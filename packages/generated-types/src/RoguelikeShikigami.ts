export type RoguelikeShikigami = {
    sequenceId: number;
    groupId: number;
    unlockCond: {
        type: string;
        param: string;
    }[];
    shikiSkillNameTextMapHash: number;
    shikiSkillDescTextMapHash: number;
    level: number;
    costItemId: number;
    costItemCount: number;
};
