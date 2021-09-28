import { List, ListParams } from '../../types';
import { DataSource } from '../types/DataSource';

export abstract class Repository<T> {
  protected repository: DataSource;
  protected path: string;
  constructor(repo: DataSource, path: string) {
    this.path = path;
    this.repository = repo;
  }

  list(params: ListParams): Promise<List<T>> {
    return this.repository.get<List<T>>(this.path, params);
  }

  create(payload: Partial<T>): Promise<T> {
    return this.repository.create<T>(this.path, payload);
  }

  update(id: string, payload: Partial<T>): Promise<T> {
    return this.repository.update<T>(`${this.path}/${id}`, payload);
  }

  get(id: string): Promise<T> {
    return this.repository.get<T>(`${this.path}/${id}`);
  }

  delete(id: string): Promise<T> {
    return this.repository.delete(`${this.path}/${id}`);
  }
}

export default Repository;
