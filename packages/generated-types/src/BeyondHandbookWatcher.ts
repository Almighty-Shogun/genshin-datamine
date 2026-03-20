import type { ObfuscatedValue } from './common';

export type BeyondHandbookWatcher = {
    id: number;
    isDisuse: boolean;
    progress: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
