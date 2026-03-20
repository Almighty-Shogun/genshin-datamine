import type { ObfuscatedValue } from './common';

export type GCGCard = {
    buffIconHash: number;
    cardType: string;
    changeToWhichSpecialView: number;
    changeToWhichSpecialViewTokenNum: number;
    chooseTargetList: number[];
    chooseTargetType: string;
    costList: {
        costType: string;
        count: number;
    }[];
    descOnTableTextMapHash: number;
    descTextMapHash: number;
    dvAdjustJsonList: string[];
    hintType: string;
    hintValue: string;
    id: number;
    isCanObtain: boolean;
    isHidden: boolean;
    nameTextMapHash: number;
    persistEffectConstraintSkillIdList: number[];
    persistEffectConstraintToken: string;
    persistEffectType: string;
    skillList: number[];
    stateBuffType: string;
    tagList: string[];
    tokenToShow: string;
    tokenToShowIconType: string;
    tokenToShowTextId: number;
    triggerSummonFullHintNum: number;
} & ObfuscatedValue;
