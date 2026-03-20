import type { ObfuscatedValue } from './common';

export type TowerDefenseMonster = {
    id: number;
    monsterId: number;
    tagList: number[];
} & ObfuscatedValue;
