import type { ObfuscatedValue } from './common';

export type RoleCombatLevel = {
    bossDescTextMapHash: number;
    bossTitleTextMapHash: number;
    id: number;
    monsterPreviewId: number;
    tag: number;
} & ObfuscatedValue;
