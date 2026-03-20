import type { ObfuscatedValue } from './common';

export type Quest = {
    subId: number;
    mainId: number;
    order: number;
    failParent: number;
    stepDescTextMapHash: number;
    guideTipsTextMapHash: number;
    failCondComb: string;
    acceptCondComb: {
        param: string[];
        type: string;
        guideScene: number;
        guideStyle: string;
        guideLayer: string;
        autoGuide: string;
    };
    finishCondComb: ObfuscatedValue;
    showGuide: string;
    banType: string;
    isMpBlock: boolean;
    subIdSet: number;
    failParentShow: string;
} & ObfuscatedValue;
