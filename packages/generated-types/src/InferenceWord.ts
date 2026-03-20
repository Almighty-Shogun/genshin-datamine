import type { ObfuscatedValue } from './common';

export type InferenceWord = {
    associateErrorDialogId: number;
    freestyleId: number;
    interpretDialogId: number;
    isCanAssociate: boolean;
    isCanInterpret: boolean;
    isCanSubmitWithNoInterpret: boolean;
    pageId: number;
    submitErrorDialogId: number;
    unlockCond: {
        param: string;
        type: string;
    }[];
    wordId: number;
    wordNameTextMapHash: number;
} & ObfuscatedValue;
