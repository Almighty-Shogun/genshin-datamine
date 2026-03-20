import type { ObfuscatedValue } from './common';

export type BeyondInitialActiveWatcher = {
    endTime: string;
    id: number;
    isDisuse: boolean;
    progress: number;
    rewardId: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
