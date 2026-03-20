import type { ObfuscatedValue } from './common';

export type Weapon = {
    awakenCosts: number[];
    awakenIcon: string;
    awakenLightMapTexture: string;
    awakenMaterial: number;
    awakenTexture: string;
    descTextMapHash: number;
    destroyReturnMaterial: number[];
    destroyReturnMaterialCount: number[];
    destroyRule: string;
    dropable: boolean;
    gachaCardNameHash: number;
    gadgetId: number;
    globalItemLimit: number;
    icon: string;
    id: number;
    initialLockState: number;
    itemType: string;
    materialType: string;
    nameTextMapHash: number;
    rank: number;
    rankLevel: number;
    skillAffix: number[];
    storyId: number;
    unRotate: boolean;
    useLevel: number;
    weaponBaseExp: number;
    weaponPromoteId: number;
    weaponProp: {
        initValue: number;
        propType: string;
        type: string;
    }[];
    weaponType: string;
    weight: number;
} & ObfuscatedValue;
