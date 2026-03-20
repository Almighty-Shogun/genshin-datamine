import type { ObfuscatedValue } from './common';

export type NodkraiTourParkourLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    gadgetIdList: number[];
    groupLinkId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
