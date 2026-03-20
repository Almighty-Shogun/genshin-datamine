export type WinterCampExplore = {
    id: number;
    openDay: number;
    priority: number;
    groupID: number;
    groupLinkID: number;
    rewardID: number;
    dropGroups: {
        dropId: number[];
    }[];
};
