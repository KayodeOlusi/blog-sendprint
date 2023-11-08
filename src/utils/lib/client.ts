import axios from "axios";
import type { AxiosResponse } from "axios";

export const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const responseBody = (response: AxiosResponse) => response.data;

class HttpClient {
  async get<T>(
    endpoint: string,
    query?: Record<string, string | number>
  ): Promise<T> {
    const response = await Axios.get(endpoint, { params: query });
    return responseBody(response);
  }
  async post<T>(endpoint: string, body: any): Promise<T> {
    const response = await Axios.post(endpoint, body);
    return responseBody(response);
  }
  async put<T>(endpoint: string, body: any): Promise<T> {
    const response = await Axios.put(endpoint, body);
    return responseBody(response);
  }
  async delete<T>(endpoint: string): Promise<T> {
    const response = await Axios.delete(endpoint);
    return responseBody(response);
  }
}

const httpClient = new HttpClient();
export default httpClient;
