import type { CurveInfo } from '../common';
import type { MonsterGrowCurveType } from './common';

export type MonsterCurve = {
    curveInfos: CurveInfo<MonsterGrowCurveType>[];
    level: number;
};
