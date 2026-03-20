import type { ObfuscatedValue } from './common';

export type EnvAnimalWeight = {
    envType: string;
    weightVec: {
        animalId: number;
        entityType: string;
        weight: number;
        aliveHourMap: ObfuscatedValue;
    }[];
} & ObfuscatedValue;
