import type { ObfuscatedValue } from './common';

export type PlayerLevelLock = {
    playerLevelUpperLimit: number;
    unlockDescTextMapHash: number;
    unlockMainQuestId: number;
    unlockPlayerLevel: number;
    worldLevel: number;
} & ObfuscatedValue;
