import type { AvatarGrowCurveType } from './common';
import type { ControllerPath, ObfuscatedValue, TextMapHash, WeaponType, FightingProp } from '../common';

export type AvatarIdentity =
    | "AVATAR_IDENTITY_NORMAL"
    | "AVATAR_IDENTITY_MASTER";

export type AvatarBodyType =
    | "BODY_GIRL"
    | "BODY_LADY"
    | "BODY_BOY"
    | "BODY_MALE"
    | "BODY_LOLI";

export type AvatarQualityType =
    | "QUALITY_PURPLE"
    | "QUALITY_ORANGE"
    | "QUALITY_ORANGE_SP";

export type AvatarUseType =
    | "AVATAR_TEST"
    | "AVATAR_FORMAL"
    | "AVATAR_ABANDON"
    | "AVATAR_SYNC_TEST";

type AvatarGrowCurve = {
    growCurve: AvatarGrowCurveType;
    type: FightingProp;
};

export type Avatar = {
    animatorConfigPathHash: number;
    attackBase: number;
    avatarIdentityType: AvatarIdentity;
    avatarPromoteId: number;
    avatarPromoteRewardIdList: number[];
    avatarPromoteRewardLevelList: number[];
    bodyType: AvatarBodyType;
    campID: number;
    candSkillDepotIds: number[];
    chargeEfficiency: number;
    combatConfigHash: number;
    coopPicNameHash: number;
    critical: number;
    criticalHurt: number;
    defenseBase: number;
    deformationMeshPathHash: number;
    elecSubHurt: number;
    elementMastery: number;
    featureTagGroupID: number;
    fireSubHurt: number;
    gachaCardNameHash: number;
    gachaImageNameHash: number;
    grassSubHurt: number;
    hpBase: number;
    iceSubHurt: number;
    iconName: string;
    id: number;
    imageName: string;
    initialWeapon: number;
    isRangeAttack: boolean;
    lodPatternName: string;
    manekinJsonConfigHash: number;
    manekinMotionConfig: number;
    manekinPathHash: number;
    physicalSubHurt: number;
    prefabPathHash: number;
    prefabPathRagdollHash: number;
    prefabPathRemoteHash: number;
    propGrowCurves: AvatarGrowCurve[];
    qualityType: AvatarQualityType;
    rockSubHurt: number;
    scriptDataPathHash: number;
    sideIconName: string;
    skillDepotId: number;
    specialDeformationMeshPathHash: number;
    staminaRecoverSpeed: number;
    tags: string[];
    useType: AvatarUseType;
    waterSubHurt: number;
    weaponType: WeaponType;
    windSubHurt: number;
} & ObfuscatedValue & ControllerPath & Omit<TextMapHash, 'titleTextMapHash'>;
