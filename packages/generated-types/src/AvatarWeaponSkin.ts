import type { ObfuscatedValue } from './common';

export type AvatarWeaponSkin = {
    descTextMapHash: number;
    displayType: string;
    iconPath: string;
    imagePath: string;
    itemId: number;
    jsonName: string;
    nameTextMapHash: number;
    prefabPathHash: number;
    quality: number;
    sortId: number;
    tagType: string;
    unRotate: boolean;
    weaponType: string;
} & ObfuscatedValue;
