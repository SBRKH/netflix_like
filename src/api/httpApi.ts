import axios, {AxiosResponse} from "axios";

export const httpApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    'api_key': 'c42a137fee26a9f019540eecdfadb250'
  }
});

httpApi.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
},  async (error) => {
  return Promise.reject(error.response.data);
});