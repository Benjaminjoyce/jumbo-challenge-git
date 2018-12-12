import type { CharacterResults } from "../flowTypes/characterTypes";
import type { ComicsResults } from "../flowTypes/comicTypes";
import { CardInfoList } from "./CardInfoList";

export const InfoType = (results, type) => {
  if (type === "characters") {
    return CardInfoList(results);
  }
  return CardInfoList(results);
};
