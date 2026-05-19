import type { ObfuscatedValue, TextMapHash, AdditionProp, CostItem } from '../common';

export type LifeEffectType =
    | "PROUD_EFFECT_NONE"
    | "PROUD_EFFECT_COMBINE_MULTIPLY_OUTPUT"
    | "PROUD_EFFECT_FORGE_REDUCE_TIME"
    | "PROUD_EFFECT_COOK_PERFECT_MULTI_OUTPUT"
    | "PROUD_EFFECT_FORGE_ADD_EXTRA_PROB"
    | "PROUD_EFFECT_COMBINE_RETURN_MATERIAL"
    | "PROUD_EFFECT_FORGE_RETURN_MATERIAL"
    | "PROUD_EFFECT_EXPEDITION_SHORTEN_TIME"
    | "PROUD_EFFECT_COOK_PROB_MULTI_OUTPUT"
    | "PROUD_EFFECT_FURNITURE_MAKE_RETURN_MATERIAL"
    | "PROUD_EFFECT_FISHING_EXTRA_OUTPUT"
    | "PROUD_EFFECT_COOK_CAN_NOT_COOK"
    | "PROUD_EFFECT_WEAPON_PROMOTE_REDUCE_SCOIN"
    | "PROUD_EFFECT_HIT_TREE_EXTRA_OUTPUT"
    | "PROUD_EFFECT_COMBINE_RETURN_SPECIAL_MATERIAL"
    | "PROUD_EFFECT_EXPEDITION_EXTRA_OUTPUT"
    | "PROUD_EFFECT_USE_FOOD_PROB_GET_ITEM";

export type ProudSkill = {
    addProps: AdditionProp[];
    breakLevel: number;
    coinCost: number;
    costItems: CostItem[];
    filterConds: string[];
    icon: string;
    isHideLifeProudSkill: boolean;
    level: number;
    lifeEffectParams: string[];
    lifeEffectType: LifeEffectType;
    openConfig: string;
    paramDescList: number[];
    paramList: number[];
    proudSkillGroupId: number;
    proudSkillId: number;
    proudSkillType: number;
    unlockDescTextMapHash: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
