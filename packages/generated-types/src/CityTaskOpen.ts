import type { ObfuscatedValue } from './common';

export type CityTaskOpen = {
    cityId: number;
    questId: number;
} & ObfuscatedValue;
