import type { ObfuscatedValue } from './common';

export type ProfileFrame = {
    groupId: number;
    iconPathHash: number;
    id: number;
    nameTextMapHash: number;
    priority: number;
    unlockDescTextMapHash: number;
} & ObfuscatedValue;
