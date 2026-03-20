import type { ObfuscatedValue } from './common';

export type AvatarPromote = {
    addProps: {
        propType: string;
        value: number;
    }[];
    avatarPromoteId: number;
    promoteAudio: string;
    promoteLevel: number;
    requiredPlayerLevel: number;
    scoinCost: number;
    unlockMaxLevel: number;
} & ObfuscatedValue;
