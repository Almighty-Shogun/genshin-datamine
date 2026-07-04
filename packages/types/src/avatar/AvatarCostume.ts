import type { ObfuscatedValue, TextMapHash } from '../common';

export type AvatarCostume = {
    animatorConfigPathHash: number;
    characterId: number;
    controllerPathHash: number;
    controllerRemotePathHash: number;
    frontIconName: string;
    hide: boolean;
    imageNameHash: number;
    indexID: number;
    isDefault: boolean;
    itemId: number;
    jsonName: string;
    prefabManekinPathHash: number;
    prefabNpcPathHash: number;
    prefabPathHash: number;
    prefabRemotePathHash: number;
    quality: number;
    sideIconName: string;
    skinId: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
