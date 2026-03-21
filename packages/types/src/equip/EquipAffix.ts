import type { TextMapHash, AdditionProp } from '../common';

export type EquipAffix = {
    addProps: AdditionProp[];
    affixId: number;
    id: number;
    level: number;
    openConfig: string;
    paramList: number[];
} & Omit<TextMapHash, 'titleTextMapHash'>;
