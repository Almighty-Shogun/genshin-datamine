import type { ObfuscatedValue } from './common';

export type ActivityChessGear = {
    attack: number;
    attackRange: number;
    attackSpeed: number;
    banDungeonList: number[];
    buildCost: number;
    demolitionRefund: number;
    descTextMapHash: number;
    gadgetId: number;
    gearIconPath: string;
    gearID: number;
    gearNameTextMapHash: number;
    gearShortNameTextMapHash: number;
    initLevel: number;
    isEnableRotate: boolean;
    needChessLevel: number;
    tagIconPath: string;
} & ObfuscatedValue;
