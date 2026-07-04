import type { ObfuscatedValue } from '../common';
import type { HomeworldLevelFunction } from './common';

export type HomeworldLevel = {
    comfortPointLimit: number;
    deployNpcCount: number;
    djinnGadgetId: number;
    exp: number;
    freeUnlockModuleCount: number;
    homeCoinStoreLimit: number;
    homeFetterExpStoreLimit: number;
    level: number;
    levelFuncs: HomeworldLevelFunction[];
    limitShopGoodsCount: number;
    outdoorUnlockBlockCount: number;
    rewardId: number;
} & ObfuscatedValue;
