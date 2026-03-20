import type { ObfuscatedValue } from './common';

export type UgcMonsterGroup = {
    brickType: string;
    canCopy: boolean;
    cost: number;
    deployGadgetID: number;
    hide: boolean;
    iconHash: number;
    id: number;
    monsterIdList: string;
    nameTextMapHash: number;
    rotateType: string;
    typeID: number;
} & ObfuscatedValue;
