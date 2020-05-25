import axios from "axios";
import { BACKEND_URL } from "@/constants/index";
import swCharacters from "./modules/swCharacters";

const axiosInstance = axios.create({
  baseURL: `${BACKEND_URL}/api`
});

const api = {
  swCharacters: swCharacters(axiosInstance)
};

export { axiosInstance as axios, api };
