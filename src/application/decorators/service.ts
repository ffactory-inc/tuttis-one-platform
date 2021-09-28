import { decorate, injectable } from 'inversify';
import { DataSource } from '../services/types/DataSource';

export function service(constructor: new () => DataSource): void {
  decorate(injectable(), constructor);
}
