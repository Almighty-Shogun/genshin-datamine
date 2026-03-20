import type { ObfuscatedValue } from './common';

export type Gadget = {
    campID: number;
    chainId: number;
    clientScriptHash: number;
    controllerPathHash: number;
    controllerPathRemoteHash: number;
    hasAudio: boolean;
    hasMove: boolean;
    id: number;
    inteeIconName: string;
    interactNameTextMapHash: number;
    isEquip: boolean;
    isInteractive: boolean;
    itemJsonName: string;
    itemPrefabPathHash: number;
    jsonName: string;
    landSoundID: number;
    lodPatternName: string;
    mpPropID: number;
    nameTextMapHash: number;
    prefabPathHash: number;
    prefabPathRemoteHash: number;
    radarHintID: number;
    tags: string[];
    type: string;
    visionLevel: string;
} & ObfuscatedValue;
