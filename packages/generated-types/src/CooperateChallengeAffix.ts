import type { ObfuscatedValue } from './common';

export type CooperateChallengeAffix = {
    id: number;
    score: number;
    showType: string;
    tag: string;
} & ObfuscatedValue;
