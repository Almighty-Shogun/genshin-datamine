import type { ObfuscatedValue } from '../common';
import type { MonsterRarity } from './common';

export type MonsterRelationship = {
    id: number;
    tagStr: string;
    monsterRarity: MonsterRarity;
} & ObfuscatedValue;
