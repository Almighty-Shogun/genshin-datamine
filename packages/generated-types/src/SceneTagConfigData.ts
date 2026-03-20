import type { ObfuscatedValue } from './common';

export type SceneTagConfigData = {
    cond: {
        condType: string;
        param1: number;
        param2: number;
    }[];
    id: number;
    isDefaultValid: boolean;
    isIndependent: boolean;
    isSkipLoading: boolean;
    sceneId: number;
    sceneTagName: string;
} & ObfuscatedValue;
