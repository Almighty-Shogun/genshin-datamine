import type { ObfuscatedValue } from './common';

export type NatlanStylizeChallenge = {
    gadgetIdList: number[];
    galleryId: number;
    groupId: number;
    id: number;
    pushTipsId: number;
    scoreLevelList: number[];
    targetType: string;
} & ObfuscatedValue;
