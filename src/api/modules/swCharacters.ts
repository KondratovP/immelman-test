import { AxiosInstance, AxiosResponse } from "axios";
import {
  swapiCharactersResponse,
  swapiCharacterModel
} from "@/types/swapiModels";

export default function(axios: AxiosInstance) {
  async function allCharacters(
    page = 1 as number
  ): Promise<swapiCharactersResponse | undefined> {
    try {
      const res = await axios.get(`/people/?page=${page}`);
      return res.data as swapiCharactersResponse;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function search(
    search = "" as string,
    page = 1 as number
  ): Promise<AxiosResponse<swapiCharactersResponse | undefined>> {
    try {
      const res = await axios.get(`/people/?search=${search}`);
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function characterById(
    id: string
  ): Promise<swapiCharacterModel | undefined> {
    try {
      const res = await axios.get(`/people/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  return {
    search,
    allCharacters,
    characterById
  };
}
