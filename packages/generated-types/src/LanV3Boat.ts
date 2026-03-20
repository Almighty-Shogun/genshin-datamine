export type LanV3Boat = {
    mapId: number;
    type: string;
    galleryId: number;
    controlGroupId: number;
    prepareTime: number;
    playTime: number;
    settleTime: number;
    mapTitleTextMapHash: number;
    mapDescTextMapHash: number;
    mapPreviewIconPathHash: number;
    limitRegion: string;
    vehicleSkillList: number[];
    mapDetailDescs: number[];
    mapDetailPreviewIconPathsHash: number[];
    levelGameTime: number;
};
