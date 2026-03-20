import type { ObfuscatedValue } from './common';

export type Weather = {
    areaID: number;
    defaultClimate: string;
    gadgetID: number;
    isDefaultValid: boolean;
    isUseDefault: boolean;
    maxHeightStr: string;
    priority: number;
    profileName: string;
    sceneID: number;
    weatherAreaId: number;
} & ObfuscatedValue;
