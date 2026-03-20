import type { ObfuscatedValue } from './common';

export type ReputationDonation = {
    cityId: number;
    costItemList: {
        count: number;
        id: number;
    }[];
} & ObfuscatedValue;
