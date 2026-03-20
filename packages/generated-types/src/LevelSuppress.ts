import type { ObfuscatedValue } from './common';

export type LevelSuppress = {
    isDefenserPlayer: boolean;
    level: number;
    levelSuppressDisMaxHorizontal: number;
    levelSuppressDisMaxVertical: number;
    levelSuppressDisMinHorizontal: number;
    levelSuppressDisMinVertical: number;
    levelSuppressEndure: number;
} & ObfuscatedValue;
