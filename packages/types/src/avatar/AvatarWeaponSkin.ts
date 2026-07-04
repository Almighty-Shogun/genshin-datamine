import type { ObfuscatedValue, WeaponType, TextMapHash } from '../common';

export type AvatarWeaponSkin = {
    displayType: "DISPLAY_TYPE_GROUP_GAIN" | "DISPLAY_TYPE_GAIN" | "DISPLAY_TYPE_SHOW";
    iconPath: string;
    imagePath: string;
    itemId: number;
    jsonName: string;
    prefabPathHash: number;
    quality: number;
    sortId: number;
    tagType: "TAG_TYPE_COLOR_BY_ELEMENT" | "TAG_TYPE_NONE";
    unRotate: boolean;
    weaponType: WeaponType;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
