import type { ObfuscatedValue } from './common';

export type Achievement = {
    descTextMapHash: number;
    finishRewardId: number;
    goalId: number;
    icon: string;
    id: number;
    isDeleteWatcherAfterFinish: boolean;
    isDisuse: boolean;
    isShow: string;
    orderId: number;
    preStageAchievementId: number;
    progress: number;
    progressShowType: string;
    ps4GroupId: number;
    ps5GroupId: number;
    ps5TitleTextMapHash: number;
    ps5TrophyId: string;
    titleTextMapHash: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
    ttype: string;
} & ObfuscatedValue;
