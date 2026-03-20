import type { ObfuscatedValue } from './common';

export type ActivityChessMap = {
    buildGearLimit: number;
    chessMapID: number;
    descTextMapHash: number;
    dungeonID: number;
    entrancePointIDList: number[];
    entryPointId: number;
    exitPointIDList: number[];
    mapIconPath: string;
    mapNameTextMapHash: number;
    prevMapID: number;
    show: boolean;
    unlockDay: number;
    unlockTipsTextMapHash: number;
} & ObfuscatedValue;
