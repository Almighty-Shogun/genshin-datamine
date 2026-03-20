export type FungusCultivate = {
    cultivateId: number;
    fungusId: number;
    taskId: number;
    minStep: number;
    unlockDay: number;
    initialRecipe: number[];
    targetRecipe: number[];
    availableTools: number[];
    presetTemplate: number[][];
    watcherIds: number[];
    copyLimit: number;
    tutorialId: number;
};
