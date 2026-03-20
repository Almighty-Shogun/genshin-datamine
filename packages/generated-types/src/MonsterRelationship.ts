import type { ObfuscatedValue } from './common';

export type MonsterRelationship = {
    id: number;
    tagStr: string;
    monsterRarity: string;
} & ObfuscatedValue;
