import type { ObfuscatedValue } from './common';

export type RandomQuestEntrance = {
    id: number;
    weight: number;
    templateId: number;
    filterList: ObfuscatedValue[];
    filterLogicType: string;
} & ObfuscatedValue;
