import type { ObfuscatedValue } from './common';

export type AlchemySimPotionLevel = {
    levelId: number;
    levelInfo: ObfuscatedValue[];
} & ObfuscatedValue;
