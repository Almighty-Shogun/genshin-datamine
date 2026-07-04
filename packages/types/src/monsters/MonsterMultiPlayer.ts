import type { FightingProp } from '../common';

export type MonsterMultiPlayerProp = {
    PropType: FightingProp;
    PropValue: number[];
};

export type MonsterMultiPlayer = {
    Id: number;
    PropPer: MonsterMultiPlayerProp[];
    EndureNum: number[];
    ElementShield: number[];
};
