import type { ObfuscatedValue } from '../common';

export type ReliquarySet = {
    bagSortValue: number;
    containsList: number[];
    disableFilter: number;
    dungeonGroup: number[];
    equipAffixId: number;
    setIcon: string;
    setId: number;
    setNeedNum: number[];
    textList: number[];
} & ObfuscatedValue;
