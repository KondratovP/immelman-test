import { SwapiCharacterModel } from "@/types/swapiModels";

export interface SwapiStateModel {
  currentPage: number;
  currentSearch: string;
  currentItems: Array<SwapiCharacterModel | undefined>;
  currentCharacter: SwapiCharacterModel | null;
  totalItems: number;
}

export default class SwapiState implements SwapiStateModel {
  currentPage = 1;
  currentSearch = "";
  currentItems = [];
  currentCharacter = null;
  totalItems = 0;
}
