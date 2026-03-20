export type RqTalk = {
    activeMode: string;
    beginCond: {
        param: string[];
        type: string;
    }[];
    beginCondComb: string;
    beginWay: string;
    dontBlockDaily: boolean;
    heroTalk: string;
    id: number;
    initDialog: number;
    nextRandomTalks: number[];
    nextTalks: number[];
    npcId: number[];
    performCfg: string;
    priority: number;
    questId: number;
    showRandomTalkCount: number;
};
