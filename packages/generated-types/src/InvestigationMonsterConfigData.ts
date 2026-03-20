import type { ObfuscatedValue } from './common';

export type InvestigationMonsterConfigData = {
    cityId: number;
    descTextMapHash: number;
    groupIdList: number[];
    icon: string;
    id: number;
    lockDescTextMapHash: number;
    mapMarkCreateCondition: {
        conditionType: string;
    };
    mapMarkCreateType: string;
    monsterCategory: string;
    monsterIdList: number[];
    nameTextMapHash: number;
    occupiedQuestIdList: number[];
    rewardPreviewId: number;
    unlockChapterIdList: number[];
    unlockParentQuestId: number;
    unlockWqParentQuestIdList: number[];
    wqAcceptHintTextMapHash: number;
} & ObfuscatedValue;
