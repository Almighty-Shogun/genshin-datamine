import type { ObfuscatedValue } from './common';

export type RoleCombatFightRule = {
    monsterLevel: number;
    poolId: number;
    ruleId: number;
} & ObfuscatedValue;
