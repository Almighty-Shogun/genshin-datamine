import type { FishSkillCategory, FishSkillType } from './common';

export type FishSkill = {
    bonusDuration: number[];
    bonusOffset: number[];
    bonusSpeed: number[];
    bonusWidth: number[];
    duration: number;
    forceFactor: number;
    id: number;
    param: number[];
    priority: number;
    skillCategory: FishSkillCategory;
    skillType: FishSkillType;
    strength: number;
};
