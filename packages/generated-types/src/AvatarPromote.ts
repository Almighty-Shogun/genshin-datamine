export type AvatarPromote = {
    addProps: {
        propType: string;
        value: number;
    }[];
    avatarPromoteId: number;
    costItems: {
        count: number;
        id: number;
    }[];
    promoteAudio: string;
    promoteLevel: number;
    requiredPlayerLevel: number;
    scoinCost: number;
    unlockMaxLevel: number;
};
