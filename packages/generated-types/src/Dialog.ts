import type { ObfuscatedValue } from './common';

export type Dialog = {
    nextDialogs: number[];
    talkRole: {
        type: string;
        id: string;
    };
    talkContentTextMapHash: number;
    talkTitleTextMapHash: number;
    talkRoleNameTextMapHash: number;
    talkAssetPath: string;
    talkAssetPathAlter: string;
    talkAudioName: string;
    actionBefore: string;
    actionWhile: string;
    actionAfter: string;
    optionIcon: string;
    talkShowType: string;
    groupId: number;
    showDuration: number;
} & ObfuscatedValue;
