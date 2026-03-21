import type { CurveInfo } from '../common';
import type { WeaponGrowCurveType } from './common';

export type WeaponCurve = {
    curveInfos: CurveInfo<WeaponGrowCurveType>[];
    level: number;
};
