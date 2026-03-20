import type { ObfuscatedValue } from './common';

export type SpriteTag = {
    fallbackPureTextTextMapHash: number;
    id: number;
    spriteHeightScale: number;
    spritePath: string;
} & ObfuscatedValue;
