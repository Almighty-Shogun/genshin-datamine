import type { ObfuscatedValue } from './common';

export type TowerChallengeBase = {
    activityId: number;
    globalWatcherId: number;
} & ObfuscatedValue;
