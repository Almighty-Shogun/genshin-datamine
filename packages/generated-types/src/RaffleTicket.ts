import type { ObfuscatedValue } from './common';

export type RaffleTicket = {
    id: number;
    rewardId: number;
} & ObfuscatedValue;
