import type { ObfuscatedValue } from './common';

export type RoleCombatScenePoint = {
    id: number;
    pos: number[];
    rot: number;
} & ObfuscatedValue;
