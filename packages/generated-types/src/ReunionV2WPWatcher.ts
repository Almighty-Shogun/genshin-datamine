import type { ObfuscatedValue } from './common';

export type ReunionV2WPWatcher = {
    descTextMapHash: number;
    id: number;
    isDisuse: boolean;
    progress: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
