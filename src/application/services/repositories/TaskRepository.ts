import { inject } from '../../decorators';
import { ApiService } from '../ApiService';
import { DataSource } from '../types/DataSource';
import { Repository } from './Repository';

import { Task } from '../types';

const LEADS_PATH = '/leads';

export class TaskService extends Repository<Task> {
  constructor(@inject(ApiService) repository: DataSource) {
    super(repository, LEADS_PATH);
  }
}
