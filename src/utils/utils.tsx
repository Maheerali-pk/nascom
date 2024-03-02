export const toRem = (px: number) => px / 16 + "rem";

export const eventStatusToText = {};

export const farmingTypeToText: { [k in FarmingType]: string } = {
   "community-gardening": "Community Gardening",
   "urban-farming": "Urban Farming",
};
