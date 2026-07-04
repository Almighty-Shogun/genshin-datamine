import type { CostItem, Element, ObfuscatedValue, TextMapHash } from '../common';
import type {
    DungeonBlockType,
    DungeonInvolveType,
    DungeonPlayType,
    DungeonSettleShow,
    DungeonSettleUIType,
    DungeonStateType,
    DungeonSubType,
    DungeonType,
} from './common';

export type Dungeon = {
    avatarLimitType: number;
    blockType: DungeonBlockType;
    cityID: number;
    dayEnterCount: number;
    displayNameTextMapHash: number;
    enableQuestGuide: boolean;
    enterCostItems: CostItem[];
    entryPicPath: string;
    factorIcon: string;
    factorPic: string;
    failSettleCountdownTime: number;
    firstPassRewardPreviewID: number;
    forbiddenRestart: boolean;
    gearDescTextMapHash: number;
    id: number;
    involveType: DungeonInvolveType;
    isBanDieOptionReviveAfterSettle: boolean;
    isDungeonAllowSwitchTeam: number;
    isDynamicLevel: boolean;
    levelConfigMap: ObfuscatedValue;
    levelRevise: number;
    limitLevel: number;
    mpHideLevel: boolean;
    passCond: number;
    passJumpDungeon: number;
    passRewardPreviewID: number;
    playType: DungeonPlayType;
    previewMonsterList: number[];
    quitSettleCountdownTime: number;
    recommendElementTypes: Element[];
    recommendTips: string[];
    reviveIntervalTime: number;
    reviveMaxCount: number;
    sceneId: number;
    serialId: number;
    settleCountdownTime: number;
    settleShows: DungeonSettleShow[];
    settleUIType: DungeonSettleUIType;
    showLevel: number;
    slipOptimized: boolean;
    stateType: DungeonStateType;
    statueCostCount: number;
    statueCostID: number;
    statueDrop: number;
    subType: DungeonSubType;
    type: DungeonType;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
