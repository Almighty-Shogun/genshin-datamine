import type { ObfuscatedValue, AdditionProp } from '../common';

export type AvatarPromote = {
    addProps: AdditionProp[];
    avatarPromoteId: number;
    promoteAudio: string;
    promoteLevel: number;
    requiredPlayerLevel: number;
    scoinCost: number;
    unlockMaxLevel: number;
} & ObfuscatedValue;
