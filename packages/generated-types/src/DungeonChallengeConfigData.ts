import type { ObfuscatedValue } from './common';

export type DungeonChallengeConfigData = {
    activitySkillID: number;
    challengeType: string;
    iconPath: string;
    id: number;
    interruptButtonType: string;
    isBlockTopTimer: boolean;
    isSuccessWhenNotSettled: boolean;
    isTransBackWhenInterrupt: boolean;
    noFailHint: boolean;
    noSuccessHint: boolean;
    progressTextTemplateTextMapHash: number;
    recordType: string;
    subChallengeBannerRule: string;
    subChallengeFadeOutDelayTime: number;
    subChallengeFadeOutRule: string;
    subChallengeFailAnim: string;
    subChallengeSortType: string;
    subChallengeStartAnim: string;
    subChallengeSuccessAnim: string;
    subProgressTextTemplateTextMapHash: number;
    subTargetTextTemplateTextMapHash: number;
    targetTextTemplateTextMapHash: number;
    teamAbilityGroupList: string[];
} & ObfuscatedValue;
