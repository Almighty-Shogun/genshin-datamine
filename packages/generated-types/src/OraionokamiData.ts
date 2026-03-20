import type { ObfuscatedValue } from './common';

export type OraionokamiData = {
    configId: number;
    descContentTextMapHash: number;
    descIdList: number[];
    descSkillTextMapHash: number;
    descTitleTextMapHash: number;
    gadgetChainId: number;
    groupId: number;
    iconPath: string;
    serverBuffId: number;
    typeLevel: number;
} & ObfuscatedValue;
