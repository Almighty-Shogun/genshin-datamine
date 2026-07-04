import type { WeaponGrowCurveType } from './common';
import type { FightingProp, ObfuscatedValue, TextMapHash, WeaponType, DestroyRule } from '../common';

export type WeaponProp = {
    initValue: number;
    propType: FightingProp;
    type: WeaponGrowCurveType;
};

export type Weapon = {
    awakenCosts: number[];
    awakenIcon: string;
    awakenLightMapTexture: string;
    awakenMaterial: number;
    awakenTexture: string;
    destroyReturnMaterial: number[];
    destroyReturnMaterialCount: number[];
    destroyRule: DestroyRule;
    dropable: boolean;
    gachaCardNameHash: number;
    gadgetId: number;
    globalItemLimit: number;
    icon: string;
    id: number;
    initialLockState: 0 | 1 | 2;
    itemType: "ITEM_WEAPON";
    materialType: "WEAPON_MATERIAL_NONE";
    rank: number;
    rankLevel: number;
    skillAffix: number[];
    storyId: number;
    unRotate: boolean;
    useLevel: number;
    weaponBaseExp: number;
    weaponPromoteId: number;
    weaponProp: WeaponProp[];
    weaponType: WeaponType;
    weight: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
