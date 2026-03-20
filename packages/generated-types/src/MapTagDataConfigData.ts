import type { ObfuscatedValue } from './common';

export type MapTagDataConfigData = {
    cityID: number;
    defaultLocateX: number;
    defaultLocateZ: number;
    hideBeforeUnlock: boolean;
    icon: string;
    id: number;
    nameTextMapHash: number;
    nameWithRubyTextTextMapHash: number;
    sceneIdList: number[];
    sortID: number;
    transPointID: number;
    type: string;
    unlockByDefault: boolean;
} & ObfuscatedValue;
