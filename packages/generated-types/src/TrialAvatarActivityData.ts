import type { ObfuscatedValue } from './common';

export type TrialAvatarActivityData = {
    battleAvatarsList: string;
    briefInfoTextMapHash: number;
    dungeonId: number;
    firstPassReward: number;
    id: number;
    isDisuse: boolean;
    progress: number;
    titleTextMapHash: number;
    trialAvatarId: number;
    trialAvatarIndexId: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
