export type Activity = {
    ActivityId: number;
    Type: string;
    DestroyItem: {
        ItemId: number[];
    }[];
    NameTextMapHash: number;
    ActivitySceneTag: string;
    IsLoadTerrain: boolean;
};
