import type { ObfuscatedValue } from './common';

export type PhotographPosename = {
    animatorstateId: number;
    avatarId: number;
    fetterId: number;
    finishConds: unknown[];
    isHidden: boolean;
    openConds: {
        condType: string;
        paramList: number[];
    }[];
    poseFile: string;
    poseIcon: string;
    poseNameTextMapHash: number;
    unlockDescTextMapHash: number;
} & ObfuscatedValue;
