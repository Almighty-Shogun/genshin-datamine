import type { ObfuscatedValue } from './common';

export type InvestigationTargetConfigData = {
    icon: string;
    id: number;
    image: string;
    infoDesTextMapHash: number;
    investigationId: number;
    isDisuse: boolean;
    progress: number;
    questId: number;
    rewardId: number;
    sortOrder: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
