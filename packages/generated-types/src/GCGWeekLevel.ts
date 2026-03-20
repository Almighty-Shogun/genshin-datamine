import type { ObfuscatedValue } from './common';

export type GCGWeekLevel = {
    iconName: string;
    id: number;
    isUseStandScenePoint: boolean;
    levelCondList: {
        gcgLevel: number;
        levelId: number;
    }[];
    npcId: number;
    npcType: string;
    openGcgLevel: number;
} & ObfuscatedValue;
