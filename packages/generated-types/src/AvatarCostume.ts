import type { ObfuscatedValue } from './common';

export type AvatarCostume = {
    animatorConfigPathHash: number;
    characterId: number;
    controllerPathHash: number;
    controllerRemotePathHash: number;
    descTextMapHash: number;
    frontIconName: string;
    hide: boolean;
    imageNameHash: number;
    indexID: number;
    isDefault: boolean;
    itemId: number;
    jsonName: string;
    nameTextMapHash: number;
    prefabManekinPathHash: number;
    prefabNpcPathHash: number;
    prefabPathHash: number;
    prefabRemotePathHash: number;
    quality: number;
    sideIconName: string;
    skinId: number;
} & ObfuscatedValue;
