import type { ObfuscatedValue } from './common';

export type ActivitySnowRace = {
    battlePushTips: number;
    id: number;
    inviteDescTextMapHash: number;
    rewardWatcherList: number[];
    startTime: number;
    weaponId: number;
} & ObfuscatedValue;
