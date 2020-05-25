import { swapiCharacterModel } from "@/types/swapiModels";

export interface SwapiStateModel {
  currentPage: number;
  currentItems: Array<swapiCharacterModel | undefined>;
  currentCharacter: swapiCharacterModel | null;
}

export default class SwapiState implements SwapiStateModel {
  currentPage = 1;
  currentItems = [];
  currentCharacter = null;
}
