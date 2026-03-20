import type { ObfuscatedValue } from './common';

export type BeyondActivityWatcherConfigData = {
    id: number;
    isDisuse: boolean;
    progress: number;
    refreshId: number;
    rewardID: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
