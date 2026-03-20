import type { ObfuscatedValue } from './common';

export type PuzzleFighterStageDataGroup = {
    icon: string;
    index: number;
    levelGroupId: number;
    levelList: number[];
} & ObfuscatedValue;
