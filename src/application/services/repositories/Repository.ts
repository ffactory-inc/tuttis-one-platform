import { List, ListParams } from '../../types';
import { DataSource } from '../types';

export abstract class Repository<T> {
  protected datasource: DataSource;
  protected path: string;
  protected constructor(repo: DataSource, path: string = '/') {
    this.path = path;
    this.datasource = repo;
  }

  list(params?: ListParams): Promise<List<T>> {
    return this.datasource.get<List<T>>(this.path, params);
  }

  create(payload: Partial<T>): Promise<T> {
    return this.datasource.create<T>(this.path, payload);
  }

  update(id: string, payload: Partial<T>): Promise<T> {
    return this.datasource.update<T>(`${this.path}/${id}`, payload);
  }

  get(id: string): Promise<T> {
    return this.datasource.get<T>(`${this.path}/${id}`);
  }

  delete(id: string): Promise<T> {
    return this.datasource.delete(`${this.path}/${id}`);
  }
}
