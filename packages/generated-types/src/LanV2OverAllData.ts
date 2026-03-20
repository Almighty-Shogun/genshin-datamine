import type { ObfuscatedValue } from './common';

export type LanV2OverAllData = {
    activityId: number;
    activityPlayDuration: number;
    bossCardIdList: number[];
    bossDungeonId: number;
    bossExhibitionIdList: number[];
    bossPushTipsId: number;
    bossStartDay: number;
    bossWatcherIdList: number[];
    clothesRewardId: number;
    clothesWatcherIdList: number[];
    id: number;
} & ObfuscatedValue;
