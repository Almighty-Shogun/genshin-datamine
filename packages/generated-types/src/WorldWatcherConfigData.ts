import type { ObfuscatedValue } from './common';

export type WorldWatcherConfigData = {
    condId: number;
    id: number;
    isDisuse: boolean;
    progress: number;
    rewardID: number;
    titleTextMapHash: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
