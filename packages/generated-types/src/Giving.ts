import type { ObfuscatedValue } from './common';

export type Giving = {
    exactFinishTalkId: number;
    exactItems: {
        count: number;
        id: number;
    }[];
    givingGroupCount: number;
    givingGroupIds: number[];
    givingMethod: string;
    givingType: string;
    highlight: boolean;
    icon: string;
    id: number;
    isRemoveItem: boolean;
    mistakeTalkId: number;
    tab: string;
    talkId: number;
} & ObfuscatedValue;
