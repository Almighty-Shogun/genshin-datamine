export type FurnitureGroupRecordType =
    | "GROUP_RECORD_TYPE_NONE"
    | "GROUP_RECORD_TYPE_BALLOON"
    | "GROUP_RECORD_TYPE_EXPLOSION"
    | "GROUP_RECORD_TYPE_RACING"
    | "GROUP_RECORD_TYPE_SEEK"
    | "GROUP_RECORD_TYPE_STAKE";

export type HomeWorldAreaType = "ExteriorArea" | "InteriorArea";
export type HomeWorldSceneType = "Exterior" | "Interior";
export type HomeWorldFieldType =
    | "HOME_FIELD_DRY"
    | "HOME_FIELD_FLOWER"
    | "HOME_FIELD_WATER";
export type HomeWorldNpcQuality = "QUALITY_NONE" | "QUALITY_ORANGE";

export type SpecialFurnitureType =
    | "Apartment"
    | "BlockDependent"
    | "ChangeBgmFurniture"
    | "CoopPictureFrame"
    | "CustomBaseFurnitrue"
    | "CustomNodeFurnitrue"
    | "FarmField"
    | "Fish"
    | "Fishpond"
    | "Fishtank"
    | "FurnitureSuite"
    | "GroupFurnitrue"
    | "LavaFish"
    | "LavaFishpond"
    | "NPC"
    | "NormalFurnitrue"
    | "Paimon"
    | "ServerGadget"
    | "TeleportPoint"
    | "VirtualFurnitrue";

export type FurnitureSurfaceType =
    | "Animal"
    | "Apartment"
    | "Carpet"
    | "Ceil"
    | "Chandelier"
    | "Door"
    | "Floor"
    | "FurnitureSuite"
    | "Ground"
    | "LegoRockery"
    | "NPC"
    | "Road"
    | "StackObjPlane"
    | "Stair"
    | "Wall"
    | "WallBody";

export type HomeworldLevelFunction =
    | "UI_HOMEWORLD_LEVELFUNCTION_AREAUNLOCK"
    | "UI_HOMEWORLD_LEVELFUNCTION_BUILDSLOT"
    | "UI_HOMEWORLD_LEVELFUNCTION_CAMPANIONSHIP"
    | "UI_HOMEWORLD_LEVELFUNCTION_DJINNCHANGE"
    | "UI_HOMEWORLD_LEVELFUNCTION_HOMECOIN"
    | "UI_HOMEWORLD_LEVELFUNCTION_LIMITSHOPGOODS"
    | "UI_HOMEWORLD_LEVELFUNCTION_MODULENUM"
    | "UI_HOMEWORLD_LEVELFUNCTION_NPCNUM"
    | "UI_HOMEWORLD_LEVELFUNCTION_REDUCE_TIME"
    | "UI_HOMEWORLD_LEVELFUNCTION_SHOPLIMITSADD";
