import type { ObfuscatedValue } from './common';

export type WorldWatcherRewardedGoalConfigData = {
    type: string;
    watcherIdList: number[];
} & ObfuscatedValue;
