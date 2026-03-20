import type { ObfuscatedValue } from './common';

export type UgcMonster = {
    brickType: string;
    canCopy: boolean;
    cost: number;
    deployGadgetID: number;
    hide: boolean;
    iconHash: number;
    id: number;
    monsterId: number;
    nameTextMapHash: number;
    rotateType: string;
    typeID: number;
} & ObfuscatedValue;
