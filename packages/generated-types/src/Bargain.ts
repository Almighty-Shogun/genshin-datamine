import type { ObfuscatedValue } from './common';

export type Bargain = {
    affordTextTextMapHash: number;
    deleteItem: boolean;
    dialogId: number[];
    expectedValue: number[];
    failTalkId: number;
    id: number;
    itemId: number;
    moodDescTextTextMapHash: number;
    moodHintTextTextMapHash: number;
    moodLowLimit: number;
    moodLowLimitTextTextMapHash: number;
    moodNpcId: number;
    moodUpperLimit: number;
    questId: number;
    randomMood: number[];
    singleFailTalkId: number[];
    space: number;
    storageTextTextMapHash: number;
    successTalkId: number[];
    titleTextTextMapHash: number;
} & ObfuscatedValue;
