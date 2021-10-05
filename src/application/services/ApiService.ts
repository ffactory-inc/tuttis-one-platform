import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { DataSource } from './types';

type Headers = {
  Authorization?: string;
  [name: string]: string | null | undefined | number;
};

type Params = Record<string, string | number>;

type Config = AxiosRequestConfig & {
  headers?: Headers;
  params?: Params;
};

export class ApiService implements DataSource {
  private config;
  private axios;
  constructor() {
    this.config = {
      headers: {},
      params: {},
    } as Config;

    this.axios = axios.create({
      baseURL: `${process.env.APP_API_SERVER}/api/`,
      paramsSerializer: (data) => qs.stringify(data, { arrayFormat: 'brackets' }),
    });
  }
  async get<T>(uri: string, params: Params = {}): Promise<T> {
    const response = await this.axios.get<T>(uri, this.mergeConfigs(params));
    return response.data;
  }

  async create<T>(uri: string, payload: unknown, params: Params = {}): Promise<T> {
    const response = await this.axios.post<T>(uri, payload, this.mergeConfigs(params));
    return response.data;
  }
  async update<T>(uri: string, payload: unknown, params: Params = {}): Promise<T> {
    const response = await this.axios.put<T>(uri, payload, this.mergeConfigs(params));
    return response.data;
  }
  async delete<T = void>(uri: string, params: Params = {}): Promise<T> {
    const response = await this.axios.delete(uri, this.mergeConfigs(params));
    return response.data as T;
  }

  private mergeConfigs(params: Params): Config {
    return {
      ...this.config,
      params: { ...this.config.params, ...params },
    };
  }
}
