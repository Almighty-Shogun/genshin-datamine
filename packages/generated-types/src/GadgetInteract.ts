import type { ObfuscatedValue } from './common';

export type GadgetInteract = {
    actionList: {
        actionType: string;
        param: number[];
    }[];
    actionType: string;
    condComb: string;
    condList: {
        condType: string;
        param: string[];
    }[];
    costItems: {
        count: number;
        id: number;
    }[];
    interactId: number;
    isMpModeInteract: boolean;
    param1: number;
    param2: number;
    uiDescTextMapHash: number;
} & ObfuscatedValue;
