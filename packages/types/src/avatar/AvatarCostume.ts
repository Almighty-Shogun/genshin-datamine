import type { ControllerPath, ObfuscatedValue, TextMapHash } from '../common';

export type AvatarCostume = {
    animatorConfigPathHash: number;
    characterId: number;
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
} & ObfuscatedValue & ControllerPath & Omit<TextMapHash, 'titleTextMapHash'>;
