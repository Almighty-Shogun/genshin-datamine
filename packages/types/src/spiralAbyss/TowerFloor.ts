import type { ObfuscatedValue } from '../common';

export type TowerFloor = {
    bgImage: string;
    floorId: number;
    floorIndex: number;
    floorLevelConfigId: number;
    levelGroupId: number;
    overrideMonsterLevel: number;
    rewardIdFifteenStars: number;
    rewardIdFiveStars: number;
    rewardIdNineStars: number;
    rewardIdSixStars: number;
    rewardIdTenStars: number;
    rewardIdThreeStars: number;
    teamNum: number;
    unlockStarCount: number;
} & ObfuscatedValue;
