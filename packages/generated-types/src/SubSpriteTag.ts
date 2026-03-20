import type { ObfuscatedValue } from './common';

export type SubSpriteTag = {
    id: number;
    subSpriteHeightScale: number;
    subSpritePath: string;
} & ObfuscatedValue;
