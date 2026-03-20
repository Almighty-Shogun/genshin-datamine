import type { ObfuscatedValue } from './common';

export type ReunionV2Watcher = {
    descTextMapHash: number;
    id: number;
    isDisuse: boolean;
    progress: number;
    rewardId: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
