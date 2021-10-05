import { Item } from '../../types';

export interface DataSource {
  get<T>(uri: string, params?: Record<string, string | number>): Promise<T>;
  create<Model>(
    uri: string,
    dto: unknown,
    params?: Record<string, string | number>,
  ): Promise<Model>;
  update<Model>(
    uri: string,
    dto: unknown,
    params?: Record<string, string | number>,
  ): Promise<Model>;
  delete<Model>(uri: string, params?: Record<string, string | number>): Promise<Model>;
}
