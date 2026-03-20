export type H5Activity = {
    h5ActivityId: number;
    nameTextMapHash: number;
    detailTextMapHash: number;
    condList: {
        paramStr: string;
        type: string;
    }[];
    condComb: string;
};
