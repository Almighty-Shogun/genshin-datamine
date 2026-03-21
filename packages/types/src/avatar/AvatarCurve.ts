import type { CurveInfo } from '../common';
import type { AvatarGrowCurveType } from './common';

export type AvatarCurve = {
    curveInfos: CurveInfo<AvatarGrowCurveType>[];
    level: number;
};
