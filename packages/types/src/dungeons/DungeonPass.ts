import type { DungeonLogicType, DungeonPassConditionType } from './common';

export type DungeonPassCondition = {
    condType: DungeonPassConditionType;
    param: number[];
};

export type DungeonPass = {
    conds: DungeonPassCondition[];
    id: number;
    logicType: DungeonLogicType;
};
