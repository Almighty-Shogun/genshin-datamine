import type { ObfuscatedValue } from '../common';
import type { MaterialConditionType } from './common';

export type MaterialCondModify = {
    condType: MaterialConditionType;
    id: number;
    materialId: number;
} & ObfuscatedValue;
