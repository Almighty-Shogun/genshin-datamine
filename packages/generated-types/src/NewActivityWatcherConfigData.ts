import type { ObfuscatedValue } from './common';

export type NewActivityWatcherConfigData = {
    activitychallengetipsTextMapHash: number;
    extraActivitychallengetipsTextMapHash: number;
    id: number;
    isAutoGrant: boolean;
    isDisuse: boolean;
    progress: number;
    rewardID: number;
    rewardPreview: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
