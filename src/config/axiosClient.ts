import axios, { AxiosRequestConfig } from 'axios';
import { HttpClient } from '../hooks/useHttp';

export const axiosClient: HttpClient = {
  async request<T>(url: string, options?: RequestInit): Promise<T> {
    const axiosOptions: AxiosRequestConfig = {
      method: options?.method || 'GET',
      headers: options?.headers as Record<string, string>,
      data: options?.body,
    };

    const response = await axios(url, axiosOptions);
    return response.data;
  },
};
