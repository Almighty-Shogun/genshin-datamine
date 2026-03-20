import type { ObfuscatedValue } from './common';

export type BlossomGroups = {
    blossomTipsTextMapHash: number;
    cityId: number;
    decorateGroupVec: number[];
    delayUnloadSec: number;
    fightRadius: number;
    finishProgress: number;
    id: number;
    isSafe: boolean;
    limitLevel: number;
    newGroupVec: number[];
    nextCampIdVec: number[];
    refreshTypeVec: number[];
    remindRadius: number;
    sectionId: number;
} & ObfuscatedValue;
