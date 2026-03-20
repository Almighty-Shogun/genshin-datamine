import type { ObfuscatedValue } from './common';

export type AbilityOverride = {
    abilityName: string;
    abilitySpecialParamConfig: {
        paramName: string;
        paramValue: number;
    }[];
    id: number;
    paramNameList: string[];
    paramValueList: number[];
} & ObfuscatedValue;
