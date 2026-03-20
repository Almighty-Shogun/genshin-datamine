import type { ObfuscatedValue } from './common';

export type TeamResonance = {
    addProps: unknown[];
    cond: string;
    descTextMapHash: number;
    electricAvatarCount: number;
    fireAvatarCount: number;
    grassAvatarCount: number;
    iceAvatarCount: number;
    level: number;
    nameTextMapHash: number;
    openConfig: string;
    paramList: number[];
    rockAvatarCount: number;
    teamResonanceGroupId: number;
    teamResonanceId: number;
    waterAvatarCount: number;
    windAvatarCount: number;
} & ObfuscatedValue;
