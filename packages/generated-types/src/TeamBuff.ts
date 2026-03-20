import type { ObfuscatedValue } from './common';

export type TeamBuff = {
    abilityName: string;
    abilitySpecialParamConfig: {
        paramName: string;
        paramValue: number;
    }[];
    descTextMapHash: number;
    id: number;
    paramNameList: string[];
    paramValueList: number[];
} & ObfuscatedValue;
