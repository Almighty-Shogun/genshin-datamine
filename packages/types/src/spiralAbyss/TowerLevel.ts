import type { ObfuscatedValue } from '../common';
import type { TowerConditionType } from './common';

export type TowerCondition = {
    argumentList: number[];
    argumentListUpper: number[];
    towerCondType: TowerConditionType;
};

export type TowerLevel = {
    conds: TowerCondition[];
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
