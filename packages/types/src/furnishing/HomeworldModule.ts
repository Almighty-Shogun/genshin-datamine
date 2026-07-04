import type { ObfuscatedValue } from '../common';

export type HomeworldModule = {
    bigImageAddr: string;
    defaultRoomSceneId: number;
    id: number;
    isFree: boolean;
    moduleDescTextMapHash: number;
    moduleNameTextMapHash: number;
    optionalRoomSceneIdVec: number[];
    region: string[];
    regionPointPos: string[];
    smallImageAddr: string;
    unlockTipIfUnFreeTextMapHash: number;
    worldSceneId: number;
} & ObfuscatedValue;
