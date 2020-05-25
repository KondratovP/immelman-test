import { DateStr } from "./dateString";

export type urlString = string;

export interface swapiCharactersResponse {
  count: number;
  next: urlString | null;
  previous: urlString | null;
  results: Array<swapiCharacterModel>;
}

export interface swapiCharacterModel {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: urlString;
  films: Array<urlString>;
  species: Array<urlString>;
  vehicles: Array<urlString>;
  starships: Array<urlString>;
  created: DateStr;
  edited: DateStr;
  url: urlString;
}
