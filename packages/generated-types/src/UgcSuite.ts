import type { ObfuscatedValue } from './common';

export type UgcSuite = {
    brickType: string;
    canCopy: boolean;
    cost: number;
    deployGadgetID: number;
    hide: boolean;
    iconHash: number;
    id: number;
    nameTextMapHash: number;
    rotateType: string;
    typeID: number;
} & ObfuscatedValue;
