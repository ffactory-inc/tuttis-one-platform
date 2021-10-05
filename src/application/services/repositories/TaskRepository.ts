import { DataSource } from '../types';
import { Task } from '../../types';
import { Repository } from './Repository';
import { MemoryService } from '../MemoryService';
// import { ApiService } from '../ApiService';

const LEADS_PATH = '/leads';

export class TaskRepository extends Repository<Task> {
  constructor() {
    //const service: DataSource = new ApiService();
    const service: DataSource = new MemoryService();
    super(service, LEADS_PATH);
  }
  // custom API's
}
