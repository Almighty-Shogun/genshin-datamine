import type { ObfuscatedValue } from '../common';

export type AvatarSkillDepot = {
    attackModeSkill: number;
    energySkill: number;
    extraAbilities: string[];
    id: number;
    leaderTalent: number;
    skillDepotAbilityGroup: string;
    skills: number[];
    subSkills: number[];
    talents: number[];
    talentStarName: string;
} & ObfuscatedValue;
