import type { ObfuscatedValue } from '../common';

export type AvatarCodex = {
    avatarId: number;
    beginTime: string;
    hideWhenDontHave: boolean;
    sortFactor: number;
    sortId: number;
} & ObfuscatedValue;
