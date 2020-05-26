import { AxiosInstance, AxiosResponse } from "axios";
import { SwapiCharactersResponse, SwapiCharacterModel } from "@/types/swapiModels";

export default function(axios: AxiosInstance) {
  async function allCharacters(page = 1): Promise<SwapiCharactersResponse | undefined> {
    try {
      const res = await axios.get(`/people/?page=${page}`);
      return res.data as SwapiCharactersResponse;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function characterById(id: number): Promise<SwapiCharacterModel | undefined> {
    try {
      const res = await axios.get(`/people/${id}`);
      return res.data as SwapiCharacterModel;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function search(search = "", page = 1): Promise<SwapiCharactersResponse | undefined> {
    try {
      const res = await axios.get(`/people/?search=${search}&page=${page}`);
      return res.data as SwapiCharactersResponse;
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
