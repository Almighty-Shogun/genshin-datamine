import type { ObfuscatedValue } from './common';

export type OpActivity = {
    bonusList: number[];
    bonusType: string;
    bonusValue: number;
    icon: number;
    opActivityId: number;
    tabIcon: string;
    tabText: string;
    textMapIdList: string[];
} & ObfuscatedValue;
