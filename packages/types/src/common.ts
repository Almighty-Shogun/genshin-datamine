export type ObfuscatedValue = Record<string, unknown>;

export type Localization = Record<string, string>;

export type Element =
    | "None"
    | "Electric"
    | "Fire"
    | "Ice"
    | "Wind"
    | "Water"
    | "Rock"
    | "Grass";

export type WeaponType =
    | "WEAPON_SWORD_ONE_HAND"
    | "WEAPON_CATALYST"
    | "WEAPON_CLAYMORE"
    | "WEAPON_BOW"
    | "WEAPON_POLE";

export type FightingProp =
    | "FIGHT_PROP_BASE_ATTACK"
    | "FIGHT_PROP_HP"
    | "FIGHT_PROP_ATTACK"
    | "FIGHT_PROP_DEFENSE"
    | "FIGHT_PROP_HP_PERCENT"
    | "FIGHT_PROP_ATTACK_PERCENT"
    | "FIGHT_PROP_DEFENSE_PERCENT"
    | "FIGHT_PROP_CRITICAL"
    | "FIGHT_PROP_CRITICAL_HURT"
    | "FIGHT_PROP_CHARGE_EFFICIENCY"
    | "FIGHT_PROP_HEAL_ADD"
    | "FIGHT_PROP_ELEMENT_MASTERY"
    | "FIGHT_PROP_PHYSICAL_ADD_HURT"
    | "FIGHT_PROP_FIRE_ADD_HURT"
    | "FIGHT_PROP_ELEC_ADD_HURT"
    | "FIGHT_PROP_WATER_ADD_HURT"
    | "FIGHT_PROP_WIND_ADD_HURT"
    | "FIGHT_PROP_ICE_ADD_HURT"
    | "FIGHT_PROP_ROCK_ADD_HURT"
    | "FIGHT_PROP_GRASS_ADD_HURT"
    | "FIGHT_PROP_ELEC_SUB_HURT"
    | "FIGHT_PROP_ICE_SUB_HURT"
    | "FIGHT_PROP_WATER_SUB_HURT"
    | "FIGHT_PROP_WIND_SUB_HURT"
    | "FIGHT_PROP_ROCK_SUB_HURT"
    | "FIGHT_PROP_GRASS_SUB_HURT"
    | "FIGHT_PROP_FIRE_SUB_HURT";

export type DestroyRule = "DESTROY_NONE" | "DESTROY_RETURN_MATERIAL";

export type TextMapHash = {
    nameTextMapHash: number;
    descTextMapHash: number;
    titleTextMapHash: number;
};

export type ControllerPath = {
    controllerPathHash: number;
    controllerPathRemoteHash: number;
};

export type AdditionProp = {
    propType: FightingProp;
    value: number;
};

export type CurveInfo<T> = {
    arith: string;
    type: T;
    value: number;
};
