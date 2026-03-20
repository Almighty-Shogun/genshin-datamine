import type { ObfuscatedValue } from './common';

export type TowerLevel = {
    conds: {
        argumentList: number[];
        argumentListUpper: number[];
        towerCondType: string;
    }[];
    dungeonId: number;
    firstMonsterList: number[];
    firstPassRewardId: number;
    levelGroupId: number;
    levelId: number;
    levelIndex: number;
    monsterLevel: number;
    secondMonsterList: number[];
    towerBuffConfigStrList: string[];
} & ObfuscatedValue;
