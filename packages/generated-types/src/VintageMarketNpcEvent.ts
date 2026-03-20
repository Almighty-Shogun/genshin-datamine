export type VintageMarketNpcEvent = {
    id: number;
    talkId: number;
    npcId: number;
    duration: number;
    rewardSkillList: number[];
    branchList: {
        talkId: number;
        rewardId: number;
    }[];
    talkDescTextMapHash: number;
};
